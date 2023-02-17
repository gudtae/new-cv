import React, { useState } from 'react'
import { WorkList } from './WorkList'

function Experience({title}) {
  const [work, setWork] = useState([
    {
      id: 1, year: '2020 - Present', companyName: 'EURECOM', jobTitle: 'Researche assistant / PhD student', contry: 'Sophia-Antipolis, France', list: ['Developed a novel algorithm for input data binarization for a specialized ML hardware', 'Developed a novel algorithm for sparse Gaussian Process regression', 'Developed a novel approach for Bayesian Classification', 'Developed a novel approach for prior selection for Bayesian Neural Networks', 'Supervised students practical sessions for various ML courses', 'Published 4 papers'
      ], style: true
    },
    { id: 2, year: '2019 - 2020', companyName: 'VIBRAINT INC.', jobTitle: 'Part time ML consultant', contry: 'Richmond Hill, Canada', list: ['Supervised the ML team on a commercial Brain-ComputerInterface project', 'Instructed the developers in various aspects of Machine Learning', 'Organized code reviews', 'Performed results interpretation and analysis'], style: true },
    { id: 3, year: '2016 - 2020', companyName: 'NATIONAL RESEARCH CENTER "KURCHATOV INSTITUTE"', jobTitle: 'Researcher', contry: '', list: ['Developed CNN and RNN classifiers for Brain-Computerinterface (BCI) for different types of brain signals', 'Applied various signal denoising and artifactremoval techniques', 'Developed a system for online BCI classification', 'Coordinated a team of juniorresearchers and interns', 'Deployed an ML infrastructure for a small team', 'Published 14 papers'], style: true },
    { id: 4, year: '2014 - 2016', companyName: 'MEPHI: ENGINEERING CENTER', jobTitle: 'Developer', contry: '', list: ['Developed computer vision systems forface detection, gender classification, and eye tracking', 'Developed a client-server software for mobile GSM base stations', 'Developed a vector graphics software'], style: true },
    { id: 5, year: '2012 - 2014', companyName: 'MEPHI: DEPARTMENT OF COMPUTER AND TECHNOLOGIES', jobTitle: 'Developer', contry: '', list: ['Developed vulnerability scanning software for Linux-based operation systems', 'Developed a Linux kernel module for operating systems with enhanced security'], style: false },
  ])

  
  return (
    <section>
        <h2>{title}</h2>
        {work.map((item) => 
        <WorkList key={item.id} item={item} list={item.list}/>
        )}
    </section>
  )
}

export default Experience