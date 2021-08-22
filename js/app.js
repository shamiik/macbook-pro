const memory8 = document.getElementById('8GB-btn');
const memory16 = document.getElementById('16GB-btn');
const memoryCost = document.getElementById('memory-price');

const ssd256 = document.getElementById('256GB-ssd');
const ssd512 = document.getElementById('512GB-ssd');
const ssd1 = document.getElementById('1TB-ssd');
const storageCost = document.getElementById('storage-price')

const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const deliveryCost = document.getElementById('delivery-cost')

const bestPrice = document.getElementById('best-price');

const totalPrice = document.getElementById('total-price');

const promoCodeBtn = document.getElementById('promoCode-btn')
const promoInput = document.getElementById('promo-input');

const grandTotal = document.getElementById('grand-total');

//update Total
function totalPriceAmount() {
    const extraMemoryCost = parseInt(memoryCost.innerText)
    const extraStorageCost = parseInt(storageCost.innerText)
    const extraDeliveryCost = parseInt(deliveryCost.innerText)
    const bestPriceAmount = parseInt(bestPrice.innerText)
    const totalCost = extraMemoryCost + extraStorageCost + extraDeliveryCost + bestPriceAmount;
    totalPrice.innerText = totalCost;
    grandTotal.innerText = totalPrice.innerText;
}

//Update Price -Promo
promoCodeBtn.addEventListener('click', function () {
    const promoCodeText = promoInput.value;
    const promoAmount = parseFloat(totalPrice.innerText * 0.2);
    if (promoCodeText == 'stevekaku') {
        grandTotal.innerText = parseFloat(totalPrice.innerText - promoAmount);
    }
    else {
        grandTotal.innerText = parseFloat(totalPrice.innerText - 0);
    }
    //Clear Input Field
    promoInput.value = '';
});



//Memory Event Handling
memory8.addEventListener('click', function () {
    memoryCost.innerText = "0";
    totalPriceAmount()
});
memory16.addEventListener('click', function () {
    memoryCost.innerText = "180";
    totalPriceAmount()
});

//Storage Event Handling
ssd256.addEventListener('click', function () {
    storageCost.innerText = '0';
    totalPriceAmount()
})
ssd512.addEventListener('click', function () {
    storageCost.innerText = '100';
    totalPriceAmount()
})
ssd1.addEventListener('click', function () {
    storageCost.innerText = '180';
    totalPriceAmount()
})

//Delivery cost Event Handling
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = "0";
    totalPriceAmount()
})
paidDelivery.addEventListener('click', function () {
    deliveryCost.innerText = "20";
    totalPriceAmount()
})
