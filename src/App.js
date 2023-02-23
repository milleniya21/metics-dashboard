import React from 'react';
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
 import Header from './header/header';
import Sidebar from './pages/Sidebar/sidebar';
import Dashboard from './pages/Dashboard/dashboard'; 
import Rfq from './pages/RFQ/rfq';
import Purchase from './pages/Purchase orders/purchase';
import Suppliers from './pages/Suppliers/suppliers';
import User from './pages/Users/users';
import Documents from './pages/Documents/documents';
import Reports from './pages/Reports/reports';
function App() {
  return (
    <>
    <Header/>
    <div className="App">
            
      <Router>
      <Sidebar/>
        <Routes>
       
          <Route path='/dashboard'element={<Dashboard/>}></Route>
          <Route path='/rfq'element={<Rfq/>}></Route>
          <Route path='/purchase_orders'element={<Purchase/>}></Route>
           <Route path='/suppliers'element={<Suppliers/>}></Route>
          <Route path='/users'element={<User/>}></Route>
          <Route path='/documents'element={<Documents/>}></Route>
          <Route path='/reports'element={<Reports/>}></Route> 
        </Routes>
      </Router>
    </div>
    </>
  );

        }
export default App;