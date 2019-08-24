import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import waves from '../img/waves.svg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Oh Yeahhhh" />
    <Navbar />
    <div>{children}</div>
    <span className="waves">
      <img src={waves} alt="Waves" />
    </span>
  </div>
)

export default TemplateWrapper
