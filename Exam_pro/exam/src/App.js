import "./App.css";
import HomeComponent from "./HomeComponent";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ViewFileComponent from "./ViewFileComponent";
import ContactUsComponent from "./ContactUsComponent";
import AddProductComponent from "./AddProductComponent";
import ViewProductComponent from "./ViewProductComponent";

function App() {
  return (
    <BrowserRouter>
      <div>
        
          <Link to="/home"> home</Link>
          <Link to="/file">view file</Link>
           <Link to="/contact">contact</Link>
           <Link to="/Addproduct">Add product</Link>
           <Link to="/Viewproduct">View product</Link>
       
      </div>
      <div className="App">

        <Route path="/home"  component={HomeComponent} />
        <Route path="/file"  component={ViewFileComponent}/>
        <Route path="/contact"  component={ContactUsComponent}/>
        <Route path="/Addproduct"  component={AddProductComponent}/>
        <Route path="/Viewproduct"  component={ViewProductComponent}/>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
