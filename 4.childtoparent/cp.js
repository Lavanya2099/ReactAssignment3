//child to parent component

//parent component

class Students extends React.Component{

    state={
        text:''
    }

render(){
    return <div>
        <h1>Students Name</h1>
        <h2>data from Names: {this.state.text} </h2>
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
    let str="Display Names";
    return <div>
        <h3>Names of the Students</h3>
        <button onClick={()=>{props.action(str)}}>send data</button>
    </div>
}

ReactDOM.render(<Students />,document.getElementById('container'))