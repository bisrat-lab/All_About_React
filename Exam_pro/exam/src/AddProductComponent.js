// import axios from "axios";
// import React, { Component } from "react";

// export class AddProductComponent extends Component {
//   state = {
//     product: {
//       productName: "",
//       price: "",
//     },
//   };
//   onChange = (e) => {
//     let copy = this.state.product;
//     copy[e.target.name] = e.target.value;
//     this.setState({ product: copy });
//   };
//   saveBtn = (e) => {
//     e.preventDefault();
//     if(this.isNameValide(this.state.product.productName.length)&&(this.isPriceValide(this.state.product.price))){
//  axios
//       .post("http://localhost:4444/api/products", this.state.product)
//       .then((res) => {
//           console.log('done')
//       });
//   };
//     }
   

//   isNameValide(nameInput) {
//     if (nameInput < 5) {
//       alert("name input > 5");
//       return false;
//     } else {
//       return true;
//     }
//   }

//   isPriceValide(priceInput) {
//     if (isNaN(priceInput)) {
//         alert('price must be number')
//     }else{
//         if(priceInput > 0 && priceInput <= 100 && priceInput !== ""){
//             return true
//         }else{
//             alert('price must < 100')
//             return false
//         }
//     }
//   }

//   render() {
//     return (
//       <form onSubmit={(e) => this.saveBtn(e)}>
//         Product Name
//         <input name="productName" onChange={this.onChange} />
//         Price
//         <input name="price" onChange={this.onChange} />
//         <button type="submit">save</button>
//       </form>
//     );
//   }
// }

// export default AddProductComponent;



import React, { Component } from 'react'
import axios from "axios";
export class AddProductComponent extends Component {
  state = {
    product:{
       productName : '',
    price: ''
    }
   
  }

  onChange =(e)=>{
    let copy = {...this.state.product}
    copy[e.target.name]= e.target.value
    this.setState({product:copy})
  }

  onSubmitForm=(e)=>{
    
    e.preventDefault()
    if((this.nameValidator(this.state.product.productName))&&(this.priceValidator(this.state
      .product.price))){
      axios.post("http://localhost:4444/api/products",this.state.product)
    .then(res =>{
      console.log('posted')
    })
    }
    
  }

  nameValidator(name){
    if(name.length> 5){
      return true
    }else{
      alert('name must be >5')
      return false
    }
  }
  priceValidator(price){
    if(isNaN(price)){
      alert('enter only number')
      return false
    }else {
       if(price >0 && price <=100){
         return true
       }else{
         alert('enter between 0 and 100')
         return false
       }
    }
  }

  render() {
    return (
      <form onSubmit={(e)=>this.onSubmitForm(e)}>
        Name : <input name="productName" onChange={this.onChange}/>
        price: <input name='price' onChange={this.onChange}/>
        <button type='submit'>Save</button>
      </form>
    )
  }
}

export default AddProductComponent
