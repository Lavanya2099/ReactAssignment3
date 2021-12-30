
//parent 
function BookStore(props){

    const data= ["Wings of fire", "Learning how to fly", "Believe in yourself","Power of ur mind"]
    return <div>
        <h1>Welcome to, {props.storeName}</h1>
        <Books details={data}/>
    </div>
}

// child

function Books(props){

    return <div>
        <h2>Books Available</h2>
        {props.details.map((value,index)=>
            {
                return <li key={value+index}>{value}</li>
            }
        )}
        
    </div>
}
ReactDOM.render(<BookStore storeName="BookStore"/>, document.getElementById('container'))