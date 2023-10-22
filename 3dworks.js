// Begin by creating an empty shopping cart linked
const cart = [];

// Create a function that takes two parameters: Product name and price
// Function one adds to cart
function addToCart(cardId, price) {
  // Nested function to find a card in the cart
  function findCard(item) {
    return item.cardId === cardId; // checks if the card id matches
  }

  // If card Id matches we store card in a temp variable
  const card = cart.find(findCard);

  // Boolean logic for cart increment if the product is in the cart or adding a new item
  // Check the existing cart first for increment
  if (card) {
    card.quantity++;
  } else {
    cart.push({ cardId, price, quantity: 1 }); // Add a new product to the cart
  }

  // Call a function to update the cart (you need to define/update this function)
  updateCart();
}

//Next create a function to remove product based on card id
function removeFromCart(cardId) {
    const index = cart.findIndex(item => item.cardId ===cardId); 

    //Set conditional to check if index is not equal to -1
    if (index !== -1) {
        if(cart[index].quantity > 1) {
            cart[index].quantity --;
        } else {
            cart.splice(index, 1); //use splice method to remove an item from cart
        }
        updateCart(); //call function to updateCart
    }
}

function updateCart() {
    const cartItems = document.getElementById("basketQuantity"); //Select basketQuantity from HTML
    basketQuantity.innerHTML = "";

    //Initialises variable total to zero which will be used to keept track of total cost
    let total = 0; 

    //loop through each cart item
    cart.forEach(item => {
      //create html list and assign to cartItem
      const cartItem = document.createElement("li"); 
      const removeButton = document.createElement("button"); //create remove button
      removeButton.textContent = "Remove"; //Set text content to remove      
      removeButton.onclick = () =>removeFromCart(item.cardId); //onlick event handler 

      cartItem.textContent = `${item.cardId} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

      cartItem.appendChild(removeButton); 
      cartItems.appendChild(cartItem);
      total += item.price * item.quantity;

    });   
      
  const cartTotal = document.getElementById("cartTotal");
  cartTotal.textContent = total.toFixed(2); //To 2 decimal places
}

//DID NOT IMPLEMENT THE BASKET TOTALS AND CHECKOUT AS IT KEPT INTERFERING WITH FUNCTIONALITY

//Email validation on Webforms
function validateEmail(inputElement) {
  //Create a variable that checks email format
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  //Set boolean logic to match format; if no match alert user
  if (inputElement.value.match(mailformat)) {
      return true;
  } else {
      alert("You have entered an invalid email address!"); //create an alert if email entered on submit is not ACSII compliant
      inputElement.focus(); //input text is input element
      return false;
  }
}
