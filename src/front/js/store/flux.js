const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      recipes: [],
      alcoholic: [],
      nonAlcoholic: [],
      users: [],
      loggId: {},
      favorites: [],
      shoppingList: [],
    },
    actions: {
      // getData: (recipe)=>{
      // 	fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita `, {
      // 	})
      // 		.then(response => {
      // 			return response.json();
      // 		})
      // 		.then(data => {
      // 			console.log(data.drinks)
      // 			return setStore({ recipe: data.drinks})
      // 		})
      // 		.catch(err => {
      // 			console.error(err);
      // 		});
      // },

      fetchRes: async (recipeInp) => {
        const res = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/search.php?s=${recipeInp}`
        );
        const data = await res.json();
        // setRecipeInp("");
        setStore({ recipes: data.drinks });
      },

      fetchNonAlcoholic: async () => {
        const res = await fetch(
          "https://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        const data = await res.json();

        let localRecipes = [];
        for (let cocktail of data.drinks) {
          const response = await fetch(
            `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
          );
          const result = await response.json();
          localRecipes.push(result.drinks[0]);
          //   console.log(localRecipes);
        }
        setStore({ nonAlcoholic: localRecipes });
      },

      fetchAlcoholic: async () => {
        const res = await fetch(
          "https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        );
        const data = await res.json();
        let localRecipes = [];
        for (let cocktail of data.drinks) {
          const response = await fetch(
            `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
          );
          const result = await response.json();
          localRecipes.push(result.drinks[0]);
          //   console.log(localRecipes);
        }
        setStore({ alcoholic: localRecipes });
      },

      registerUsers: (user) => {
        const newUser = getStore().users;
        newUser.push(user);
        setStore({ users: newUser });
      },
      LogInUsers: (userLogged) => {
        // const log = getStore().loggId;
        // log.push(userLogged)
        setStore({ loggId: userLogged });
      },
      logOut: () => {
        setStore({ loggId: {} });
      },
      addFav: (fav) => {
        // get the store
        let favorites = getStore().favorites;
        const found = favorites.find((item) => item == fav);
        if (found) {
          favorites = favorites.filter((element) => element !== fav);
        } else {
          favorites.push(fav);
        }
        // reset the global store
        setStore({ favorites: favorites });
      },

      deleteFav: (fav) => {
        var deleteFavo = getStore().favorites;
        let delet = deleteFavo.filter((element) => element !== fav);
        setStore({ favorites: delet });
      },

      //Metodo para actualizar el store...

      // addToShopingList: (list) => {
      //   //get the store
      //   const newList = getStore().shopingList;
      //   console.log(newList);
      //   newList.push(list);

      //   //reset the global store
      //   setStore({ shopingList: newList });

      // },

      //###############ShopingList Here#######################

      getShoppingListData: () => {
        fetch(process.env.BACKEND_URL + "/api/shoppinglist")
          .then((response) => response.json())
          .then((data) => setStore({ shoppingList: data }))
          .catch((err) => console.log(err));
      },

      addToShopingList: (drinkID, drinkName, ingredients) => {
        let storeShoppingList = getStore().shoppingList;
        const found = storeShoppingList.find(
          (item) => item.drink_id == drinkID
        );
        if (found) {
          alert("That drink exist");
        } else {
          let ingredientString = ingredients.toString();
          fetch(process.env.BACKEND_URL + "/api/shoppinglist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              drink_id: drinkID,
              drink_name: drinkName,
              ingredient_name: ingredientString,
              is_done: false,
            }),
          })
            .then((response) => response.json())
            .then((data) => setStore({ shoppingList: data }))
            .catch((err) => console.log(err));
        }
      },

      deleteShoppingList: (id) => {
        fetch(process.env.BACKEND_URL + "/api/shoppinglist/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setStore({ shoppingList: data }))
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
