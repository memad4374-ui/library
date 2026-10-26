    //Select All Add to cart buttons
const buttons=
document.querySelectorAll(".add-cart");
    //Add Click event for each button
buttons.forEach(function(button) {
    button.addEventListener("click",
        function(){
    // get Book INFO
         const name=
         button.dataset.name;
         const price=
         button.dataset.price;
         const image=
         button.dataset.image;
         let stock =
         Number(button.dataset.stock);
         if (stock <= 0) {
            alert("Out of stock");
                return;
         }
    // Read Cart Data from Local Storage
         let cart=
         JSON.parse(localStorage.getItem("cart")) || [];
    // Add the selected Book in the cart
         cart.push({
            name:name ,
            price: Number(price) ,
            image:image
               });
    //Save the Updated cart in localstorage
               localStorage.setItem("cart",
                JSON.stringify(cart));
                alert("Book added");
    //Display cart in Console
               console.log(cart);
               stock--;
               button.dataset.stock = stock;
               button.parentElement.querySelector(".stock span").textContent =stock;
               alert(stock);
            } );
        
    });
    //Load Cart Data
let cart=JSON.parse(localStorage.getItem ("cart")) || [];
    //select cart container and total elements
let container = document.getElementById("cart-container");
let total =document.getElementById("total");
let sum = 0;
   //Display cart item
cart.forEach((book,index) =>{
    container.innerHTML += `
    <div class="cart-card">
    <img src="${book.image}">
    <h2>${book.name}</h2>
    <p>${book.price}</p>
    <button class="remove-btn" data-index="${index}">Remove</button>
    </div>
    `
    //Calculate total price
    sum += book.price ;
});
    //Display total price
total.innerHTML="Total : " + sum + "EGP"
    //select all remove buttons
let removeButtons = document.querySelectorAll(".remove-btn");
    //Add click event for each remove button
removeButtons.forEach(function(button) {

    button.addEventListener("click", function() {
    //Get index of the selected item
        let index = button.dataset.index;
    //remove item from the cart
        cart.splice(index, 1);
    //update cart data in localstorage
        localStorage.setItem("cart", JSON.stringify(cart));
    //Reload the page to show changes
        location.reload();

    });

});
const checkoutbtn=
document.getElementById("checkout");
 checkoutbtn.addEventListener("click" 
     ,function() {
      const  cash =
      document.getElementById ("cash")
      const visa =
      document.getElementById("visa")
      if (cash.checked){
        window.location.href="success.html";
      }
      else if (visa.checked) {
        window.location.href="payment.html";
      }
      else {
        alert("please select a payment method");
      }
 });
