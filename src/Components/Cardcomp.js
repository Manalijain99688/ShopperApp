import React, { useState } from 'react';
import "./Card.css";
import jquery from "jquery"
export default function Cardcomp(props) {
  
  function cartcollect() {
    
      if (localStorage.getItem("cart") == null) {
        var cart = {};
      } else {
        var cart = JSON.parse(localStorage.getItem("cart"));
      }
      let myId = props.id;
  
      if (cart[myId] == undefined) {
        var name = document.getElementById("myname" + myId).innerText;
        var priceText = document.getElementById("myprice" + myId).innerText;
// Remove non-numeric characters (e.g., currency symbols)
var numericPrice = parseFloat(priceText.replace(/[^0-9.]/g, ""));
// Convert to a floating-point number
        var quantity = 1;
        var updatedPrice = numericPrice * quantity; // Use the price from state
        cart[myId] = [quantity, name, updatedPrice];
      } else {
        quantity = cart[myId][0] + 1;
        var priceText = document.getElementById("myprice" + myId).innerText;
// Remove non-numeric characters (e.g., currency symbols)
var numericPrice = parseFloat(priceText.replace(/[^0-9.]/g, ""));
// Convert to a floating-point number
        console.log("price:", numericPrice);
        cart[myId][0] = quantity;
        var updatedPrice = numericPrice * quantity; // Use the price from state
        cart[myId][2] = updatedPrice; // Update the price in the cart
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      
      displayCart(cart)
  }

  
  function displayCart(mycart){
    var cartData=""
    for(let i in mycart ){
      cartData=cartData+ "<h6>Name</h6> "+mycart[i][1]+"<br/>"+ "Qty: " +mycart[i][0]+"<br/>"+"price: "+mycart[i][2]+"<br/>"+"<br/>"
    }
    cartData=cartData+'<a class="btn btn-success data" href="data.html">Continue</a>'
    document.getElementById("mypopover").setAttribute("data-content",cartData)
    
  }

  return (
    <div>
      <div className="card" style={{ width: 350 }}>
        <img src={props.image} className="card-img-top img" alt="..." />
        <div className="card-body">
          <h5 className="card-title" id={"myname" + props.id}>{props.title}</h5>
          <h5 className="card-text">
            {props.category}
          </h5>
          <h5 className="card-text" id={"myprice" + props.id}>
            Price : {props.price}
          </h5>
          <a href="#" className="btn btn-primary" onClick={cartcollect}>
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}
