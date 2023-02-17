import React from 'react'
import Google from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/Google_Scholar_logo.svg'
import Linked from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/linkedin-svgrepo-com.svg'
import Location from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/location-sign-svgrepo-com.svg'


function Contact({ title }) {
  return (
    <div className='contact'>
      <div className='contact_name'>
        <div className='fz50'>Bogdan</div>
        <div className='ocher fz50'>KOZYRSKIY</div>
        <div className='light'>machine learning researcher</div>
        <div className='light'>PhD candidate</div>
      </div>

      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div className='contact_contact'>
        <div>
          <a href="https://scholar.google.com/citations?user=jk3GAs4AAAAJ&hl=en"><img src={Google} alt="scl" /></a>
          <a href="https://www.linkedin.com/in/bogdan-kozyrskiy-075293136/" className='white'> <img src={Linked} alt='linked' /></a>
        </div>
        <div>
          <img src={Location} alt='Biot France' className='location'/>
          <span>Biot, Alpes-Maritimes, France</span>
        </div>
      </div>
    </div>
  )
}

export default Contact