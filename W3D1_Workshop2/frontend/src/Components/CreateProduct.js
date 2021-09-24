import React, { Component } from 'react'
import axios from 'axios'

export class CreateProduct extends Component {
    state = {
        product :{
            name:"",
            price:0,
            brand:"",
            model:""
        }
    }
    
    inputHandler =(e)=>{
       let copy = {...this.state.product}
       copy[e.target.name] = e.target.value;
       this.setState({product:copy})
    }
     

    saveBtnHandler =()=>{
        if((this.nameValidator(this.state.product.name)) &&
        this.priceValidator(this.state.product.price)){
             axios.post('/products/',this.state.product)
        .then(res=>{
             console.log(res)
             this.props.history.push('/all-product')
        })
        }
       
    }
    nameValidator(name){
        if(name.length > 4){
            return true 
        }else{
            alert('name must grater than 4 char')
            return false
        }
    }

    priceValidator(price){
        if(isNaN(price)){
            alert('Please enter a number')
            return false
        }else{
            if(price > 1 && price < 100){
                return true 
            }else{
                alert('price must between 1 to 100')
                return false
    
            }
     
        }
        
    }

    render() {
        return (
            <div className = 'card2'>
                <div>
                 Name:<input name='name' onChange={(e)=>this.inputHandler(e)}/>
               </div>
               <div>
                  Price:<input name='price' onChange={(e)=>this.inputHandler(e)}/>
               </div>
               <div>
                  Brand:<input name='brand' onChange={(e)=>this.inputHandler(e)}/>
               </div> <div>
                 Model:<input name='model' onChange={(e)=>this.inputHandler(e)}/>
               </div>
               <div>
                  <button className='btn btn-primary m-2' onClick={this.saveBtnHandler} >Save</button>
               </div>
            </div>
        )
    }
}

export default CreateProduct
