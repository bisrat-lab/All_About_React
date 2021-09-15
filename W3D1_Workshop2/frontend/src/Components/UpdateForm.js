import React, { Component } from "react";
import axios from "axios";

export class UpdateForm extends Component {
  state = {
    product: {name:'', price:'',brand:'',model:''},
  };

  componentDidMount() {
    axios.get('/products/'+ this.props.match.params.id) 
    .then(res=>{
        let copy = {...this.state}
        copy.product = res.data
        this.setState(copy)
    })
  }

  applyBtn =()=>{
      axios.put(`/products/${this.props.match.params.id}`,this.state.product)
      .then(res=>{
          console.log('good')
          this.props.history.push('/all-product')
      })
  }

  inputHandler=(e)=>{
     let copy = {...this.state.product}
     copy[e.target.name] = e.target.value
     this.setState({product:copy})
  }
  render() {
    return (
      <div className='card m-2'>
        <div className='m-2'>
          Name:<input
          value={this.state.product.name}
          name= 'name'
          onChange = {(e)=>this.inputHandler(e)}
          />
        </div>
        <div className='m-2'>
          Price: <input 
           value={this.state.product.price}
           name='price'
           onChange = {(e)=>this.inputHandler(e)}
          />
        </div>
        <div className='m-2'>
          Brand:<input 
           value={this.state.product.brand}
           name='brand'
           onChange = {(e)=>this.inputHandler(e)}
          />
        </div>
        <div className='m-2'>
          Model:<input
           value={this.state.product.model}
           name='model'
           onChange = {(e)=>this.inputHandler(e)}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.applyBtn}>Apply</button>
        </div>
      </div>
    );
  }
}

export default UpdateForm;
