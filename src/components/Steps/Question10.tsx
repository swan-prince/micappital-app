import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question10: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Más del 70%'
    },
    {
      value: 'Entre el 50% y el 70%'
    },
    {
      value: 'Entre el 30% y el 50%'
    },
    {
      value: 'Entre el 10% y el 30%'
    },
    {
      value: 'Menos del 10%'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
        ¿Cuánto supone esta inversión sobre tu patrimonio?
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

export default Question10
