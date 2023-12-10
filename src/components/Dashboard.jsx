import React from 'react'
import search from './images/search icon.svg'
import notify from './images/notification icon.svg'
import squre from './images/minus-square.svg'

function Dashboard({data}) {
  return (
   <>

  <div className='container-fluid '>

   {/* navebar starts here */}
    <nav className=' d-flex ' style={{width:"1100px"}}>
   
     <div className='search ' style={{
       

     }}>
        <div className='m-2'>
       <img src={search}alt="search" />
       <input type="text" placeholder='search'  style={{outline:'none', border:'0', color:'gray',}}/>
       </div>
     </div>
     <div className=' align-items-end' style={{marginLeft:'500px', marginTop:'60px'}}> 
        <img src={notify} alt="" />
     </div>
    
     </nav>
{/* navebar ends here */}
     
     <div className='cus ' style={{width:"500px"}}>
        <h1 className=' text-dark col-xl' style={{marginTop:'-30px'}} id='sales'>Sales Information</h1>
    <div className='salse d-flex gap-4 ' >
       <div>
       <label className='inf ' form='Customer' id='Customer'>Customer</label>
       <br />
       <input type='text' className='inside' placeholder='Enter Costumer Name'/>
       </div>

       <div>
       <label className='inf ' form='Customer' id='Customer'>Invoice ID</label>
       <br />
       <input type='text' className='inside' placeholder='Enter Invoice ID'/>
       </div>

       <div>
       <label className='inf ' form='Customer' id='Customer'>Start Date</label>
       <br />
       <input type='text' className='inside' placeholder='Start Date'/>
       </div>

       <div>
       <label className=' inf ' form='Customer' id='Customer'>End Date</label>
       <br />
       <input type='text' className='inside' placeholder='End Date'/>
       </div>
       
    </div>

     </div>
     
     <table class="table"  style={{height:"650px",marginTop:"30px",width:"1100px"}}>
  <thead >
    <tr >
      <th >
         <img src={squre} alt="" />
      </th>
      <th>Invoice ID</th>
      <th>Date</th>
      <th >Customer</th>
      <th >Payable Amount</th>
      <th >Payable Amount</th>
      <th>Due</th>

    </tr>
  </thead>
  <tbody>
{
   data.map((e,i)=>{
      return <tr key={i}>
         <td>
            <img src={ squre }alt="" />
         </td>
         <td className='text-primary fw-6'> {e.InvoiceID}</td>
         <td > {e.Date}</td>
         <td> {e.Customer}</td>
         <td> {e.PayableAmount}</td>
         <td> {e.PaidAmount}</td>
         <td> {e.Due}</td>
       
      </tr>
   })
}
   
  </tbody>
</table>

     
     </div>
     

     
    

   
      

     
   </>
  )
}

export default Dashboard