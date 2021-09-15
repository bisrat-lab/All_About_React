import axios from "axios";
import React, { Component } from "react";
import Review from "./Review";

export class ProductDetail extends Component {
  state = {
    product: {
      name: "",
      price: 0,
      brand: "",
      model: "",
      review: [],
    },
    newReview :{
      title:"",
      des:""
    }
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3333/products/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        let copy = { ...this.state };
        copy.product = res.data;
        this.setState(copy);
      });
  }

  reviewInput =(e)=>{
    let copy = {...this.state.newReview}
    copy[e.target.name] = e.target.value
    this.setState({newReview:copy})
  }

  reviewPostBtn=()=>{
    axios.post(`http://localhost:3333/products/${this.props.match.params.id}/review`,this.state.newReview)
         .then(res=>{
          this.setState({review:this.state.product.review.push(this.state.newReview)});
          
          this.setState({newReview:{title:"",des:""}})
         })
        

  }

  render() {
    return (
      <div className="card2 ">
        <h3>Product Detail</h3>
        <p>{this.state.product.name}</p>
        <p>{this.state.product.price}</p>
        <p>{this.state.product.brand}</p>
        <p>{this.state.product.model}</p>
        <h3>Product Review</h3>
        {this.state.product.review.map((r) => {
          return (
            <div className="card3 m-3">
              <p><strong>{r.title}</strong></p>
              <p>{r.des}</p>  
            </div>
          );
        })}
         <Review
           inputhandler = {(e)=>this.reviewInput(e)}
           inputhandler2 = {(e)=>this.reviewInput(e)}
           postHandler = {this.reviewPostBtn}
           title = {this.state.newReview.title}
           des = {this.state.newReview.des}
         />
      </div>
    );
  }
}

export default ProductDetail;
