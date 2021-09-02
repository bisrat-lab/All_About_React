import { Component } from "react";


class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  increment = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  decrement = () => {
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
  };
  render() {
    return (
      <div>
        <span className={this.bagClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.increment}
          className="btn btn-secondary btn-sm m-2"
        >
          {" "}
          +{" "}
        </button>
        <button
          onClick={this.decrement}
          className="btn btn-secondary btn-sm m-2"
        >
          {" "}
          -{" "}
        </button>
        <button 
        className="btn btn-danger btn-sm" 
        onClick={()=> this.props.onDel(this.props.id)}>
          Delete
        </button>

        {/* <ul>
                  {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
              </ul>

              <div><p>{this.props.title}</p></div> */}
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
  bagClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
