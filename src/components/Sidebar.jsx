import React from 'react'

function sidebar() {
  return (
   <>
   <ul className="navbar-nav bg-gradient sidebar sidebar-dark accordion  " id="accordionSidebar">
     
            <div className="sidebar-brand d-flex align-items-center justify-content-center mt-5" >
               
                <div className="sidebar-brand-text text-primary mx-3"style={{fontFamily: 'Poppins,sansSerif', fontSize:'22px'}}>Medico Sales</div>
            </div>

            
           <li className="nav-item active ">
                <a className="nav-link" href="index.html">
                   <img  src="../assets/dashboard icon.svg" alt="dashboard icon" /> &nbsp;  &nbsp;
                       <span className='text-primary'>Dashboard</span></a>
            </li>

        

            
            

           <div>
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src='/src/assets/lab test icon.svg' ></img>   
                    
                   <span className='topic'>  Lab Test</span>
                    </div>
                </a>
               
            </li>

        
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center' style={{paddingLeft:"25px"}}>
                 <img className='icon'  src='/src/assets/appoinment icon.svg' ></img>   
                    
                   <span className='topic'>Appointment</span>
                    </div>
                </a>
               
            </li>

            
           

           
    
            
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center' style={{paddingLeft:"35px"}}>
                 <img className='icon'  src='/src/assets/medicien icon.svg' ></img>   
                    
                   <span className='topic'>  Medicine Order</span>
                    </div>
                </a>
               
            </li>

        
            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src='/src/assets/messege icon.svg' ></img>   
                    
                   <span className='topic'>Message</span>
                    </div>
                </a>
               
            </li>


            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src='/src/assets/payment icon.svg' ></img>   
                    
                   <span className='topic'>  Payment</span>
                    </div>
                </a>
               
            </li>

            <li className="nav-item" >
                <a className="nav-link  text-dark" href="#" >
                    <div className='d-flex gap-3 justify-content-center'>
                 <img className='icon'  src='/src/assets/setting  icon.svg' ></img>   
                    
                   <span className='topic'>  Settings</span>
                    </div>
                </a>
               
            </li>

            </div>

            <div className='d-flex justify-content-center gap-3 ' style={{paddingTop:'600px'}}>
                <img src="/src/assets/help icon.svg" alt="" />
            <span className='text-dark'> Help</span>
            </div>
            </ul>

        
        
   </>
  )
}

export default sidebar