//ALL get element by ID
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

const promoCodeBtn = document.getElementById('promoCode-btn');
const promoInput = document.getElementById('promo-input');

const grandTotal = document.getElementById('grand-total');

//Memory Function
function memory(memorySize) {
    if (memorySize == '16GB') {
        memoryCost.innerText = "180";
    }
    else {
        memoryCost.innerText = "0";
    }
}
//Storage Function
function storage(storageSize) {
    if (storageSize == "512GB") {
        storageCost.innerText = '100';
    }
    else if (storageSize == "1TB") {
        storageCost.innerText = '180';
    }
    else {
        storageCost.innerText = '0';
    }
}
//shipping Function
function shipping(delivery) {
    if (delivery == "paid") {
        deliveryCost.innerText = "20";
    }
    else {
        deliveryCost.innerText = "0";
    }
}

//Total Cost
function totalPriceAmount() {
    const extraMemoryCost = parseInt(memoryCost.innerText);
    const extraStorageCost = parseInt(storageCost.innerText);
    const extraDeliveryCost = parseInt(deliveryCost.innerText);
    const bestPriceAmount = parseInt(bestPrice.innerText);
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

//ALL ADD EVENT Handling
//Memory Event Handling
memory8.addEventListener('click', function () {
    memory('8GB');
    totalPriceAmount();
});
memory16.addEventListener('click', function () {
    memory('16GB');
    totalPriceAmount();
});

//Storage Event Handling
ssd256.addEventListener('click', function () {
    storage("256GB");
    totalPriceAmount();
})
ssd512.addEventListener('click', function () {
    storage("512GB");
    totalPriceAmount();
})
ssd1.addEventListener('click', function () {
    storage("1TB");
    totalPriceAmount();
})

//Delivery cost Event Handling
freeDelivery.addEventListener('click', function () {
    shipping("free");
    totalPriceAmount();
})
paidDelivery.addEventListener('click', function () {
    shipping("paid");
    totalPriceAmount();
})
