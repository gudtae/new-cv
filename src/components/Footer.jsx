import React from 'react'
import Google from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/Google_Scholar_logo.svg'
import Linked from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/linkedin-svgrepo-com.svg'

function Footer() {
  return (
    <footer>
        <p>Bogdan <span className='ocher bold'>KOZYRSKIY</span></p>
        <div>
            <a href="https://scholar.google.com/citations?user=jk3GAs4AAAAJ&hl=en"><img src={Google} alt="scl" /></a> 
            <a href="https://www.linkedin.com/in/bogdan-kozyrskiy-075293136/"> <img src={Linked} alt='linked' className='linked'/></a>
        </div>
        <p>2023</p>
    </footer>
  )
}

export default Footer