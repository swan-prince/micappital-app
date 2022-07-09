import React, { FC, useState } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}

const Question11: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(false)
  const [privacy, setPrivacy] = useState(false)

  const handleContinue = () => {
    const data = {
      name: name,
      surname: surname, 
      email: email
    }
    handleSelect(JSON.stringify(data))
  }

  return (
    <div className='m-container'>
      <div className="step-header">
        <h1>
          Datos básicos personales
        </h1>
      </div>
      <div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setName(e.target.value)} />
            <label className='form-field__label'>Nombre</label>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setSurname(e.target.value)} />
            <label className='form-field__label'>Apellidos</label>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field__control">
            <input type="text" className='form-field__input' placeholder='' onChange={(e) => setEmail(e.target.value)} />
            <label className='form-field__label'>Correo electrónico</label>
          </div>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" checked={terms} onChange={(e) => setTerms(e.target.checked)} type="checkbox" value="" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            Acepto las &nbsp;
            <a href="https://micappital.com/avisoLegal" className='text-dark' target='_blank'>condiciones de uso</a>
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" checked={privacy} id="privacy" onChange={(e) => setPrivacy(e.target.checked)} />
          <label className="form-check-label" htmlFor="privacy">
            Acepto las &nbsp;
            <a href="https://micappital.com/politicaPrivacidad" className='text-dark' target='_blank'>política de privacidad</a>
          </label>
        </div>
      </div>
      <button
        className='btn btn--sticky btnInputContinuar'
        disabled={name === '' || surname === '' || email === '' || !privacy || !terms}
        onClick={handleContinue}
      >
        <div>
          ¡Continuar!
          <i className='fa fa-arrow-right'></i>
        </div>
      </button>
      <button
        onClick={handleContinue}
        className='btn btn--sticky btn--sticky-mirror btnInputContinuar'
        disabled={name === '' || surname === '' || email === '' || !privacy || !terms}
      >
        <div>
          ¡Continuar!
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

export default Question11
