import React, {useState} from 'react';

const Button = (props)=>{
   return( <button onClick={props.handleClick}>{props.text}</button>)
}

const Results = (props)=>{
    return(
        <p>{props.text} <span>{props.handleItem()}</span></p>
    )
}

const Unicafe = () => {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const getAll = ()=> {
        const allSum = good + neutral + bad;
        return allSum;
    }

    const getAverage = () => {
        const average = (good + neutral + bad)/3;
        return average;
    }

    const getPercentage = () => {
        const total = good + neutral + bad;
        const percentage = good ? `${good / total * 100}%` : "0%";
        
        return percentage
    }

    return(
        <div>
            <h1>UNICAFE</h1>
            <div>
                <h2>Give feedback</h2>
                <Button handleClick={()=>setGood(good+1)} text="Good"/>
                <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral"/>
                <Button handleClick={()=>setBad(bad+1)} text="Bad"/>
            </div>
            <div>
                <h2>Statistics</h2>
                <p>Good <span>{good}</span></p>
                <p>Neutral <span>{neutral}</span></p>
                <p>Bad <span>{bad}</span></p>
                <Results handleItem={()=>getAll()} text={"All"}/>
                <Results handleItem={()=>getAverage()} text={"Average"}/>
                <Results handleItem={()=>getPercentage()} text={"Positive"}/>
            </div>
        </div>
    )
}

export default Unicafe;