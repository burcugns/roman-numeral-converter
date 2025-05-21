const convertButton = document.getElementById("convert-btn")
const numberInput=document.getElementById("number")
const output=document.getElementById("output")


convertButton.addEventListener('click',function(){

   inputValue = numberInput.value

    if(isEmpty(inputValue)){
        showAlert("Please enter a valid number")
    }

    else if(isSmallerThanOne(inputValue)){
        showAlert("Please enter a number greater than or equal to 1")
    }
    else if(isGreaterThanFourThousand(inputValue)){
        showAlert("Please enter a number less than or equal to 3999")
    }
    else {
        showResult(toRoman(inputValue))
    }
})

function showAlert(content){
         output.textContent=content
         output.classList.remove("hidden")
         output.classList.add("alert")
     
}

function showResult(content){
    output.textContent=content
    output.classList.remove("hidden")
    output.classList.remove("alert")


}

function isEmpty(inputValue){
  if ( inputValue ===""){
    return true
  }
  return false
}

function isSmallerThanOne(inputValue){
    if (inputValue <1){
        return true
    }
    return false
}
function isGreaterThanFourThousand(inputValue){
    if(inputValue > 3999){
        return true
    }
    return false
}

function toRoman(num) {
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            num -= romanMap[i].value;
        }
    }

    return result;
}