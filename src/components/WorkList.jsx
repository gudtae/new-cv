import React from 'react'

export const WorkList = (props) => {
    let addStyle = '';
    if (props.item.style){
        addStyle = 'bb'
    }
    return (
        <div className='table__list'>
            <div className='years'>
                <p className='bold'>{props.item.year}</p>
            </div>
            <div className='workPlace'>
                <p><span className='bold'>{props.item.companyName}</span> | {props.item.jobTitle}</p>
                <p>{props.item.contry}</p>
                
               
            </div>
            <ul className='listOfGoods'>
                    {props.list.map((i, index) => <li key={index} className='list__style'>{i}</li>)}
            </ul>
             <div className={addStyle}></div>
        </div>
    )
}
