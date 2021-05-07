let articles_json = '[{"name":"Kalle", "src":"kissa.jpg"}, {"name":"Kolli", "src":"kissa1.jpg"}, {"name":"Molle", "src":"kissa2.jpg"}]';
let articles_array;
let index;
let intervalId;
let isStarted;
let localStorageKey = 'imageId';

$(function () {
    init();
});

$("#nextBtn").click(getNextArticle);
$("#previousBtn").click(getPreviousArticle);
$("#pauseBtn").click(pauseArticles);

function init() {
    articles_array = JSON.parse(articles_json);

    //index = 0;
    if (localStorage.hasOwnProperty(localStorageKey)) {
        index = localStorage.getItem(localStorageKey);
    } else {
        index = 0;
    }
    console.log("index: " + index);

    $("#catImage").attr("src", "images/" + articles_array[index].src);
    $("#nameDiv").html(articles_array[index].name);

    intervalId = window.setInterval(getNextArticle, 2000);
    isStarted = true;
}

function getNextArticle() {
    index++;

    if (index > 2) {
        index = 0;
    }

    $("#catImage").attr("src", "images/" + articles_array[index].src);
    $("#nameDiv").html(articles_array[index].name);

    //update localStorage
    localStorage.setItem(localStorageKey, index);
}

function getPreviousArticle() {
    index--;
    console.log("INDEX = " + index);
    if (index < 0) {
        index = 2;
    }

    $("#catImage").attr("src", "images/" + articles_array[index].src);
    $("#nameDiv").html(articles_array[index].name);

    //update localStorage
    localStorage.setItem(localStorageKey, index);
}

function pauseArticles() {
    if (isStarted) { //ajastus on päällä
        window.clearInterval(intervalId);
        isStarted = false;
        $("#pauseBtn").html('<i class="bi bi-caret-right"></i>');
    } else {
        intervalId = window.setInterval(getNextArticle, 2000);
        isStarted = true;
        $("#pauseBtn").html('<i class="bi bi-pause"></i>');
    }

    //update localStorage
    localStorage.setItem(localStorageKey, index);
}