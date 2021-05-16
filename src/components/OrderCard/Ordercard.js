import React from 'react'
import './Ordercard.css'
import Tracker from '../../pages/Tracker/Tracker'

const Ordercard = () => {
    return (
        <>
        <div className='card-group'>
            <div className='card-container'>
                <h1 className='card-header'>Your Files</h1>
                
            </div>
            <div className='card-container-2'>
                <h1 className='card-header'>Track Order</h1>
                <Tracker/>
                <button>More Details</button>
            </div>
            <div className='card-container-3'>
                <h1 className='card-header'>Active Subs</h1>
            </div>

        </div>
            
        </>
        
    )
}

export default Ordercard
