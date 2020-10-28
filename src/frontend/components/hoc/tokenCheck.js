import React, { Component } from "react";

const tokenCheck = (ChildComponent) => {

    class extends Component {

        constructor(props) {
        super(props)
        }
        
        componentDidMount ()  {
            const token = localStorage.getItem('token')
            if (!token) {
                this.props.history.push('/login')
            }
        }

    render() {
        return (
            <ChildComponent {...this.props}/>
        )
    }
}

}

export default tokenCheck
