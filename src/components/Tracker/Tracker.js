import React from 'react'
import Stepper from 'react-stepper-horizontal'
import './Tracker.css'

const activeColor = {
    activeColor: 'green'
}
function Tracker() {
    return (
        <div className='stepper-container'>
            <div className='stepper-tab'>
                <Stepper  steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'},
                {title: 'Step Four'}] } activeStep={ 2 } />
            </div>
        </div>
    )
}

export default Tracker
