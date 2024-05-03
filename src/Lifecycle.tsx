import React from "react";

interface Iprops{

}
interface Istate{

}
export default class Lifecycle extends React.Component<Iprops,Istate>{

    constructor(props:Iprops){
        super(props);
        console.log('Constructor A');
        
    }
    static getDerivedStateFromProps(props:Iprops ,state:Istate){
        console.log("Derived of A");
        return null;

    }
    render(){
        console.log("Render A");
        return(
            <div> Life Cycle A</div>
            
        )
    }
    componentDidMount(): void {
        console.log("Mount A");
                
    }
}