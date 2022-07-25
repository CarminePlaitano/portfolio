import React from 'react'
import CV from '../../assets/cv-CarminePlaitano.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contatti" className="btn btn-primary">Parliamo</a>
    </div>
  )
}

export default CTA