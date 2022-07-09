import React, { FC, useState } from 'react'

interface Props {
  handleSelect: (answer: string) => void;
  handlePrev: () => void;
}


const Question13: FC<Props> = (props) => {

  const { handleSelect, handlePrev } = props

  const [id, setId] = useState(0)

  const images = [
    {
      id: 40,
      image: 'https://micappital.com/assets/img/logosSVG/40.svg'
    },
    {
      id: 41,
      image: 'https://micappital.com/assets/img/logosSVG/41.svg'
    },
    {
      id: 42,
      image: 'https://micappital.com/assets/img/logosSVG/42.svg'
    },
    {
      id: 43,
      image: 'https://micappital.com/assets/img/logosSVG/43.svg'
    },
    {
      id: 44,
      image: 'https://micappital.com/assets/img/logosSVG/44.svg'
    },
    {
      id: 45,
      image: 'https://micappital.com/assets/img/logosSVG/45.svg'
    },
    {
      id: 46,
      image: 'https://micappital.com/assets/img/logosSVG/46.svg'
    },
    {
      id: 47,
      image: 'https://micappital.com/assets/img/logosSVG/47.svg'
    },
    {
      id: 48,
      image: 'https://micappital.com/assets/img/logosSVG/48.svg'
    },
    {
      id: 49,
      image: 'https://micappital.com/assets/img/logosSVG/49.svg'
    },
    {
      id: 50,
      image: 'https://micappital.com/assets/img/logosSVG/50.svg'
    },
    {
      id: 51,
      image: 'https://micappital.com/assets/img/logosSVG/51.svg'
    },
    {
      id: 52,
      image: 'https://micappital.com/assets/img/logosSVG/52.svg'
    },
    {
      id: 53,
      image: 'https://micappital.com/assets/img/logosSVG/53.svg'
    },
    {
      id: 54,
      image: 'https://micappital.com/assets/img/logosSVG/54.svg'
    },
    {
      id: 55,
      image: 'https://micappital.com/assets/img/logosSVG/55.svg'
    },
    {
      id: 56,
      image: 'https://micappital.com/assets/img/logosSVG/56.svg'
    },
    {
      id: 57,
      image: 'https://micappital.com/assets/img/logosSVG/57.svg'
    },
    {
      id: 58,
      image: 'https://micappital.com/assets/img/logosSVG/58.svg'
    },
    {
      id: 59,
      image: 'https://micappital.com/assets/img/logosSVG/59.svg'
    },
    {
      id: 60,
      image: 'https://micappital.com/assets/img/logosSVG/60.svg'
    },
    {
      id: 61,
      image: 'https://micappital.com/assets/img/logosSVG/61.svg'
    },
    {
      id: 62,
      image: 'https://micappital.com/assets/img/logosSVG/62.svg'
    },
    {
      id: 63,
      image: 'https://micappital.com/assets/img/logosSVG/63.svg'
    },
    {
      id: 64,
      image: 'https://micappital.com/assets/img/logosSVG/64.svg'
    },
  ]

  const handleGo = () => {
    handleSelect(`${id}`)
  }

  return (
    <div className='wide-container'>
      <div className="image-choice-header">
        <div>
          <div className="step-header">
            <h1>
              Selecciona tus bancos
            </h1>
            <p>
              Selecciona todos tus bancos y te diremos en cual es mejor hacer tu inversión
            </p>
          </div>
        </div>
        <button className='btn btn--sticky btnBancosContinuar' onClick={handleGo} disabled={id === 0}>
          <div>
            Continuar
            <i className='fa fa-arrow-right'></i>
          </div>
        </button>
        <button className='btn btn--sticky btn--sticky-mirror btnBancosContinuar' onClick={handleGo} disabled={id === 0}>
          <div>
            Continuar &nbsp;
            <i className='fa fa-arrow-right'></i>
          </div>
        </button>
      </div>
      <div className="list-btn">
        {
          images.map((image) => (
            <div className="col-md-2 col-sm-4 col-xs-6 float-left" style={{ padding: '10px' }} key={image.id}>
              <span 
                className={id === image.id ? 'img-checkbox selected' : 'img-checkbox'} 
                role='checkbox' 
                style={{ backgroundImage: `url("${image.image}")` }}
                onClick={() => setId(image.id)}
              >
              </span>
            </div>
          ))
        }
      </div>
      <button className='btnAtras btn mb-5' onClick={handlePrev}>
        <div>
          <i className='fa fa-arrow-left'></i>
        </div>
      </button>
    </div>
  )
}

export default Question13

