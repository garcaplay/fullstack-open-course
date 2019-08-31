import React, {useState, Fragment} from 'react';

const Statistics = (props) =>{
    const getAll = ()=> {
        const allSum = props.good + props.neutral + props.bad;
        return allSum;
    }

    const getAverage = () => {
        const average = (props.good + props.neutral + props.bad)/3;
        return average;
    }

    const getPercentage = () => {
        const total = props.good + props.neutral + props.bad;
        const percentage = props.good ? `${props.good / total * 100}%` : "0%";
        
        return percentage
    }
    return (
        <Fragment>
            <h2>Statistics</h2>
            <p>Good <span>{props.good}</span></p>
            <p>Neutral <span>{props.neutral}</span></p>
            <p>Bad <span>{props.bad}</span></p>
            <Results handleItem={()=>getAll()} text={"All"}/>
            <Results handleItem={()=>getAverage()} text={"Average"}/>
            <Results handleItem={()=>getPercentage()} text={"Positive"}/>
        </Fragment>
    )
}

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

    return(
        <div>
            <h1>UNICAFE</h1>
            <div>
                <h2>Give feedback</h2>
                <Button handleClick={()=>setGood(good+1)} text="Good"/>
                <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral"/>
                <Button handleClick={()=>setBad(bad+1)} text="Bad"/>
            </div>
            <Statistics good={good} bad={bad} neutral={neutral}/>
        </div>
    )
}

export default Unicafe;