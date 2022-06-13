import React, { Component } from 'react'

let style = {    
    display:"inline-block",    width:"400px",    height:"50px",    background:"blue"
}

//rcc 클래스형 함수 단축키
export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
            <h1 style={style}>hello ClassComponent</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
