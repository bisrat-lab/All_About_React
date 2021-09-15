import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

export class Products extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("/products").then((res) => {
      let copy = { ...this.state };
      copy.products = res.data;
      this.setState(copy);
    });
  }

  detalBtnHandler = (id) => {
    this.props.history.push("/product/detail/" + id,); 
   

  };


  deleteBtnHandler = (id) => {
    axios.delete("/products/" + id).then((res) => {
      console.log(res.data);
      this.setState({
        products: this.state.products.filter((p) => p.id !== id),
      });
    });
  };
  
  editBtnHandler =(id)=>{
    console.log(id)
    this.props.history.push("/update-product/" + id); 
  }
  
  render() {
    return (
      <div>
        {this.state.products.map((p) => {
          return (
            <Product
              key={p.id}
              name={p.name}
              price={p.price}
              onDetaliBtn={() => this.detalBtnHandler(p.id)}
              onDeleteBtn={() => this.deleteBtnHandler(p.id)}
              onEditBtn ={()=>this.editBtnHandler(p.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
