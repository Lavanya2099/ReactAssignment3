//child to parent component example 2

//parent component

class Parent extends React.Component{

    state={
        text:''
    }

render(){
    return <div>
        <h1>Parent </h1>
        <h1> getdata from child: {this.state.text} </h1>
        <Child  action={this.getDataFromchild.bind(this)}/>
    </div>
}
getDataFromchild(childdata){
    console.log(childdata);

    this.setState({
        text:childdata
    })
}
}

//child component
function Child(props){
   let str = "I have ur Books";
    return <div>
        <h3>Child</h3>
        

        <button onClick={()=>{props.action(str)}}>send data to Parent</button>
    </div>
}

ReactDOM.render(<Parent />,document.getElementById('container'))