class LoginForm extends React.Component{
    state={
        userName:"Lavanya",
        password: ".....",
        isSignUp:true
    }
    render(){
        let {userName,password,isSignUp} =this.state;
        let renderData=null

        if(isSignUp){
            renderData=<div>
                
               <h1>Please Sign Up</h1>
            </div>
        }else{
            renderData=<div>
                <h3> USER NAME : {userName} </h3>
                <h3> PASSWORD:  {password}</h3>
            </div>
        }
        return <div>
            { renderData}
           
            <button onClick={()=>{this.loginLogoutView()}}>{isSignUp ? " Login"
            :"Logout"}</button>
            
        </div>
    }

    loginLogoutView(){
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }
}

ReactDOM.render(<LoginForm/>,document.getElementById('container'))