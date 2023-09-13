import React from "react";

export default class Logout extends React.Component {
    componentDidMount() {
        localStorage.clear();
        setTimeout(()=> {
            this.props.history.push("/login")
        },200)
    }
   render() {
    return (
        <div>
            ...Loggin Out
        </div>
    )
   } 
}
