import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question7: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Menos de 50.000€'
    },
    {
      value: 'Entre 50.000€ y 250.000€'
    },
    {
      value: 'Entre 250.000€ y 500.000€'
    },
    {
      value: 'Más de 500.000€'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
          ¿Cuáles son tus ingresos anuales?
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

export default Question7
