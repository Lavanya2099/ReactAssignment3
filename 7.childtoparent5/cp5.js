class Mother extends React.Component{
    state={
        data:"",
        sam:"",
        raju:""
    }
    render(){
        return <div>
            <h1>Mother: What u guys want for Today's Snacks?</h1>
            <h2>Rosy:{this.state.data} </h2>
            <h2>Sam: {this.state.sam}</h2>
            <h2>Raju: {this.state.raju}</h2>
            <Children action={this.getData.bind(this)}/>
        </div>
    }
    getData(dmsg,smsg,rmsg){
        this.setState({
            data:dmsg, sam:smsg , raju:rmsg
         } )
    }
}

function Children(props){
    let rosy="I want Pizza";
    let sam="I want Sandwich";
    let raju="I want IceCream "
    return<div>
        <button onClick={()=>{props.action(rosy,sam,raju)}}>send data</button>
    </div>
}
ReactDOM.render(<Mother/>,document.getElementById('container'))