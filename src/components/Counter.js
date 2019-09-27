import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num : 0
        }
    }

    handlePlusButton = () =>{
        this.setState({
            num : this.state.num + 1
        })
    }

    handleMinusButton = () =>{
        this.setState({
            num : this.state.num - 1
        })
    }

    render(){
        return(
            <div>
                <h1>counter</h1>
                <button onClick={this.handlePlusButton}>+</button>
                <button onClick={this.handleMinusButton}>-</button>
                <h2>result : {this.state.num} </h2>
            </div>
        );
    }
}

export default Counter