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
            <table>
                <thead>
                    <tr>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Good</td>
                        <td>{props.good}</td>
                    </tr>
                    <tr>
                        <td>Neutral</td>
                        <td>{props.neutral}</td>
                    </tr>
                    <tr>
                        <td>Bad</td>
                        <td>{props.bad}</td>
                    </tr>
                    <tr>
                    <Results handleItem={()=>getAll()} text={"All"}/>
                    </tr>
                    <tr>
                    <Results handleItem={()=>getAverage()} text={"Average"}/>
                    </tr>
                    <tr>
                    <Results handleItem={()=>getPercentage()} text={"Positive"}/>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

const Button = (props)=>{
   return( <button onClick={props.handleClick}>{props.text}</button>)
}

const Results = (props)=>{
    return(
        <Fragment>
            <td>{props.text}</td>
            <td>{props.handleItem()}</td>
        </Fragment>
    )
}

const Unicafe = () => {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return(
        <div>
            <h1>UNICAFE</h1>
            <div style={{marginBottom:"20px"}}>
                <h2>Give feedback</h2>
                <Button handleClick={()=>setGood(good+1)} text="Good"/>
                <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral"/>
                <Button handleClick={()=>setBad(bad+1)} text="Bad"/>
            </div>
            {good || neutral || bad ?
                <Statistics good={good} bad={bad} neutral={neutral}/>
            : "No feedback given"}
            
        </div>
    )
}

export default Unicafe;