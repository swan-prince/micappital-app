import React, { useState } from 'react';

import Navbar from 'components/Navbar'
import Step1 from 'components/Steps/Step1'
import Step2 from 'components/Steps/Step2'

import Question1 from 'components/Steps/Question1'
import Question2 from 'components/Steps/Question2'
import Question3 from 'components/Steps/Question3'
import Question4 from 'components/Steps/Question4'
import Question5 from 'components/Steps/Question5'
import Question6 from 'components/Steps/Question6'
import Question7 from 'components/Steps/Question7'
import Question8 from 'components/Steps/Question8'
import Question9 from 'components/Steps/Question9'
import Question10 from 'components/Steps/Question10'
import Question11 from 'components/Steps/Question11'
import Question12 from 'components/Steps/Question12'
import Question13 from 'components/Steps/Question13'
import Question14 from 'components/Steps/Question14'
import Question15 from 'components/Steps/Question15'
import Step3 from 'components/Steps/Step3'
import Step4 from 'components/Steps/Step4'

import { Answer } from 'typings'

function App() {

  const [step, setStep] = useState('step_1')
  const [answers, setAnswers] = useState<Array<Answer>>([])
  const [leftCounts, setLeftCounts] = useState<number | null>(null)
  const [process, setProcess] = useState(0)  

  const handleSetAnswer = (answer: Answer) => {
    let updatedAnswers = answers

    if (updatedAnswers.find((item) => item.id === answer.id)) {
      updatedAnswers.map((item) => {
        if (item.id === answer.id) {
          item.value = answer.value
        }
      })
    } else {
      updatedAnswers.push(answer)
    }

    setAnswers(updatedAnswers)
  }

  return (
    <div className="wrapper">
      <Navbar leftCounts={leftCounts} />
      {
        leftCounts !== null && (
          <div className="progress app-progress">
            <div className="progress-bar" style={{ width: `${process}%` }}></div>
          </div>
        )
      }
      <div className="contents">
        {
          step === 'step_1' && <Step1 goNextStep={() => setStep('step_2')} />
        }
        {
          step === 'step_2' && <Step2 goNextStep={() => setStep('q_1')} />
        }
        {
          step === 'q_1' && (
            <Question1
              handleSelect={(answer) => {
                handleSetAnswer(
                  {
                    id: 1,
                    question: 'Te consideras un inversor',
                    value: answer
                  }
                )
                setStep('q_2')
              }}
            />
          )
        }
        {
          step === 'q_2' && (
            <Question2
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 2,
                    question: 'Tu experiencia previa con los mercados es',
                    value: answer
                  }
                )
                setStep('q_3')
              }}
              handlePrev={() => {
                setStep('q_1')
              }}
            />
          )
        }
        {
          step === 'q_3' && (
            <Question3
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 3,
                    question: 'Te gustaría invertir a:',
                    value: answer
                  }
                )
                setStep('q_4')
              }}
              handlePrev={() => {
                setStep('q_2')
              }}
            />
          )
        }
        {
          step === 'q_4' && (
            <Question4
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 4,
                    question: '¿Cuál es el objetivo de tu inversión?',
                    value: answer
                  }
                )
                setStep('q_5')
              }}
              handlePrev={() => {
                setStep('q_3')
              }}
            />
          )
        }
        {
          step === 'q_5' && (
            <Question5
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 5,
                    question: '¿Cómo consideras de estables tus ingresos?',
                    value: answer
                  }
                )
                setStep('q_6')
              }}
              handlePrev={() => {
                setStep('q_4')
              }}
            />
          )
        }
        {
          step === 'q_6' && (
            <Question6
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 6,
                    question: '¿Qué porcentaje de tus ingresos van a gastos?',
                    value: answer
                  }
                )
                setStep('q_7')
              }}
              handlePrev={() => {
                setStep('q_5')
              }}
            />
          )
        }
        {
          step === 'q_7' && (
            <Question7
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 7,
                    question: '¿Cuáles son tus ingresos anuales?',
                    value: answer
                  }
                )
                setStep('q_8')
              }}
              handlePrev={() => {
                setStep('q_6')
              }}
            />
          )
        }
        {
          step === 'q_8' && (
            <Question8
              handleSelect={(answer) => {
                handleSetAnswer(
                  {
                    id: 8,
                    question: '¿Cúal es el importe total de tus activos totales?',
                    value: answer
                  }
                )
                setStep('q_9')
                setLeftCounts(7)
                setProcess(52.9412)
              }}
              handlePrev={() => {
                setStep('q_7')
              }}
            />
          )
        }
        {
          step === 'q_9' && (
            <Question9
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 9,
                    question: '¿Cuánto quieres invertir?',
                    value: answer
                  }
                )
                setStep('q_10')
                setLeftCounts(6)
              }}
              handlePrev={() => {
                setStep('q_8')
                setLeftCounts(0)
                setProcess(0)
              }}
            />
          )
        }
        {
          step === 'q_10' && (
            <Question10
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 10,
                    question: '¿Cuánto quieres invertir?',
                    value: answer
                  }
                )
                setStep('q_11')
                setLeftCounts(5)
                setProcess(58.8235)
              }}
              handlePrev={() => {
                setStep('q_9')
                setLeftCounts(7)
                setProcess(52.9412)
              }}
            />
          )
        }
        {
          step === 'q_11' && (
            <Question11
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 11,
                    question: '¿Cuánto quieres invertir?',
                    value: answer
                  }
                )
                setStep('q_12')
                setLeftCounts(4)
                setProcess(70.5882)
              }}
              handlePrev={() => {
                setStep('q_10')
                setLeftCounts(6)
                setProcess(52.9412)
              }}
            />
          )
        }
        {
          step === 'q_12' && (
            <Question12
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 12,
                    question: 'Datos de usuario',
                    value: answer
                  }
                )
                setStep('q_13')
                setLeftCounts(3)
                setProcess(76.4706)
              }}
              handlePrev={() => {
                setStep('q_11')
                setLeftCounts(5)
                setProcess(70.5882)
              }}
            />
          )
        }
        {
          step === 'q_13' && (
            <Question13
              handleSelect={(answer) => {

                handleSetAnswer(
                  {
                    id: 13,
                    question: 'Datos de usuario',
                    value: answer
                  }
                )
                setStep('q_14')
                setLeftCounts(2)
                setProcess(82.3529)
              }}
              handlePrev={() => {
                setStep('q_12')
                setLeftCounts(4)
                setProcess(76.4706)
              }}
            />
          )
        }
        {
          step === 'q_14' && (
            <Question14
              handleSelect={(answer: string) => {
                handleSetAnswer(
                  {
                    id: 14,
                    question: 'Elige el plan que se adapte a ti.',
                    value: answer
                  }
                )
                setStep('q_15')
                setLeftCounts(1)
                setProcess(88.2353)
              }}
              handlePrev={() => {
                setStep('q_13')
                setLeftCounts(3)
                setProcess(82.3529)
              }}
            />
          )
        }
        {
          step === 'q_15' && (
            <Question15
              handleSelect={(answer: string) => {
                handleSetAnswer(
                  {
                    id: 15,
                    question: 'Elige tu contraseña de acceso',
                    value: answer
                  }
                )
                setStep('step_3')
                setLeftCounts(0)
                setProcess(94.1176)
              }}
              handlePrev={() => {
                setStep('q_14')
                setLeftCounts(2)
                setProcess(82.3529)
              }}
            />
          )
        }
        {
          step === 'step_3' && (
            <Step3
              goNextStep={() => {
                setStep('step_4')
              }}
            />
          )
        }
        {
          step === 'step_4' && (
            <Step4
              goNextStep={() => {
                console.log(answers)
                window.open('https://sis.redsys.es/sis/realizarPago')
              }}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
