// parent to child using functional component

//parent component
function Student(props){

    return <div>
        <h1>Student ID : {props.stuID}</h1>
        <Details studentName="john" stuID={props.stuID} studentBranch="ComputerScience"/>
    </div>
    
}

//Child Component
function Details(props){

    return <div>
        <h3>stuID: {props.stuID}</h3>
        <h3>studentName: {props.studentName}</h3>
        <h3>studentBranch: {props.studentBranch}</h3>
    </div>
}

ReactDOM.render(<Student stuID="40"/>,document.getElementById('container'))