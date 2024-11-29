window.addEventListener("load",async()=>{
    //todo ->improve thise part
    const splitArray = window.location.href.split("?");
    const idPart= splitArray[1].split("=");

    const id = idPart[1];

    //  'http://dummyjson.com/products/1'

    const res =await fetch (`http://dummyjson.com/products/${id}`);

    const product = await res.json();

    console.log(product);

})