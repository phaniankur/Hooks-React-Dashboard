import React from 'react'
import Stepper from 'react-stepper-horizontal'
import './Tracker.css'

function Tracker() {
    return (
        <div className='stepper-container'>
            <div className='stepper-tab'>
                <Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'},
                {title: 'Step Four'}] } activeStep={ 4 } />
            </div>
        </div>
    )
}

export default Tracker
