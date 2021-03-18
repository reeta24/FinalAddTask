import React, { Component } from "react";
class ShowDataTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: ""

        }
    }
    SendData = () => {
        const response =
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => console.log(response.json()))
                .then((json) => console.log(json));


    }

    render() {

        return
        (
            <div>
                <button onClick={this.SendData}>submit</button>
            </div>

        )

    }
}
export default ShowDataTable;