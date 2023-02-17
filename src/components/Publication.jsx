import React, { useState } from 'react'
import { NamesList } from './NamesList';

function Publication({ title }) {
    const [publication, setPublication] = useState([
        { id: 20221, title: 'Locally smoothed gaussian process regression.', names: 'Davit Gogolashvili, Bogdan Kozyrskiy, and Maurizio Filippone.', place: 'Procedia Computer Science,', ect: '207:2717-2726, 2022.' },
        { id: 20223, title: 'Learning binary data representation for Optical Processing Units. ', names: 'Bogdan Kozyrskiy, Maurizio Filippone, Iacopo Poli, Ruben Ohana, Laurent Daudet, and Igor Carron.', place: 'Sensors & Transducers,', ect: '256(2):1-11, 2022.' },
        { id: 20224, title: 'Variational bootstrap for classification.', names: 'Bogdan Kozyrskiy, Dimitrios Milios, and Maurizio Filippone.', place: 'Procedia Computer Science, ', ect: '207:1222-1231, 2022.' },
        { id: 20217, title: 'Binarization for Optical Processing Units via REINFORCE.', names: 'Bogdan Kozyrskiy, Iacopo Poli, Ruben Ohana, Laurent Daudet, Igor Carron, and Maurizio Filippone.', place: 'In Proceedings of the 3rd International Conference on Advances in Signal Processing and Artificial Intelligence (ASPAI`2021), Porto, Portugal,', ect: 'pages 23-27, 2021.' },
        { id: 202110, title: 'MEG-based detection of voluntary eye fixations used to control a computer.', names: 'Anastasia Ovchinnikova, Anatoly Vasilyev, Ivan Zubarev, Bogdan Kozyrskiy, and Sergei Shishkin.', place: 'Frontiersin neuroscience,', ect: '15:619591, 2021.' },
        { id: 202111, title: 'Single-trialmeg classification forthe detection of the intentional eye dwells.', names: 'Anastasia Ovchinnikova, Anatoly Vasilyev, Ivan Zubarev, Bogdan Kozyrskiy, and Sergei Shishkin.', place: null, ect: '2021.' },
        { id: 202118, title: 'A passive BCI for monitoring the intentionality of the gaze-based moving object selection.', names: 'Darisy G Zhao, Anatoly Vasilyev, Bogdan Kozyrskiy, Eugeny Melnichuk, Andrey Isachenko, Boris Velichkovsky, and Sergei Shishkin.', place: 'Journal of Neural Engineering,', ect: '18(2):026001, 2021.' },
        { id: 20192, title: 'Considering the classifier variance in bayesian hyperparameter optimization. ', names: 'Bogdan Kozyrskiy.', place: 'In THE 5TH INTERNATIONAL CONFERENCE BCI: SCIENCE AND PRACTICE. SAMARA 2019,', ect: 'pages 22-23, 2019.' },
        { id: 201916, title: 'An expectation-based EEG markerforthe selection of moving objects with gaze.', names: 'Darisy Zhao, Anatoly Vasilyev, Bogdan Kozyrskiy, Andrey Isachenko, Eugeny Melnichuk, Boris Velichkovsky, and Sergei Shishkin.', place: 'In GBCIC,', ect: '2019.' },
        { id: 201917, title: 'EEG-based classification of the intentional and spontaneous selection of moving objects with gaze.', names: 'Darisy Zhao, Anatoly Vasilyev, Bogdan Kozyrskiy, Eugeny Melnichuk, and Sergei Shishkin.', place: 'In THE 5TH INTERNATIONAL CONFERENCE BCI: SCIENCE AND PRACTICE. SAMARA 2019, ', ect: 'pages 46-47, 2019.' },
        { id: 20185, title: 'Classification of the gaze fixations in the eye-brain-computerinterface paradigm with a compact Convolutional Neural Network.', names: 'Bogdan Kozyrskiy, Anastasia Ovchinnikova, Alena Moskalenko, Boris Velichkovsky, and Sergei Shishkin.', place: 'Procedia computer science,', ect: '145:293-299, 2018.' },
        { id: 20186, title: 'Estimating similarity between individual EEG datasets using a convolutional neural network.', names: 'Bogdan Kozyrskiy, Anastasia Ovchinnikova, and Sergei Shishkin.', place: 'In 2018 IEEE International Conference on Systems, Man, and Cybernetics(SMC),', ect: 'pages 96-101. IEEE, 2018.' },
        { id: 201814, title: 'A greedy feature selection algorithm for Brain-Computer Interface classification committees.', names: 'Alexander Trofimov, Sergei Shishkin, Bogdan Kozyrskiy, and Boris Velichkovsky', place: 'Procedia computer science,', ect: '123:488-493, 2018.' },
        { id: 201815, title: 'EEG potentials related to moving object selection with gaze: A possible basis for more flexible eye-brain-computer Interfaces.', names: 'Darisy Zhao, Andrey Isachenko, Eugeny Melnichuk, Bogdan Kozyrskiy, and Sergei Shishkin.', place: 'Opera Medica et Physiologica,', ect: '4(Suppl. 1):109-110, 2018' },
        { id: 20178, title: 'Passive detection of feedback expectation: towards fluent hybrid eye-brain-computer interfaces.', names: 'Yuri Nuzhdin, Sergei Shishkin, Anastasia Fedorova, Bogdan Kozyrskiy, Alexei Medyntsev, Evgeny Svirin, OlesyaKorsun, Ignat Dubynin, Alexander Trofimov, and Boris Velichkovsky.', place: 'In GBCIC,', ect: '2017.' },
        { id: 20179, title: 'The expectation based eye-brain-computer interface: an attempt of online test.', names: 'Yuri Nuzhdin, Sergei Shishkin, Anastasia Fedorova, Alexander Trofimov, Evgeny Svirin, Bogdan Kozyrskiy, Alexei Medyntsev, Ignat Dubynin, and Boris Velichkovsky.', place: 'In Proceedings of the 2017 ACM Workshop on An Application-oriented Approach to BCI out of the laboratory,', ect: 'pages 39-42, 2017.' },
        { id: 201612, title: 'EEG negativity in fixations used for gaze-based control: Toward converting intentions into actions with an Eye-Brain-Computer Interface.', names: 'Sergei Shishkin, Yuri Nuzhdin, Evgeny Svirin, Alexander Trofimov, Anastasia Fedorova, Bogdan Kozyrskiy, and Boris Velichkovsky.', place: 'Frontiersin neuroscience,', ect: '10:528, 2016.' },
        { id: 201613, title: 'Improving Eye-Brain-Computer Interface performance by using electroencephalogram frequency components.', names: 'Sergey Shishkin, Bogdan Kozyrskiy, Alexander Trofimov, Yuri Nuzhdin, Anastasia Fedorova, Evgeny Svirin, and Boris Velichkovsky.', place: 'Bulletin of Russian State Medical University,', ect: '(2):36-41, 2016.' }
      ])
    return (
        <section>
            <h2>{title}</h2>
            <ul>
            {publication.map((item) =>
                <li key={item.id} className='mb50 list__style'>
                    <span className='bold'>{item.title}</span>
                    <NamesList names={item.names}/>
                    <p><span className='italic'>{item.place}</span> {item.ect}</p>
                    
                </li>
            )}
            </ul>
        </section>
    )
}

export default Publication