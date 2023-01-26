
import React, {useState} from 'react';

function EightBall(props) {
   const [currAnswer, setAnswer] = useState({msg:'Think of a Question',color:"black"})
    
   const pickAnswer = () => {
        const randNum = Math.floor(Math.random() * props.answers.length)
        return props.answers[randNum]
    }
    return (
    <div className= "eightball"  id =  {currAnswer.color} onClick= {() => setAnswer(pickAnswer())}>
        <p >{currAnswer.msg}</p>
    </div>)
}

export default EightBall