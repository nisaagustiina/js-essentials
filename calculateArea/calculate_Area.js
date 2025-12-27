let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `Thea area of the rectangle is: ${area}`;
}

function resetArea(type){
    if(type === 'area'){
        document.getElementById('length').value = '';
        document.getElementById('width').value = '';
        document.getElementById('result').innerText = '';
    }else{
        document.getElementById('grocery1').value = '';
        document.getElementById('grocery2').value = '';
        document.getElementById('grocery3').value = '';
        document.getElementById('result-grocery').innerText = '';
    }
}

function groceryTracker(){
    let grocery1 = parseFloat(document.getElementById('grocery1').value);
    let grocery2 = parseFloat(document.getElementById('grocery2').value);
    let grocery3 = parseFloat(document.getElementById('grocery3').value);
    
    let amt = grocery1 + grocery2 + grocery3;
    document.getElementById('result-grocery').innerText = `Thea total amount is: Rp. ${amt}`;
}