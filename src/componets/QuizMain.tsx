import React, { FC, useEffect, useState } from 'react'
import { quiz } from './../data/data';

const QuizMain: FC = () => {
   const [counter, setCounter] = useState<number>(0)
   const [current, setCurrent] = useState<number>(0)
   const [show, setShow] = useState<boolean>(false)
   const [message, setMesages] = useState<string>("")
   useEffect(() => {
      if (counter < 3) {
         setMesages("Ты меня очень плохо знаешь")
      }
      else if (counter > 3 && counter < 6) {
         setMesages("Ты меня не плохо знаешь")
      }
      else if (counter > 6 && counter < 8) {
         setMesages("Ты меня хорошо знаешь")
      }
      else {
         setMesages("Ты меня очень хорошо знаешь")
      }
   }, [counter])
   const handleClick = (isTrue: boolean, index: number) => {

      if (isTrue) {
         setCounter(counter + 1)
      }
      if (current >= quiz.length - 1) {
         setShow(true)
      }
      setCurrent(prev => prev + 1)

   }




   return (
      <div className='quiz_main'>
         <h1 className='text_osnova'>My quiz</h1>
         {show ? <div className='true'>
            <h1>Ты правильно ответил на {counter} вопросов
               <p style={{ color: "red" }}>{message}</p>
            </h1>
         </div> :
            <div className="content">
               <div className="question">
                  <h3 className='text_osnova_question'>Questions {current + 1}/{quiz.length}</h3>
                  <p className='text_osnova_question'>{quiz[current].question}</p>
               </div>
               <div className="answers">
                  {quiz[current].answers.map((item, index) => <button key={item.value}
                     onClick={() => handleClick(item.correct, index)}

                  >
                     {item.value}</button>)}
               </div>
            </div>
         }


      </div>

   )
}

export default QuizMain