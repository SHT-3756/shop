import React from 'react'


function HistoryPage(props) {

   
    return (
       <div style={{width: '80%', margin: '3rem auto' }}>
           <div style={{ textAlign: 'center' }}>
               <h1>history</h1>
           </div>
           <br />

           <table>
               <thead>
                    <tr>
                        <td>Payment Id</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Date of Purchase</td>
                    </tr>
               </thead>
               <tbody>
                  {props.user.userData &&props.user.userData.history.map(item => (
                      <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.dateOfPurchase}</td>
                      </tr>
                  ))}
               </tbody>
           </table>
       </div>
    )
}

export default HistoryPage
