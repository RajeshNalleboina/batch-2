import React, { Component } from 'react'

export default class States extends Component {
    constructor(){
        super();
        this.state={
            name:"Rajesh"
        }
    }
    clickMe=()=>{
        this.setState(
            {
                name:"Rajesh Nalleboina"
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Heare we are using states</h1>
                <h2>{this.state.name}</h2>
                <button onClick={()=> this.clickMe()}>Click Me...!</button>
            </div>
        )
    }
}
