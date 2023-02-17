import React, { useState } from 'react'
import EducationList from './EducationList'

function Education({ title }) {
  const [education, setEducation] = useState([
    { id: 1, year: '2020-2023', university: 'SORBONNE UNIVERSITY', profession: 'PhD in Machine Learning' },
    { id: 2, year: '2009-2014', university: 'MOSCOW ENGINEERING PHYSICS INSTITUTE', profession: 'Master in Computer Science' }
  ])


  return (
    <section>
      <h2>{title}</h2>
      {education.map((item) =>
        <EducationList key={item.id} item={item} />
      )}
    </section>
  )
}

export default Education