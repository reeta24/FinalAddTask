import React, { Component } from "react";
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [

                { id: 1, name: "rits", age: 12, email: "reeta@gmail.com" },
                { id: 2, name: "abc", age: 13, email: "reeta@gmail.com" },
                { id: 3, name: "parmar", age: 14, email: "reeta@gmail.com" },
                { id: 4, name: "efg", age: 15, email: "reeta@gmail.com" },
                { id: 5, name: "rits", age: 12, email: "reeta@gmail.com" },
                { id: 2, name: "abc", age: 13, email: "reeta@gmail.com" },
                { id: 3, name: "parmar", age: 14, email: "reeta@gmail.com" },
                { id: 4, name: "efg", age: 15, email: "reeta@gmail.com" }



            ]


        }
    }

    TableData = () => {

        return this.state.students.map((student => {
            const { id, name, age, email } = student
            return (
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>

                </tr>
            )
        }))

    }
    render() {

        return (

            <div>
                <h1>Table Data</h1>
                {/* <button onClick={this.TableData}>send</button> */}
                <table id="student">
                    <tbody>{this.TableData}</tbody>
                </table>
            </div>
        )
    }
}
export default Table;