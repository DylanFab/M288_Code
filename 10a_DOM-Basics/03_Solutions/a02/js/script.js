//start at index 1
let index = 1;//??
//get pic element
let bild = document.getElementById("pic");//??
let label = document.getElementById("label");//??
let price = document.getElementById("price");//??

function init(){
    bild.src = "img/" + productList[0].img;
    label.innerHTML = productList[0].product;
    price.innerHTML = productList[0].price;
}

/**
 * function forward
 */
function forward() {//??
    if (bild != null) {//??
        if (index < 5) {//??
            index++;//??
        } else if (index === 5){
            index = 1;
        }
        bild.src = "img/" + productList[index-1].img;
        label.innerHTML = productList[index-1].product;
        price.innerHTML = productList[index-1].price;
    }//??
}//??

/**
 *  function backward
 */
function backward() {//??
    if (bild != null) {//??
        if (1 < index) {//??
            index--;//??
        } else if (index === 1){
            index = 5;
        }
        bild.src = "img/" + productList[index-1].img;
        label.innerHTML = productList[index-1].product;
        price.innerHTML = productList[index-1].price;
    }//??
}//??
