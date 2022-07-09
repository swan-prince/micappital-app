import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question8: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Menos de 50.000€'
    },
    {
      value: 'Entre 50.000€ y 300.000€'
    },
    {
      value: 'Entre 300.000€ y 1 millón'
    },
    {
      value: 'Más de 1 millón'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
        ¿Cúal es el importe total de tus activos totales?
        </h1>
      </div>
      <div className="list-btn">
        {
          answers.map((answer) => (
            <button
              key={answer.value}
              className='btn btn-secondary'
              onClick={() => handleSelect(answer.value)}
            >
              <div>
                {answer.value}
              </div>
            </button>
          ))
        }
      </div>

      <button className='btnAtras btn' onClick={handlePrev}>
        <div>
          <i className='fa fa-arrow-left'></i>
        </div>
      </button>
    </div>
  )
}

export default Question8
