$(function () {
    // Document is ready
});

$("#listButton").click(removeClass);
$("#gridButton").click(addClass);

function removeClass() {
    console.log("Test");
    $('#image-container').removeClass('grid-container').addClass('list-container');
}

function addClass() {
    $('#image-container').removeClass('list-container').addClass('grid-container');
}

