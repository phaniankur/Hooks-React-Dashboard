import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './OrderTab.css'

function OrderTab() {
    
    return (
        <nav className='tab-bar'>
            <ul className='tab-list'>
                <li className='tab-group'>
                    <Link to='/orders/track'>Active Orders</Link></li>
                <li className='tab-group'>
                <Link to='#'>Active Subscriptions</Link></li>
                <li className='tab-group'>
                <Link to='#'>Order History</Link></li>
            </ul>
            
        </nav>
    )
}

export default OrderTab
