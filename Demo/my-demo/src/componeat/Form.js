import React, { Component } from "react";

var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var alphaExp = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            email: "",
            titleError: false,
            bodyError: false,
            emailError: false
        };
    }
    firsthandler = (event) => {

        this.setState({
            title: event.target.value
        });
        if ((this.state.title.length > 0 && !alphaExp.test(this.state.title))) {
            this.setState({
                titleError: true
            })
        }
        else {
            this.setState({
                titleError: false
            })
        }
    };
    lasthandler = (event) => {
        this.setState({
            body: event.target.value

        });
        if ((this.state.body.length > 0 && !alphaExp.test(this.state.body))) {
            this.setState({
                bodyError: true
            })
        }
        else {
            this.setState({
                bodyError: false
            })
        }
    };
    emailhandler = (event) => {

        this.setState({
            email: event.target.value
        });
        if (!emailRegex.test(this.state.email)) {
            this.setState({
                emailError: true
            })
        }
        else {
            this.setState({
                emailError: false
            })
        }
    };
    handleSubmit = (event) => {

        this.setState({
            title: "",
            body: "",
            email: ""

        });


        event.preventDefault();
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.firsthandler}
                        id="title"
                        placeholder="your title"
                    />{this.state.titleError ? "Enter Proper Tiitle" : ""}
                    <label>body:</label>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.lasthandler}
                        id="body"
                        placeholder="your body"
                    />
                    {this.state.bodyError ? "Enter Proper body" : ""}
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.lasthandler}
                        id="email"
                        placeholder="your email address"
                    />
                    {this.state.emailError ? "Enter Proper email" : ""}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default Form;