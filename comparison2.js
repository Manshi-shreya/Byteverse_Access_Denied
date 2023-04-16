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
    "title":"bag",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg1.jpg",
    "link":"https://www.amazon.in/"
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
    "title":"bag",
    "price":"300",
    "description":"amazon suti",
    "brand":"amra",
    "image":"bg1.jpg",
    "link":"https://www.amazon.in/"
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
    "title":"bag",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg1.jpg",
    "link":"https://www.amazon.in/"
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

