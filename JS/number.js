let numbersUrl = "http://numbersapi.com/random/trivia";
let counter = 0;

$(function () {

    $("#gif").hide();

});

$("#btn").click(function () {
    $("#gif").show();
    $.ajax({
        type: "GET",
        url: numbersUrl,
        dataType: "text",
        success: function (response) {
            //console.log(response);
            $("#gif").hide();
            $("#numberInfo").append("<br><br><i>" + response + "</i>");

        }
    });

    counter = counter + 1;
    $("#counterCol").text("Tehdyt haut " + counter + " kpl");

});