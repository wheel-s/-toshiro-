import React from 'react'
import { useState, useRef } from 'react'
import Layout from '../../components/layout'
import quiz from './quiz.module.css'
import{data } from './quizData'

const Quiz = () => {
  let [index, setindex] = useState(0)
  let [question, setquestion] = useState(data[index])
  let [lock, setlock] = useState(false)
  let [score, setscore] = useState(0)
  let [result, setresult] = useState(false)

  let Option1=useRef(null)
  let Option2=useRef(null)
  let Option3=useRef(null)
  let Option4=useRef(null)
  let Option_array=[Option1,Option2, Option3, Option4]


    const checkAns = (e, ans)=>{
     if(lock===false){
      if(question.ans === ans) {
        e.target.classList.add('correct')
        setlock(true)
        setscore(prev=>prev+1)
      }
      else{
        e.target.classList.add('wrong')
        setlock(true)
        Option_array[question.ans-1].current.classList.add('correct')
      }
     }
 
            
    }

    const next =()=>{
      if(lock===true){
        if(index===data.length -1){
          setresult(true)
          return 0
        }
      }
      if(lock===true){
        setindex(++index)
        setquestion(data[index])
        setlock(false)
        Option_array.map((option)=>{
          option.current.classList.remove('wrong')
          option.current.classList.remove('correct')
          return null;
        })
     
      }
      
   }
   const reset = ()=>{
    setindex(0)
    setquestion(data[0])
    setscore(0)
    setlock(false)
    setresult(false)
   }
  return (
    <div className='wrapper'>
      <Layout/>
      <div className={quiz.container}>
          <div id='box'className={quiz.box}>
          <h1>Quiz</h1>
          <hr/>
          {result?<></>:<>
            <h2>{index+1}. {question.question}  </h2>
            <ul>
              <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
              <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
              <li ref={Option3}onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
              <li ref={Option4}onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
            </ul>
            <button onClick={next}>Next</button>
            <p className={quiz.index}> {index+1} of {data.length} questions</p>
            </>
          }
          {result?<>
            <h2>You Scored {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button>
          </>
            :<></>}
          </div>
      </div>
    </div>
  )
}

export default Quiz