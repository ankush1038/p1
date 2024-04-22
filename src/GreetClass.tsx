import React,{Component} from 'react';

type GreetProps = {
    value?: String;
}

export default class GreetClass extends React.Component<GreetProps>{

    clickHandler = () =>{
        alert("Clicked")
    }

    render(){
        return(
            <div> 
                Welcome to class {this.props.value}
                <p><button onClick={this.clickHandler}>Click me</button></p>
            </div>
        )
    }
}

