import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import CreateProduct from "./Components/CreateProduct";
import CreateReview from "./Components/CreateReview";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/ProductDetail";
import Products from "./Components/Products";
import Register from "./Components/Register";
import UpdateForm from "./Components/UpdateForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App container">
       

       
          <Route path='/all-product' component={Products}/>
          <Route path="/login" component ={Login}/>
          <Route path="/register" component ={Register}/>
          
          <Route path="/create-product" component ={CreateProduct}/>
          <Route path="/update-product/:id" component ={UpdateForm}/>

        
          <Route path="/product/detail/:id" component ={ProductDetail}/>
          {/* <Route path="/product/detail/:id" component ={CreateReview}/> */}
 

      </div>
    </BrowserRouter>
  );
}

export default App;
