import React, { FC } from 'react'

import Logo from 'assets/img/logo-micappital.png'

interface Props {
  leftCounts: number | null
}

const Navbar: FC<Props> = (props) => {

  const { leftCounts } = props

  return (
    <nav className="header-nav navbar navbar-light bg-white d-flex align-items-center">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" height={32} />
      </a>
      {
        leftCounts !== null && (
          <span>
            Ya solo quedan &nbsp;
            <span style={{ fontSize: '2em' }}>{leftCounts}</span> &nbsp;
            pasos
          </span>
        )
      }
    </nav>
  )
}

export default Navbar
