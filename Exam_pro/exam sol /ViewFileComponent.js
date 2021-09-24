import React, { Component } from "react";
import axios from "axios";
export class ViewFileComponent extends Component {
  state = {
    file: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4444/api/file").then((res) => {
      let copy = { ...this.state };
      copy.file = res.data;
      this.setState(copy);
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>file</th>
              <th>Size</th>
              <th>Public</th>
            </tr>
          </thead>
          <tbody>
            {this.state.file.map((f) => {
              return (
                //    <div key={f.id}>
                //  <p>{f.date}</p>
                //  <p>{f.filename}</p>
                //  <p>{f.fileSize}</p>
                //  <p>{f.isPublic}</p>
                //  </div>

                <tr>
                  <td>{f.date}</td>
                  <td>{f.filename}</td>
                  <td>{f.fileSize}</td>
                  <td>{f.isPublic}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewFileComponent;
