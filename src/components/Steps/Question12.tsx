import React, { FC, useState } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question12: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const [phoone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [dni, setDni] = useState('') 

  const handleContinue = () => {
    const data = {
      phoone: phoone,
      age: age,
      dni: dni
    }
    handleSelect(JSON.stringify(data))
  }

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
          Datos de usuario
        </h1>
      </div>
      <div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setPhone(e.target.value)} />
            <label className='form-field__label'>Teléfono</label>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setAge(e.target.value)} />
            <label className='form-field__label'>Edad</label>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setDni(e.target.value)} />
            <label className='form-field__label'>DNI</label>
          </div>
        </div>
      </div>
      <button
        className='btn btn--sticky btnInputContinuar'
        disabled={phoone === '' || age === '' || dni === ''}
        onClick={handleContinue}
      >
        <div>
          Continuar
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button
        onClick={handleContinue}
        className='btn btn--sticky btn--sticky-mirror btnInputContinuar'
        disabled={phoone === '' || age === '' || dni === ''}
      >
        <div>
          Continuar
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

export default Question12
