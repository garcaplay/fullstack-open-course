import React, {useState, Fragment} from 'react';

const anecdotesArray = [
   {text: 'If it hurts, do it more often', vote:0},
   { text: 'Adding manpower to a late software project makes it later!', vote:0},
    {text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote:0},
    {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0},
    {text:'Premature optimization is the root of all evil.',vote:12},
    { text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote:0}
  ]


const Anecdotes = () => {
    
    const [selected, setSelected] = useState(0);
    const [anecdotes, setAnecdotes] = useState(anecdotesArray);
    const getRandomAnecdote = ()=>{
        const randomNumber = Math.random()*(anecdotesArray.length - 0) + 0;
        setSelected(Math.floor(randomNumber));
    }
    const handleAnecdoteVote =()=>{
        const anecdotesArrayCopy = [...anecdotes];
        anecdotesArrayCopy[selected].vote += 1; 
        setAnecdotes(anecdotesArrayCopy);
    }
const anecdoteWithMostVotes = anecdotes.reduce((anecdote1, anecdote2) => anecdote1.vote > anecdote2.vote ? anecdote1 : anecdote2);
    return(
        <Fragment>
            <div>
                <h2>Anecdote of the day</h2>
                <p>
                {anecdotes[selected].text} 
                </p>
                <p>Has {anecdotes[selected].vote} votes</p>
            </div>
            <div>
                <button onClick={handleAnecdoteVote}>Vote anecdote</button>
                <button onClick={getRandomAnecdote}>Next anecdote</button>
            </div>
            <div>
                <h2>Anecdote with most votes</h2>
                <p>{anecdoteWithMostVotes.text}</p>
                <p>Has {anecdoteWithMostVotes.vote} votes</p>
            </div>
        </Fragment>
    )
}

export default Anecdotes;