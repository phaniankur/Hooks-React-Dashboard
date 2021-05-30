import React from 'react'
import './Ordercard.css'
import Tracker from '../../components/Tracker/Tracker'

const Ordercard = () => {
    return (
        <>
        <div className='card-group'>
            <div className='card-container'>
                <h1 className='card-header'>Submitted Files</h1>
                
            </div>
            <div className='card-container-2'>
                <h1 className='card-header'><span>Track Order</span></h1>
                
                
            </div>
            <div className='card-container-3'>
                <h1 className='card-header'><span>Active Subscriptions</span></h1>
            </div>

        </div>
            
        </>
        
    )
}

export default Ordercard
