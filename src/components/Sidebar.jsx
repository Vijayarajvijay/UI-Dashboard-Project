import React from 'react'
import dashboard from "./images/dashboard icon.svg"
import labtest from "./images/lab test icon.svg"
import appoint from './images/appoinment icon.svg'
import medicine from './images/medicien icon.svg'
import messege from './images/messege icon.svg'
import payment from './images/payment icon.svg'
import settings from './images/setting  icon.svg'
import help from './images/help icon.svg'

function sidebar() {
  return (
   <>
   <ul className="navbar-nav bg-gradient sidebar sidebar-dark accordion  " id="accordionSidebar">
     
            <div className="sidebar-brand d-flex align-items-center justify-content-center mt-5" >
               
                <div className="sidebar-brand-text text-primary mx-3"style={{fontFamily: 'Poppins,sansSerif', fontSize:'22px'}}>Medico Sales</div>
            </div>

            
           <li className="nav-item active  ">
                <a className="nav-link" href="index.html">
                   <img  src={dashboard} alt="dashboard icon" /> &nbsp;  &nbsp;
                       <span className='text-primary'>Dashboard</span></a>
            </li>

        

            
            

           <div>
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src={labtest} />  
                    
                   <span className='topic'>  Lab Test</span>
                    </div>
                </a>
               
            </li>

        
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center' style={{paddingLeft:"25px"}}>
                 <img className='icon'  src={appoint} ></img>   
                    
                   <span className='topic'>Appointment</span>
                    </div>
                </a>
               
            </li>

            
           

           
    
            
            <li className="nav-item " >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center' style={{paddingLeft:"35px"}}>
                 <img className='icon'  src={medicine} ></img>   
                    
                   <span className='topi'>  Medicine Order</span>
                    </div>
                </a>
               
            </li>

        
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src={messege}></img>   
                    
                   <span className='topic'>Message</span>
                    </div>
                </a>
               
            </li>


            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src={payment}></img>   
                    
                   <span className='topic'>  Payment</span>
                    </div>
                </a>
               
            </li>

            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src={settings}></img>   
                    
                   <span className='topic'>  Settings</span>
                    </div>
                </a>
               
            </li>

            </div>

            <div className='d-flex justify-content-center gap-3 ' style={{paddingTop:'600px'}}>
                <img src={help} alt="" />
            <span className='text-dark'> Help</span>
            </div>
            </ul>

        
        
   </>
  )
}

export default sidebar