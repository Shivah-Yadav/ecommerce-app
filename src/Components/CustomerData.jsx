import React from 'react'
import { myDatabase } from '../firebase.jsx'

function CustomerData() {
    React.useEffect(function(){
        const name = localStorage.getItem('NAME')
        const email = localStorage.getItem('EMAIL')
        const mobile = Number(localStorage.getItem('MOBILE'))
        const street = localStorage.getItem('STREET')
        const code = Number(localStorage.getItem('CODE'))
        const city = localStorage.getItem('CITY')
        const country = localStorage.getItem('COUNTRY')
        const total = Number(localStorage.getItem('total'))
        console.log(total)
        myDatabase.collection("customers").add({
            name: name,
            email:email,
            mobile:mobile,
            street:street,
            code:code,
            city:city,
            country:country,
            total:total
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default CustomerData

