import React, { FC, useState } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question9: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const [prince, setPrice] = useState('')

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
          ¿Cuánto quieres invertir?
        </h1>
        <p>
          Sin compromiso, es para realizar una estimación.
        </p>
      </div>
      <div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' pattern='d*' placeholder='' onChange={(e) => setPrice(e.target.value)} />
            <label className='form-field__label'>€</label>
          </div>
        </div>
      </div>
      <button
        className='btn btn--sticky btnInputContinuar'
        disabled={prince === ''}
        onClick={() => handleSelect(prince)}
      >
        <div>
          Continuar &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button
        onClick={() => handleSelect(prince)}
        className='btn btn--sticky btn--sticky-mirror btnInputContinuar'
        disabled={prince === ''}
      >
        <div>
          Continuar &nbsp;
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button className='btnAtras btn' onClick={handlePrev}>
        <div>
          <i className='fa fa-arrow-left'></i>
        </div>
      </button>
    </div>
  )
}

export default Question9
