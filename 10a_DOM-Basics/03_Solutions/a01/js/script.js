//start at index 1
let index = 1;//??
//get pic element
let current = document.getElementById("pic");//??

/**
 * function forward
 */
function forward() {//??
    if (current != null) {//??
        if (index < 5) {//??
            index++;//??
        }//??
        current.src = "img/bild0" + index + ".png";//??
    }//??
}//??

/**
 *  function backward
 */
function backward() {//??
    if (current != null) {//??
        if (1 < index) {//??
            index--;//??
        }//??
        current.src = "img/bild0" + index + ".png";//??
    }//??
}//??
