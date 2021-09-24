// import React, { Component } from "react";
// import axios from "axios";
// import ProductCopmonent from "./ProductCopmonent";
// export class ViewProductComponent extends Component {
//   state = {
//     products: [],

//   };
//   componentDidMount() {
//     axios.get("http://localhost:4444/api/products").then((res) => {
//       let copy = { ...this.state };
//       copy.products = res.data;
//       this.setState(copy);
//     });
//   }

//   incBtn = (id) => {
//     let result = this.state.products.find((p) => p.id === id);
//     console.log(result);
//     this.setState({
//       products: this.state.products.map((x) =>
//         x.id === id ? { ...result, count: result.count + 1 } : x
//       ),
//     });

//     axios
//       .patch("http://localhost:4444/api/products/" + id, result)
//       .then((res) => {
//         console.log("deced");
//       });
//   };

//   decBtn = (id) => {
//     let result = this.state.products.find((p) => p.id === id);
//     console.log(result);
//     this.setState({
//       products: this.state.products.map((x) =>
//         x.id === id ? { ...result, count: result.count - 1 } : x
//       ),
//     });

//     axios
//       .patch("http://localhost:4444/api/products/" + id, result)
//       .then((res) => {
//         console.log("deced");
//       });
//   };

//   delBtn = (id) => {
//     axios.delete("http://localhost:4444/api/products/" + id).then((res) => {
//       this.setState({
//         products: this.state.products.filter((p) => p.id !== id),
//       });
//     });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.products.map((p) => {
//           return (
//             <ProductCopmonent
//               key={p.id}
//               productName={p.productName}
//               count={p.count}
//               inc={() => this.incBtn(p.id)}
//               dec={() => this.decBtn(p.id)}
//               del={() => this.delBtn(p.id)}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ViewProductComponent;

import React, { Component } from "react";
import axios from "axios";
import ProductCopmonent from "./ProductCopmonent";

export class ViewProductComponent extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("http://localhost:4444/api/products").then((res) => {
      let copy = { ...this.state };
      copy.products = res.data;
      this.setState(copy);
    });
  }

  incBtn = (item) => {
    console.log(item)
    let result = this.state.products.find((p) => p.id === item.id);

    this.setState({
      products: this.state.products.map((p) =>
        p.id === item.id ? { ...result, count: result.count + 1 } : p
      ),
    });

    console.log(result);

    axios.patch("http://localhost:4444/api/products/" +item.id,result ).then(res=>{

    })
  };

  delBtn = (id) => {
    axios.delete("http://localhost:4444/api/products/" + id).then((res) => {
      this.setState({
        products: this.state.products.filter((p) => p.id !== id),
      });
    });
  };

  render() {
    let itemprice = this.state.products.reduce(
      (a, c) => a + c.count * c.price,
      0
    );
    console.log(itemprice);
    return (
      <div>
        {this.state.products.map((p) => {
          return (
            <ProductCopmonent
              productName={p.productName}
              price={p.price}
              count={p.count}
              total={itemprice}
              inc={() => this.incBtn(p)}
              dec={() => this.decBtn(p.id)}
              del={() => this.delBtn(p.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ViewProductComponent;
