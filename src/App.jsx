import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import { useState } from 'react'


function App() {
  let[data,]=useState([
    {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
  {
    InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
  },
{
  InvoiceID :'#AHGA68',
    Date : '23/09/2022',
    Customer : 'Jacob Marcus',
    PayableAmount : '$100',
    PaidAmount : '$000',
    Due : '$000'
}
  


  ])
  return (
    <>
    <div id="wrapper" style={{width:'100%'}} >
      <Sidebar/> 
      <>
      <Dashboard data={data}/>
      
      </>
     
      
      </div>
      
    </>
  )
}

export default App