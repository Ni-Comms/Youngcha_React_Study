import React, { Component } from 'react'


let style = {    
    display:"inline-block",    width:"400px",    height:"50px",    background:"orange"
}

//rcc
export default class ClassComponent extends Component {
    
    constructor (props){
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.timerID = setInterval(() => this.tick(), 10000);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount (){
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    tick(){
        //console.log('tick');
        this.setState({date : new Date()});
    }
    

    //arrowfunction을 사용하면 this.state 라는 값을 따로 지정을 안해도 알수 있음.
    handleClick = () =>{
        alert(this.state.date);  
    }

    render() {
        console.log('render');
        return (
        <div>
            <h1 style={style} onClick={this.handleClick}>hello LifeCycleComponent</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }
}
