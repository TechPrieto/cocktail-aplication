const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			recipe: [],
			users: [],
			loggId: [],
			favorites: [],
			shopingList: [],
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
			// }

			registerUsers: (user) => {
				const newUser = getStore().users;
				newUser.push(user)
				setStore({ users: newUser });
			},
			LogInUsers: (userLogged) => {
				const log = getStore().loggId;
				log.push(userLogged)
				setStore({ loggId: log });
			},
			addFav: (fav) => {

				//get the store
				let favorites = getStore().favorites;
				const found = favorites.find((item)=> item == fav )
				if(found){
					favorites = favorites.filter((element) => element !== fav)
				}else{

					favorites.push(fav)
				}
				//reset the global store
				setStore({ favorites: favorites });
				
			},





			deleteFav: (fav) => {
				var deleteFavo = getStore().favorites;
				let delet = deleteFavo.filter((element) => element !== fav)
				setStore({ favorites: delet });
			},

		  addToShopingList : (list) => {
			  //get the store
				const newList = getStore().shopingList;
				console.log(newList);
				newList.push(list)
		
				//reset the global store
				setStore({ shopingList: newList });
		  }

		}
	};
};

export default getState;
