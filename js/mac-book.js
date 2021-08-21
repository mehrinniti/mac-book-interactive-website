function valueFind(idpara, value) {
    const mainValue = document.getElementById(idpara).innerText = value;
    return mainValue;
}


function totalFind(cost) {
    const averageCost = document.getElementById('total-price');
    averageCost.innerText = cost;
    document.getElementById('coupon-total').innerText = cost;
}



function memoryTotalFind(valueOfMain, valueOfId1, valueOfId2) {
    const storage256gb = document.getElementById(valueOfId1).innerText;
    const deliveryCost = document.getElementById(valueOfId2).innerText;
    const baseCost = document.getElementById('base-price').innerText;
    const totalCost = parseInt(valueOfMain) + parseInt(storage256gb) + parseInt(deliveryCost) + parseInt(baseCost);
    totalFind(totalCost);
    document.getElementById('promo-btn').disabled = false;
    document.getElementById('error').innerText = '';
}



document.getElementById('memory-8gb-price').addEventListener('click', function () {
    const memory8gbValue = valueFind('memory-cost', 0);
    memoryTotalFind(memory8gbValue, 'storage-cost', 'delivery-cost');
});



document.getElementById('memory-16gb-price').addEventListener('click', function () {
    const memory16gb = valueFind('memory-cost', 180);
    memoryTotalFind(memory16gb, 'storage-cost', 'delivery-cost');
});



document.getElementById('ssd-256gb-price').addEventListener('click', function () {
    const memory256gb = valueFind('storage-cost', 0);
    memoryTotalFind(memory256gb, 'memory-cost', 'delivery-cost');
});



document.getElementById('ssd-512gb-price').addEventListener('click', function () {
    const memory512gb = valueFind('storage-cost', 100);
    memoryTotalFind(memory512gb, 'memory-cost', 'delivery-cost');
});



document.getElementById('ssd-1tb-price').addEventListener('click', function () {
    const memory1tb = valueFind('storage-cost', 180);
    memoryTotalFind(memory1tb, 'memory-cost', 'delivery-cost');
});



document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryFree = valueFind('delivery-cost', 0);
    memoryTotalFind(deliveryFree, 'memory-cost', 'storage-cost');
});



document.getElementById('delivery-prime').addEventListener('click', function () {
    const deliveryPrime = valueFind('delivery-cost', 20);
    memoryTotalFind(deliveryPrime, 'memory-cost', 'storage-cost');
});



document.getElementById('promo-btn').addEventListener('click', function () {
    const promoValueField = document.getElementById('promo-value');
    const promoValue = promoValueField.value;
    promoValueField.value = '';
    const totalValue = document.getElementById('coupon-total');
    const subTotal = document.getElementById('total-price').innerText;
    const subTotalNumber = parseInt(subTotal);
    if (promoValue == 'stevekaku') {
        const totalNumberPer = 20 / 100;
        const findNumber = subTotalNumber * totalNumberPer;
        totalValue.innerText = parseInt(subTotalNumber - findNumber);
        document.getElementById('promo-btn').disabled = true;
        document.getElementById('error').innerText = 'You can apply coupon one time';
    } else {
        document.getElementById('error').innerText = 'Please apply right coupon';
    };
});