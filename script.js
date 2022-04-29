const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById('pass-box')
const totalInput = document.getElementById('total-char')
const upperInput = document.getElementById('upper-case')
const lowerInput = document.getElementById('lower-case')
const numberInput = document.getElementById('numbers')
const symbolInput = document.getElementById('symbols')

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalInput.value) {
        return generatePassword(password)
    }

    passBox.innerText=truncatestring(password, totalInput.value);
    // console.log(truncatestring(password, totalInput.value) )
    // alert(password);
}

document.getElementById('btn').addEventListener('click', function () {
    generatePassword();
})



function truncatestring(str, num){
    if (str.length>num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// console.log(getRandomData(upperSet))
// console.log(getRandomData(lowerSet))
// console.log(getRandomData(symbolSet))
// console.log(getRandomData(numberSet))