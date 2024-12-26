const products =localStorage.getItem("cart-products").split(",")
console.log(products);


window.addEventListener("load", async ()=>{


    for (let i = 0 ; i<products.length; i++){
        const res = await fetch (`https://dummyjson.com/products/${products[i]}`);
    }
})