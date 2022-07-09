import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question6: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Menos del 25%'
    },
    {
      value: 'Entre el 25% y el 50%'
    },
    {
      value: 'Entre el 50% y el 75%'
    },
    {
      value: 'Más del 75%'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
          ¿Qué porcentaje de tus ingresos van a gastos?
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

export default Question6
