import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Oh Yeahhhh" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
