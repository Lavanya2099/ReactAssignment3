//child to parent component example 1

//parent component

class Employee extends React.Component{

    state={
        text:''
    }

render(){
    return <div>
        <h1>Employee Name</h1>
        <h1> from Names: {this.state.text} </h1>
        <Names  action={this.getDataFromNames.bind(this)}/>
    </div>
}
getDataFromNames(namesdata){
    console.log(namesdata);

    this.setState({
        text:namesdata
    })
}
}

//child component
function Names(props){
     let str="John"
    return <div>
        <h3>Names of Employee</h3>
        

        <button onClick={()=>{props.action(str)}}>send data </button>
    </div>
}

ReactDOM.render(<Employee />,document.getElementById('container'))