import React from 'react'
import { Link } from "react-router-dom";
import Dashboard from '../pages/Dashboard/dashboard';
import './sidebar.css'
import

function Sidebar () {
  return (
    <div>
          
            
            <div className='sidebar-menu'>
                <div className='elements'>
                <button> Create a RFQ</button>
               <ul>
                <li>
                    <Link to="/">
                        <span className="las la-home"></span>
                        <span>Dashboard</span>
                        
                    </Link>
                </li>
                <li>
                    <span className ="las la-file-alt"></span>
                        <span>RFQ</span>
                </li>
                <li>
                    <span className ="las la-shopping-cart"></span>
                        <span>Purchase orders</span>
                </li>
                <li>
                    <span className ="las la-truck"></span>
                        <span>Suppliers</span>
                </li>
                <li>
                    <span className ="las la-user-circle"></span>
                        <span>Users</span>
                </li>
               
                <li>
                    <span className ="las la-suitcase"></span>
                        <span>Documents</span>
                </li>
                <li>
                    <span className ="las la-signal"></span>
                        <span>Reports</span>
                </li>
               </ul> 
            </div>
            </div>
      
    </div>
  );
}

export default Sidebar;