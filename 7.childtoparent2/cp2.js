class Mother extends React.Component{
    state={
        text:""
    }
    render(){
        return <div>
            <h1>Mother: What you want</h1>
            <h2> from child: {this.state.data} </h2>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }
    getDataFromChild(msg){
        this.setState(
            {data:msg}
        )
    }
}

function Child(props){
    let msg="I want pocket money";
    return<div>
        <button onClick={()=>{props.action(msg)}}>send data</button>
    </div>
}
ReactDOM.render(<Mother/>,document.getElementById('container'))