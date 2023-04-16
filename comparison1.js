product1= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"shirt",
    "price":"Rs.473",
    "description":"GRITSMAD Men's Slim Fit Cotton Full Sleeve Casual Shirt White",
    "brand":"GRITSMAD",
    "image":"shirt1.jpeg",
    "link":"https://amzn.eu/d/bOgSiOZ "
},{
    "id":2,
    "title":"jewellery",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":3,
    "title":"shoes",
    "price":"400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"skin2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":4,
    "title":"belt",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"socks",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"jeans.avif",
    "link":"https://www.amazon.in/" 

}
];


product2= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{ 
    "id":1,
"title":"shirt",
"price":"595",
"description":"Style Code-TS-SHIRT1083, Secondary Color-White,Closure-BUTTON, Fit-Slim,Fabric-Pure Cotton,Sleeve-Full Sleeve",
"brand":"tanip",
"image":"shirt.jpeg",
"link":"https://dl.flipkart.com/dl/tanip-men-solid-casual-white-shirt/p/itmd7ac59f3558d1?pid=SHTG9UJFPDNUZDKH&cmpid=product.share.pp&_refId=PP.3c3256a3-cb75-46d3-a883-1137e4c9550c.SHTG9UJFPDNUZDKH&_appId=WA "
},{
    "id":2,
    "title":"jewellery",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":3,
    "title":"shoes",
    "price":"400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"skin2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":4,
    "title":"belt",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"pusha",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"socks",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"jeans.avif",
    "link":"https://www.amazon.in/" 

}
];


product3= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"shirt",
    "price":"349 ",
    "description":"White solid opaque Casual shirt ,has a spread collar, button placket, 1 patch pocket, long roll-up sleeves, curved hem",
    "brand":"Dennis Lingo",
    "image":"shirt1.jpeg",
    "link":"https://www.myntra.com/topwear/dennis-lingo/dennis-lingo-men-white-modern-slim-fit-opaque-casual-shirt/15187584/"
    
},{
    "id":2,
    "title":"jewellery",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":3,
    "title":"shoes",
    "price":"400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"skin2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":4,
    "title":"belt",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"jordan",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"socks",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"jeans.avif",
    "link":"https://www.amazon.in/" 

}
];




for(var i=1;i<product1.length;i++){
    document.getElementById("select1").innerHTML+=`<option value="${i}">${product1[i].title}</option>`;
    document.getElementById("select2").innerHTML+=`<option value="${i}">${product2[i].title}</option>`;
    document.getElementById("select3").innerHTML+=`<option value="${i}">${product3[i].title}</option>`;
}


function item1(a){
   //img ko call krte just like alert
   //source change krani h-- js ke pg me product arr me jis variable yani index ko change krna hjo ki pass hoga from func in a , a denotes whole description of one object therefore choose its atrr
    document.getElementById("img1").src=product1[a].image;
//for price
document.getElementById("price1").innerHTML= product1[a].price;
//for brand
document.getElementById("brand1").innerHTML= product1[a].brand;
//for desc
document.getElementById("desc1").innerHTML= product1[a].description;
document.getElementById("link1").href=product1[a].link;

}

function item2(a){
    document.getElementById("img2").src=product2[a].image;
    document.getElementById("price2").innerHTML= product2[a].price;
    document.getElementById("brand2").innerHTML= product2[a].brand;
    document.getElementById("desc2").innerHTML= product2[a].description;
    document.getElementById("link2").href=product2[a].link;
}
function item3(a){
document.getElementById("img3").src=product3[a].image;
document.getElementById("price3").innerHTML=product3[a].price;
document.getElementById("brand3").innerHTML=product3[a].brand;
document.getElementById("desc3").innerHTML=product3[a].description;
document.getElementById("link3").href=product3[a].link;
}

