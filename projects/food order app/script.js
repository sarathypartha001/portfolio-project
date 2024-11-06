// Sidebar open/close functions
let btncarticon = document.getElementById("cart-icon");
let cart = document.querySelector(".cart");
let btncartclose = document.getElementById("cart-close");

btncarticon.addEventListener("click", function() {
    cart.style.right = "0";
});
btncartclose.addEventListener("click", function() {
    cart.style.right = "-100%";
});

// Load initial cart content
function loadfood() {
    loadcontent();
}

// Validate and change quantity
function changeQty(event) {
    if (isNaN(event.target.value) || event.target.value < 1) {
        event.target.value = 1;  // Set minimum quantity to 1
    }
    updateTotal();
}

// Load content function to add delete functionality to cart items
function loadcontent() {
    let cartremove = document.querySelectorAll(".cart-remove");
    cartremove.forEach(function(removecart) {
        removecart.addEventListener("click", function(event) {
            let titlecart = this.parentElement.querySelector(".cart-food-title").innerHTML;
            itemList = itemList.filter(function(el) { return el.title != titlecart });
            event.target.parentElement.remove();
            loadcontent();
            updateCartCount(); // Update cart count when an item is removed
        });
    });

    // Add event listener to each quantity input for real-time updates
    let cartQuantities = document.querySelectorAll(".cart-quantity");
    cartQuantities.forEach(function(quantityInput) {
        quantityInput.addEventListener("input", changeQty);  // Listen for input changes
    });

    updateTotal();
}

// Add items to the cart
let btnaddcart = document.querySelectorAll("#add-cart");
let itemList = [];

btnaddcart.forEach(function(addbtn) {
    addbtn.addEventListener("click", function(event) {
        // Get the parent element of the button, and retrieve food details
        let food = this.parentElement;
        let title = food.querySelector(".food-title").innerHTML;
        let foodprice = food.querySelector(".food-price").innerHTML;
        let imgsrc = food.querySelector(".food-img").src;

        let newproduct = { title, foodprice, imgsrc };
        
        // Check if product already exists in cart
        if (itemList.find(function(el) { return el.title == newproduct.title })) {
            alert("This Product Already In Cart");
            return;
        } else {
            itemList.push(newproduct);
        }

        // Create new cart item
        let newcartproduct = CreateCartproduct(title, foodprice, imgsrc);

        // Append new cart item to cart content
        let createelement = document.createElement("div");
        createelement.innerHTML = newcartproduct;
        let cartcontent = document.querySelector(".cart-content");
        cartcontent.append(createelement);

        // Reload content to ensure delete function and quantity change is attached to new items
        loadcontent();
        updateCartCount(); // Update cart count when a new item is added
    });
});

// Function to create new cart item markup
function CreateCartproduct(title, foodprice, imgsrc) {
    return `
    <div class="cart-box">
        <img src="${imgsrc}" class="cart-img">
        <div class="detail-box">
            <div class="cart-food-title">${title}</div>
            <div class="price-box">
                <div class="cart-price">${foodprice}</div>
                <div class="cart-amt">${foodprice}</div>
            </div>
            <input type="number" value="1" min="1" class="cart-quantity">
        </div>
        <ion-icon name="trash" class="cart-remove"></ion-icon>            
    </div>`;
}

// Calculate and update the total cart amount
function updateTotal() {
    let cartTotalPrice = document.querySelector(".total-amount");
    let cartbox = document.querySelectorAll(".cart-box");
    let total = 0;

    cartbox.forEach(function(productAmount) {
        let cartboxPrice = productAmount.querySelector(".cart-price");
        let cartpricefloat = parseFloat(cartboxPrice.innerHTML.replace("Rs.", ""));
        let CartBoxQty = productAmount.querySelector(".cart-quantity").value;
        total += cartpricefloat * CartBoxQty;
        productAmount.querySelector(".cart-amt").innerText = "Rs." + (cartpricefloat * CartBoxQty).toFixed(2);
    });

    cartTotalPrice.innerHTML = "Rs. " + total.toFixed(2);
    
}

// Update cart item count
function updateCartCount() {
    let cartcount = document.querySelector(".cart-count");
    let count = itemList.length;
    cartcount.innerHTML = count;
}

// Search bar toggle
let searchbutton = document.querySelector(".search-logo");
let searchbar = document.querySelector(".search-bar");

searchbutton.addEventListener("click", function() {
    if (searchbar.style.display === "none" || searchbar.style.display === "") {
        searchbar.style.display = "inline-block";
    } else {
        searchbar.style.display = "none";
    }
});

// Search filter functionality
let search = document.getElementById("search");
let productlist = document.querySelectorAll(".shop-content .food-box");

search.addEventListener("keyup", function(event) {
    let enteredValue = event.target.value.toUpperCase();

    productlist.forEach(function(product) {
        let productname = product.querySelector(".food-title").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});
