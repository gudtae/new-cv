import React, { useState } from 'react'
import Theory from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/theory.svg'
import Tools from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/tools.svg'
import Soft from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/soft.svg'
import Language from 'C:/Users/allea/OneDrive/Desktop/cv/cv-bk/src/img/language.svg'

function Skills({ title }) {
    const [skill, setSkill] = useState([
        {
            id: 1, title: 'Theory', img: Theory, alt: 'iconTheory', list: [
                'Machine learning', 'Deep learning', 'Bayesian inference', 'Linear algebra', 'Probability theory', 'Computer Vision'
            ], listIdeas: []
        },
        {
            id: 2, title: 'Tools', img: Tools, alt: 'iconTools', list: [
                'Python, PyTorch, Keras, TensorFlow, NumPy, SciPy, Scilit-learn, Matplotlib', 'LaTeX, GIT, OOP, Linux', 'Matlab'
            ], idea: 'Have an idea with:', listIdeas: ['C/C++, R, JAX']
        },
        {
            id: 3, title: 'Soft Skills', img: Soft, alt: 'iconSoftSkills', list: [
                'Problem Solver', 'Excited to learn new things', 'Team worker', 'Communicative', 'Self-sufficient'
            ], listIdeas: []
        },
        {
            id: 4, title: 'Language', img: Language, alt: 'iconLanguage', list: [
                'English (fluent)', 'French (B2)', 'Russian (native)'
            ], listIdeas: []
        }
    ])
    return (
        <section>
            <h2>{title}</h2>
            <div className='gridSkill'>
                {skill.map((item) =>
                    <div key={item.id} className='gridItemSkill'>
                        <img src={item.img} alt={item.alt} className='skillImg childe' />

                        <ul>
                            <p className='bold upperCase'>{item.title}</p>
                            {item.list.map((e, index) =>
                                <li key={index} className='list__style'>{e}</li>
                            )}
                        </ul>
                        <ul className='gridColumn'>
                            <p className='bold'>{item.idea}</p>
                            {item.listIdeas.map((e, index) =>
                                <li key={index} className='list__style'>{e}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            {/* <img src={Theory} alt="" />
                <img src={Tools} alt="" />
                <img src={Soft} alt="" />
                <img src={Language} alt="" /> */}
        </section>
    )
}

export default Skills