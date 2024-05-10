import React from 'react'
import {myDatabase} from '../firebase'
import jquery from 'jquery'


function Card() {
    const [productsData,setProductsData] = React.useState([])

    React.useEffect(function(){
        myDatabase.collection('products').onSnapshot(function(snapshot){
            setProductsData(snapshot.docs.map(function(i){
                return i.data()
            }))
        })
    })
    function collectData(event){
        if(localStorage.getItem('cart') == null){
            var cart = {}
        }
        else{
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        const  myId = event.target.id
        
        if(cart[myId] == undefined){
            var quantity = 1
            var name = document.getElementById('myname' + myId).innerText
            var price = Number(document.getElementById('price'+ myId).innerText)
            cart[myId] = [quantity,name,price]
        }else{
            quantity = cart[myId][0] + 1
            cart[myId][0] = quantity
            price = Number(document.getElementById('price'+ myId).innerText) * quantity
            cart[myId][2] = price
        }
        localStorage.setItem("cart",JSON.stringify(cart))

        displayCart(cart)

        function displayCart(mycart){
            var cartData = ""
            for(let i in mycart){
                cartData = cartData + "QTY:" + mycart[i][0] +" / " + "NAME:" + mycart[i][1] + " / " +  "PRICE:" + mycart[i][2] + "<br/>"
                console.log(cartData)
            }
            cartData = cartData + "<a href='productData.html' class='btn btn-success'> Continue </a>"
            document.getElementById("mypopover").setAttribute("data-content", cartData)
        }
    }

  return (
    <div className="container" style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
        productsData.map(function(i){
            return <div key={i.sIno} className="card" style={{width: "18rem", margin:30, padding:16}}>
                        <span>{i.sIno}</span>
                        <img src={i.imageUrl} className="card-img-top" alt="..." id={'myimage' + i.imageUrl}/>
                        <div className="card-body">
                            <h5 className="card-title" id={"myname" + i.sIno}>{i.name}</h5>
                            <p className="card-text" id={"mydescription"+i.sIno}>{i.description}</p>
                            Original Price : <del><strong style={{display:'inline'}} id={"Oprice" + i.sIno}>{i.originalPrice}
                            </strong></del>
                            <span style={{color:'red'}}>     -{Math.floor(i.discountedPrice/i.originalPrice * 100)}% off</span>
                            <strong>Discounted Price : <p className="card-text" id={"price"+i.sIno}>{i.discountedPrice}</p></strong>
                            <a href="#" className="btn btn-primary" onClick={collectData} id={i.sIno}>Add to Cart</a>
                        </div> 
                    </div>
                })
            }
    </div>
  )
}

export default Card