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
                <button onClick={this.clickHandler}>Clicked</button>
            </div>
        )
    }
}

