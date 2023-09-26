import React from 'react'

function Dashboard({data}) {
  return (
   <>

  <div className='container-fluid '>

   {/* navebar starts here */}
    <nav className='row1  d-flex '>
   
     <div className='search ' style={{
       

     }}>
        <div className='m-2'>
       <img src="/src/assets/search icon.svg" alt="search" />
       <input type="text" placeholder='search'  style={{outline:'none', border:'0', color:'gray',}}/>
       </div>
     </div>
     <div className=' align-items-end' style={{marginLeft:'690px', marginTop:'60px'}}> 
        <img src="/src/assets/notification icon.svg" alt="" />
     </div>
    
     </nav>
{/* navebar ends here */}
     
     <div className='row2 pl-5 mt-0'>
        <h1 className='col-5 ' style={{marginTop:'-30px'}} id='sales'>Sales Information</h1>
    <div className='salse d-flex gap-4 pl-3' >
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
     
     <table class="table" >
  <thead >
    <tr >
      <th scope='col'>
         <img src="/src/assets/minus-square.svg" alt="" />
      </th>
      <th className='det  '>Invoice ID</th>
      <th  className='det '>Date</th>
      <th  className='det ' >Customer</th>
      <th  className='det '>Payable Amount</th>
      <th  className='det ' >Payable Amount</th>
    </tr>
  </thead>
  <tbody>
{
   data.map((e,i)=>{
      return <tr key={i}>
         <td>
            <img src="/src/assets/minus-square.svg" alt="" />
         </td>
         <td> {e.InvoiceID}</td>
         <td> {e.Date}</td>
         <td> {e.Customer}</td>
         <td> {e.PayableAmount}</td>
         <td> {e.PaidAmount}</td>
       
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