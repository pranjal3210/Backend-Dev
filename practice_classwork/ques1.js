function checkOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof orderId === "number") {
        resolve("Order Shipped");
      } else {
        reject("Invalid Order ID");
      }
    }, 1000);
  });
}
async function processOrder(orderId) {
  
    const result = await checkOrderStatus(orderId);
    console.log(result);
   
}
processOrder(101);   
processOrder("ABC");    
processOrder(null);   
