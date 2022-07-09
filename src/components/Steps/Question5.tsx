import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question5: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Espero que incrementen'     
    },
    {
      value: 'Estables'   
    },
    {
      value: 'Inestables'   
    },
    {
      value: 'Muy inestables'
    }   
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
        ¿Cómo consideras de estables tus ingresos?
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

export default Question5
