type GreetProps = {
    value?:String
    data?:number
    myClick?: () => void;
}

const Greet = (props:GreetProps) => {
    const clickHandler = () =>{
        alert("Clicked on " + props.value);
    }
    return(
        <div>
        <div> Welcome to {props.value} {props.data}.</div>
        <p><button onClick={props.myClick}>Click me</button></p>
        </div>
    )
}

export default Greet