let quantity = 1
let totalPrice = 0
const totalQuanitity = document.querySelector('.total-price')
totalQuanitity.textContent = `Total: $0`

let quantity2 = 1
let totalPrice2 = 0


function updateQuantity(displayQuantity){
    const totalQuanitity = document.querySelector('.total-quantity')
    totalQuanitity.textContent = `Quantity: ${displayQuantity}`
}

function updateQuantity2(displayQuantity){
    const totalQuanitity2 = document.querySelector('.total-quantity2')
    totalQuanitity2.textContent = `Quantity: ${displayQuantity}`
}

function updateTotalPrice(quantity){
    
    totalQuanitity.textContent = `Total: $ ${quantity * 15 + quantity2 * 150} .00`
}


const reduceQuantity = document.querySelector('#quantity-down')
reduceQuantity.addEventListener('click', function(){
    if (quantity > 0){
        quantity--
    }
    updateQuantity(quantity)
    updateTotalPrice(quantity)
})


const addQuantity = document.querySelector('#quantity-up')
addQuantity.addEventListener('click', function(){
    if (quantity < 99){
        quantity++
    }
    updateQuantity(quantity)
    updateTotalPrice(quantity)
})

const removeQuantity = document.querySelector('.remove')
removeQuantity.addEventListener('click', function(){
    quantity = 0
    updateQuantity(quantity)
    updateTotalPrice(quantity)
})

function updateTotalPrice(quantity){
    
    totalQuanitity.textContent = `Total: $ ${quantity * 15} .00`
}

//==============================================================

const reduceQuantity2 = document.querySelector('#quantity-down2')
reduceQuantity2.addEventListener('click', function(){
    if (quantity2 > 0){
        quantity2--
    }
    updateQuantity2(quantity2)
    updateTotalPrice(quantity2)
})


const addQuantity2 = document.querySelector('#quantity-up2')
addQuantity2.addEventListener('click', function(){
    if (quantity2 < 99){
        quantity2++
    }
    updateQuantity2(quantity2)
    updateTotalPrice(quantity2)
})
