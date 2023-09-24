import productOperations from "./product_operation.js";

var options = {
    price:50,
    "key": "rzp_test_vUJppil5NGhW5N", // Enter the Key ID generated from the Dashboard
    // "price": await productOperations.getProductsInCart()[1],
    // "amount": `${this.price}`,
    "amount": `50000`, 
    // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Pizza Shop", //your business name
    "description": "Pizza Shop Transaction",
    // "image": "https://example.com/your_logo",
    // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert("Payment Done...")
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Custimer Name", //your customer's name
        "email": "customer@example.com", 
        "contact": "Customer Phone"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert("Payment Failed...");
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    console.log("Payment Button is Clicked");
    const cartProducts = productOperations.getProductsInCart();
    const price = cartProducts[1];
    console.log("Price is ", price);
    rzp1.open();
    e.preventDefault();
    // this line Stops next events and they donot propogate further
}
