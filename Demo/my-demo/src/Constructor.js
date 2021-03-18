import React, { Component } from "react"
class Constructor extends Component {
    Constructor(props) {
        this.Name = "working";
    }
    render() {
        return (
            <div>
                <h1>Hello Name:{this.props.name}</h1>


            </div>);
    }

}
export default Constructor;