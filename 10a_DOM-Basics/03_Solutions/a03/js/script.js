//start at index 1
let index = 1;//??
//get html elements
let bild = document.getElementById("pic");//??
let label = document.getElementById("label");//??
let price = document.getElementById("price");//??

/**
 * Init function for first product
 */
function init(){
    bild.src = "img/" + productList[index - 1].img;//??
    label.innerHTML = productList[index - 1].product;//??
    price.innerHTML = productList[index - 1].price;//??
}

/**
 * move forward function
 */
function forward() {
    if (bild != null) {//??
        if (index < 5) {//??
            index++;//??
        } else if (index === 5) {//??
            index = 1;//??
        }//??
        bild.src = "img/" + productList[index - 1].img;//??
        label.innerHTML = productList[index - 1].product;//??
        price.innerHTML = productList[index - 1].price;//??
    }//??
}

/**
 * move backward function
 */
function backward() {
    if (bild != null) {//??
        if (1 < index) {//??
            index--;//??
        }  else if (index === 5) {//??
            index = 1;//??
        }//??
        bild.src = "img/" + productList[index - 1].img;//??
        label.innerHTML = productList[index - 1].product;//??
        price.innerHTML = productList[index - 1].price;//??
    }//??
}

/**
 * Zoom in function
 */
function zoomin() {
    let currWidth = bild.clientWidth;//??
    bild.style.width = (currWidth + 100) + "px";//??
}

/**
 * Zoom out function
 */
function zoomout() {
    let currWidth = bild.clientWidth;//??
    bild.style.width = (currWidth - 100) + "px";//??
}

