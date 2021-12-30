//eventsinfunctional component

function Greet(props){
    const getData=()=>{
        alert("Hi, Welcome to React js")
        console.log(props.message)
    }
    return (
        <div>
            <button onClick={()=>getData()}>Click me</button>
        </div>
    )
}
ReactDOM.render(<Greet message="Hi, Welcome to React js"/>,document.getElementById('container'))
