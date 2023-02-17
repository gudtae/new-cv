import React from 'react'

const EducationList = (props) => {
  return (
    <div className='table__list'>
      <div className='years'>
        <p className='bold'>{props.item.year}</p>
      </div>
      <div className='univercity'>
        <p className='bold'>{props.item.university}</p>
        <p>{props.item.profession}</p>
      </div>
    </div>
  )
}

export default EducationList