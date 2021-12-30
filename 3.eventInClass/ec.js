
class Employee extends React.Component{
    render(){
        return <div>
            <h1> EmployeeID :{this.props.empID}</h1> 
            <button onClick={this.getData.bind(this)}>Get Details</button>
            <button onClick={()=>{this.getName()}}>Get Name</button>  

            <button onClick={()=>{this.getAge("22")}}>Get Age</button>
        </div>
    }
    getData(){
        alert("Employee Details get executed")
        console.log('EmpDetails get executed');
    }
    getName(){
        console.log(this); 
    }
    
    getAge(data){
        console.log(data); 
    }
}

ReactDOM.render(<Employee empID="01" />, document.getElementById('container'))