import React from 'react'
import { Link } from "react-router-dom";
// import Dashboard from '../pages/Dashboard/dashboard';
import './sidebar.css'


function Sidebar () {
  return (
    <div>
            <div className='sidebar-menu'>
                <div className='elements'>
                <button> Create a RFQ</button>
               <ul>
                <li>
                    <Link to="/dashboard">
                        <span className="las la-home"></span>
                        <span>Dashboard</span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/rfq">
                    <span className ="las la-file-alt"></span>
                        <span>RFQ</span>
                    </Link>
                </li>
                
                 <li>
                    <Link to = '/purchase_orders'>
                    <span className ="las la-shopping-cart"></span>
                        <span>Purchase orders</span>
                    </Link>
                </li>
                <li>
                    <Link to ='/suppliers'>
                    <span className ="las la-truck"></span>
                        <span>Suppliers</span>
                    </Link>
                </li>
                <li>
                    <Link to = '/users'>
                    <span className ="las la-user-circle"></span>
                        <span>Users</span>
                    </Link>
                </li>
               
                <li>
                    <Link to = '/documents'>
                    <span className ="las la-suitcase"></span>
                        <span>Documents</span>
                    </Link>
                </li>
                <li>
                    <Link to = '/reports'                                                                                                                                   >
                    <span className ="las la-signal"></span>
                        <span>Reports</span>
                    </Link>
                </li> 
               </ul> 
            </div>
            </div>
      
    </div>
  );
}

export default Sidebar;

