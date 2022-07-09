import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question2: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const answers = [
    {
      value: 'Baja',
      subLabel: 'Nunca he tenido acciones, fondos, planes de pensiones ni depósitos'
    },
    {
      value: 'Media',
      subLabel: 'He tenido depósitos o planes de pensiones, pero ni entiendo ni sigo los mercados'
    },
    {
      value: 'Alta',
      subLabel: 'He tenido acciones o fondos de inversión y entiendo el funcionamiento de los mercados'
    },
    {
      value: 'Muy alta',
      subLabel: 'Soy un inversor profesional'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
          Tu experiencia previa con los mercados es:
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

export default Question2
