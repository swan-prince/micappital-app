import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question4: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Ahorrar'     
    },
    {
      value: 'Rentas a partir de una fecha'   
    },
    {
      value: 'Educación de mis hijos'   
    },
    {
      value: 'Jubilación'
    },
    {
      value: 'Vivienda'
    },
    {
      value: 'Otros'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
        ¿Cuál es el objetivo de tu inversión?
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

export default Question4
