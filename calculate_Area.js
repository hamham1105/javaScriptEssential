let length;
let width;

function calculateArea(){
    len = parseFloat(document.getElementById("length").value) ; // converts the string value retrieved from the input field to a floating-point number
    wid = parseFloat(document.getElementById("width").value) ;
    
    let area = len * wid;
    // modify the text content within that HTML element
    document.getElementById("result").innerText = 'The area of the rectangle is: ${area}';
}