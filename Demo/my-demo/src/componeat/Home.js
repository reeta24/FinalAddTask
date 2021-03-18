import { Component } from "react";
var alphaExp = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            titleError: false,
            bodyError: false
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
    handleSubmit = (event) => {
        if (this.state.title !== "" && this.state.body !== "" && alphaExp.test(this.state.title) && alphaExp.test(this.state.body)) {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: this.state.title,
                    body: this.state.body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
        this.setState({
            title: "",
            body: "",

        });


        // event.preventDefault();
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
                    {this.state.bodyError ? "Enter Proper Body" : ""}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default Home;