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
    "title":"Facewash",
    "price":"&#x20b9 187",
    "description":"Moisten face, apply a small quantity of Purifying Neem Face Wash and gently work up a lather using a circular motion",
    "brand":"himalaya",
    "image":"facewash.jpg",
    "link":"https://amzn.eu/d/5xehnB0"
},{
    "id":2,
    "title":"moisturizer",
    "price":"&#x20b9 290",
    "description":"best suited for all skin type",
    "brand":"Mamaearth",
    "image":"moi.jpg" ,
    "link":"https://www.amazon.in/dp/B07STDDDGF?ref_=cm_sw_r_mwn_dp_S3PC73W4W8RCPTF9PK9F"
},{
    "id":3,
    "title":"lipbalm",
    "price":" &#x20b9 74",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"lipbalm.jpg" ,
    "link":"https://www.amazon.in/dp/B09BFYV375?ref_=cm_sw_r_mwn_dp_2DHGZQ8CPJX12P71ZXKF"
},{
    "id":4,
    "title":"Fask mask",
    "price":" &#x20b9 500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"deodrant",
    "price":" &#x20b9 192",
    "description":"amazon cotton size-28 ",
    "brand":"nivea",
    "image":"deo.jpg",
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
    "title":"Facewash",
    "price":"&#x20b9 169",
    "description":"Purifying Neem Face Wash 200ml",
    "brand":"Himalaya",
    "image":"facewash.jpg",
    "link":"https://dl.flipkart.com/dl/dinine-craft-set-4-showpiece-home-decor-handicraft-table-office-small-statue-baby-monk-buddha-modern-interior-multi-color-decorative-cm/p/itmd22b42bd5e2f3?pid=SHIFYG8APACZRPM8&cmpid=product.share.pp&_refId=PP.79354b88-e4c7-4cc4-b9df-ad3127fc1953.SHIFYG8APACZRPM8&_appId=WA "
},{
    "id":2,
    "title":"Mosturizer",
    "price":" &#x20b9 300",
    "description":"best suited for all skin type",
    "brand":"mamaearth",
    "image":"moi.jpg" ,
    "link":"https://amzn.eu/d/hYp1f3y"
},{
    "id":3,
    "title":"Lip balm",
    "price":" &#x20b9 400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"lipbalm.jpg" ,
    "link":"https://dl.flipkart.com/dl/aceeaura-pink-magic-lip-balm-dry-chapped-lips-glossy-strawberry-flavor-pack-3/p/itm6177023975fc6?pid=LSKGEQHGGR5ZZJGZ&cmpid=product.share.pp&_refId=PP.7870c7ff-8cee-4583-a408-6ef7f544a4c2.LSKGEQHGGR5ZZJGZ&_appId=CL"
},{
    "id":4,
    "title":"Fash Mask",
    "price":" &#x20b9 500",
    "description":"amazon cotton size-28 ",
    "brand":"pusha",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"Deodrant",
    "price":" &#x20b9 500",
    "description":"have pleasant smell with sweat absorbing properties ",
    "brand":"Nivea",
    "image":"deo.jpg",
    "link":"https://amzn.eu/d/hvOMT28" 

}
];


product3= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    // "image":""
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"Facewash",
    "price":"&#x20b9 104",
    "description":"for men and women both.antibacterial and antifumgal",
    "brand":"Himalya",
    "image":"facewash.jpg",
    "link":"https://www.meesho.com/s/p/2hz4hf?utm_source=s_w"
},{
    "id":2,
    "title":"Mosturizer",
    "price":"&#x20b9 285",
    "description":"best suited for all skin type",
    "brand":"mamaearth",
    "image":"moi.jpg" ,
    "link":"https://dl.flipkart.com/dl/mama-earth-oil-free-face-moisturiser-80-gm-x-1/p/itmeea8882e77ffd?pid=MZMGGF6WAFZKHZZP&cmpid=product.share.pp&_refId=PP.8a8d7d4a-936d-49c8-8a78-b54033bc8de4.MZMGGF6WAFZKHZZP&_appId=WA"
},{
    "id":3,
    "title":"lipbalm",
    "price":" &#x20b9 400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"lipbalm.jpg" ,
    "link":"https://www.meesho.com/s/p/2EJQK3?utm_source=ws"
},{
    "id":4,
    "title":"fask mask",
    "price":" &#x20b9 500",
    "description":"amazon cotton size-28 ",
    "brand":"jordan",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"Deodrant",
    "price":" &#x20b9 500",
    "description":"have best sweat absorbing property ",
    "brand":"Nevea",
    "image":"deo.jpg",
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

