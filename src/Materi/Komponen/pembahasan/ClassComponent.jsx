import React from "react";

class ClassComponent extends React.Component {
  //method render wajib mengembalikan data/element (return)
  render() {
    return (
      //element dari suatu komponen itu wajib dibungkus 1 parent element
      <div>
        <h1>Hello World</h1>
        <h2>Komponen ini dibuat dengan class Component</h2>
      </div>
    );
  }
}

export default ClassComponent;
