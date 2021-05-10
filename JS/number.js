let numbersUrl = "http://numbersapi.com/random/trivia";
let businessIdUrl = "https://avoindata.prh.fi/bis/v1/0108023-3";
let counter = 0;

$(function () {

    $("#gif").hide();
    $("#accordion").accordion({collapsible: true});

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

           $("#accordion").append("<h4>joke</h4><div>" + response + "</div>");
            $("#accordion").accordion("refresh");

        }
    });

  /*  $.ajax({
        type: "GET",
        url: businessIdUrl,
        dataType: "json",
        success: function (response) {
            console.log(response.results[0].name);
            $("#gif").hide();
            $("#numberInfo").append("<br><br><i>" + response.results[0].businessId+" - "+response.results[0].name + "</i>");
 
        }
        
    }); */


    counter = counter + 1;
    $("#counterCol").text("Tehdyt haut " + counter + " kpl");

});