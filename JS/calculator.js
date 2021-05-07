let counter = 0;
let a = parseInt("1000");

window.onload = function () {
    document.getElementById("firstTextInput").value = getRandomInt();
    document.getElementById("secondTextInput").value = getRandomInt();
    document.getElementById("result").value = 0;
    document.getElementById("counterCol").innerHTML = "Laskukertoja " + counter + " kpl";
    //document.getElementById("secondTextInput").value = 1;

}

function showResult() {
    counter = counter + 1;
    document.getElementById("counterCol").innerHTML = "Laskukertoja " + counter + " kpl";
    let val1 = document.getElementById("firstTextInput").value;
    let val2 = document.getElementById("secondTextInput").value;
    let val3 = 0;
    console.log(val1);
    console.log(val2);

    let operators = document.getElementById("operationSelect");
    let selectedText = operators.options[operators.selectedIndex].text; // +
    let selectedValue = operators.options[operators.selectedIndex].value; // 1  
    console.log(selectedText);
    console.log(selectedValue);

    if (selectedValue == 1) {
        console.log("yhteenlasku");
        val3 = parseInt(val1) + parseInt(val2);
    } else if (selectedValue == 2) {
        console.log("vähennyslasku");
        val3 = val1 - val2;
    }
    document.getElementById("result").value = val3;

    if (selectedValue == 3) {
        console.log("kertolasku");
        val3 = parseInt(val1) * parseInt(val2);
    } else if (selectedValue == 4) {
        console.log("jakolasku");
        val3 = val1 / val2;
    }
    document.getElementById("result").value = val3;

}

function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min) + min);

}

function firstButtonMinus() {
    console.log("-");

    let oldValue = document.getElementById("firstTextInput").value;

    document.getElementById("firstTextInput").value = oldValue - 1;
}

function firstButtonPlus() {
    console.log("+");

    let oldValue = document.getElementById("firstTextInput").value;
    oldValue++;
    document.getElementById("firstTextInput").value = oldValue;
}

function secondButtonMinus() {
    console.log("-");

    let oldValue = document.getElementById("secondTextInput").value;

    document.getElementById("secondTextInput").value = oldValue - 1;
}

function secondButtonPlus() {
    console.log("+");

    let oldValue = document.getElementById("secondTextInput").value;
    oldValue++;
    document.getElementById("secondTextInput").value = oldValue;
}




