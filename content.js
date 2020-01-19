console.log('its a test to find the mistake');

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
    elt.style['background-color'] = '#CCCCCC';
}
setTimeout(() => {
    const basketElement = document.querySelector('h1');
    const basketText = basketElement.textContent;
    console.log(basketText);
    const basketItemNumber = basketText.replace(/\D/g, '');
    for (i = 2; i <= parseInt(basketItemNumber) + 1; i++) {
        const basketitemsPriceFound = document.querySelector('div:nth-of-type(' + i + ') .o-productPrice ins');
        console.log('div:nth-of-type(' + i + ') .o-productPrice ins');
        console.log(basketitemsPriceFound.textContent);
    }

    const totalPay = document.querySelector('.-total div.o-orderSummary__itemVal');
    let totalPayText = totalPay.textContent;
    alert('Your final total payment is  ' + totalPayText + '\n' + 'You have choosen '
        + basketItemNumber + ' Number of products!');


}, 5000);