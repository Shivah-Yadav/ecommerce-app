import React from 'react'
import {myDatabase} from '../firebase.jsx'

function AddProducts() {
    const [productData,setProductData] = React.useState({
        SIno: "",
        productname: "",
        ImageUrl: "",
        productDescription: "",
        originalPrice: "",
        discountedPrice:  ""
    })
    function collectIt(e){
        const myData = e.target.value

        setProductData({...productData, [e.target.name]:myData})
        // console.log(productData)
    }
    function saveData(){
        myDatabase.collection("products").add({
            sIno:productData.SIno,
            imageUrl:productData.ImageUrl,
            description:productData.productDescription,
            name:productData.productname,
            originalPrice:productData.originalPrice,
            discountedPrice:productData.discountedPrice
        })
        window.location.pathname = '/home'
    }
  return (
    <div className='row' style={{marginLeft:20}}>
        <div className="col-md-3">
            <h3>Add Product to Database</h3>
            <label for='SIno' className="form-label">SI no:</label>
            <input type='number' name='SIno' placeholder="Enter SI No" className="form-control" onChange={collectIt}/><br/><br/>
            <label for='productname' className="form-label">Product Name:</label>
            <input type='text' name='productName' placeholder="Enter Product Name" className="form-control" onChange={collectIt}/><br/><br/>
            <label for='productDescription' className="form-label">Product Description:</label>
            <textarea rows="3" cols="30" name="productDescription" placeholder="Enter Product Description" className="form-control" onChange={collectIt}></textarea><br/><br/>
            <label for='ImageUrl' className="form-label">Product Image:</label>
            <input type='text' name='ImageUrl' placeholder="Enter Image Url" className="form-control" onChange={collectIt}/><br/><br/>
            <label for='originalPrice' className="form-label">Product Price:</label>
            <input type='number' name='originalPrice' placeholder="Enter Original Price" className="form-control" onChange={collectIt}/><br/><br/>
            <label for='discountedPrice' className="form-label">Discount Price:</label>
            <input type='number' name='discountedPrice' placeholder="Enter Discounted Price" className="form-control" onChange={collectIt}/><br/><br/>
            <button type="button" class="btn btn-outline-success" onClick={saveData}>Add Product</button>
        </div>
    </div>
  )
}

export default AddProducts
