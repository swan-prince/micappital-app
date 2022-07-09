import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question3: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Corto plazo',
      subLabel: 'Voy a necesitar el dinero en menos de dos años'
    },
    {
      value: 'Medio plazo',
      subLabel: 'Voy a necesitarlo dentro de 2-5 años'
    },
    {
      value: 'Largo plazo',
      subLabel: 'Voy a necesitarlo dentro de más de 5 años'
    }    
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
        Te gustaría invertir a:
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
                <span className='sub_label'>
                  {answer.subLabel}
                </span>
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

export default Question3
