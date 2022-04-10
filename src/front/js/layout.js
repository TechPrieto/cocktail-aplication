import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo, Register } from "./pages/register";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { SignIn } from "./pages/signin";
import { RecipeBrowser } from "./pages/recipeBrowser";
import { RandomDrink } from "./pages/randomDrink";
import { PopularDrinks } from "./component/popularDrinks";
import { FullCards } from "./pages/fullCards";
import { Information } from "./pages/information";
import { Bussines } from "./pages/bussines";
import { ShoppingList } from "./pages/shoppingList";
import { Contacts } from "./pages/contacts";
import { Favorite } from "./pages/favorite";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
              <PopularDrinks />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/recipeBrowser">
              <RecipeBrowser />
            </Route>
            <Route exact path="/randomDrink">
              <RandomDrink />
            </Route>
            <Route exact path="/shopinglist/">
              <ShoppingList />
            </Route>
            <Route exact path="/information/:name" component={Information} />
            <Route exact path="/shoppinglist/" component={ShoppingList} />
            <Route exact path="/bussines" component={Bussines} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/favorite" component={Favorite} />
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
