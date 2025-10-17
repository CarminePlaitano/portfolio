import cpCv from 'assets/cv-CarminePlaitano.pdf'

const CTA = () => {
   return (
      <div className="cta">
         <a href={cpCv} download className="btn">Download CV</a>
         <a href="#contatti" className="btn btn-primary">Parliamo</a>
      </div>
   )
}

export default CTA