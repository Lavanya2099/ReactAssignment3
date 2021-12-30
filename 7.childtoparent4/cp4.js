class Dad extends React.Component{
    state={
       text :""
    }
    render(){
        return <div>
            <h1>Dad: What you want for ur Birthday </h1>
            <h2>Child:  {this.state.text}</h2>
            <Child action={this.getData.bind(this)}/>
        </div>
    }
    getData(msg){
        this.setState(
            {text:msg}
        )
    }
}

function Child(props){
    let msg="I Want Car";
    return<div>
        <button onClick={()=>{props.action(msg)}}>send data</button>
    </div>
}
ReactDOM.render(<Dad/>,document.getElementById('container'))