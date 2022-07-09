import React, { FC } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
}

const Question1: FC<Props> = (props) => {

  const { handleSelect } = props

  const answers = [
    {
      value: 'Aburrido',
      subLabel: 'No busco rentabilidad ni riesgo'
    },
    {
      value: 'Tranquilo',
      subLabel: 'Me gustaria superar a los depósitos'
    },
    {
      value: 'Mixto',
      subLabel: 'Ni agresivo ni conservador'
    },
    {
      value: 'Atrevido',
      subLabel: 'Busco rentabilidades altas y asumo ciertos riesgos'
    },
    {
      value: 'Valiente',
      subLabel: 'Más agresivo para obtener la máxima rentabilidad'
    }
  ]

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>Te consideras un inversor:</h1>
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
    </div>
  )
}

export default Question1
