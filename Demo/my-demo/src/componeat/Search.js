import React, { Component } from "react";
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: ""
        }
    }
    Submit = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => console.log(response.json()))
            .then((json) => console.log(json));
    }
    render() {
        return (

            <div>
                <button onclick={this.Submit}>Send</button>
            </div>
        )
    }
}
export default Search;