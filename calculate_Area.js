let length;
let width;

function calculateArea(){
    len = parseFloat(document.getElementById("length").value) ; // converts the string value retrieved from the input field to a floating-point number
    wid = parseFloat(document.getElementById("width").value) ;
    
    let area = len * wid;
    // modify the text content within that HTML element
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


function groceryTracker(){
    grocery1 = parseFloat(document.getElementById("grocery1").value) ;
    grocery2 = parseFloat(document.getElementById("grocery2").value) ;
    grocery3 = parseFloat(document.getElementById("grocery3").value) ;

    let sumAmount = grocery1 + grocery2 + grocery3;

    document.getElementById("result").innerText = `The total amount is: $${sumAmount}`
}