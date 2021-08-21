
function chooseProduct(product) {
    const memoryCost = document.getElementById(product + '-cost');
    memoryCost.innerText == '0';
    let costNumber = memoryCost.innerText;
    if (costNumber == '0') {
        return 0;
    }
    else {
        return 180;
    }
}


document.getElementById('8GB-memoryBtn').addEventListener('click', function () {
    /* const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0'; */

    chooseProduct('memory');

});

document.getElementById('16GB-memoryBtn').addEventListener('click', function () {
    /* const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '180'; */
    chooseProduct('memory');
});

document.getElementById('256gb-ssdBtn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
});

document.getElementById('512gb-ssdBtn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
});

document.getElementById('1tb-ssdBtn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
});

document.getElementById('free-deliveryBtn').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '0';
});

document.getElementById('charge-deliveryBtn').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '20';
});
