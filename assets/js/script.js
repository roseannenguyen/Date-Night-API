


var foodChoices = {
    Action: ["Hot dogs", "Sandwiches", "Burgers"],
    Animation: ["Comfort food", "Pizza", "Fast food"],
    Comedy: ["Burgers", "Fast food", "Mexican"],
    Crime: ["Cheesesteaks", "Chicken Wings", "Fish & Chips"],
    Drama: ["Soul food", "Soup", "Italian"],
    Experimental: ["Japanese", "Latin American", "Seafood"],
    Fantasy: ["Italian", "Pizza", "Noodles"],
    Historical: ["French", "Steakhouses", "Cafes"],
    Horror: ["Noodles", "Steakhouses", "Burgers"],
    Romance: ["Cafes", "Italian", "French"],
    Scifi: ["Chinese", "Hawaiian", "Japanese"],
    Thriller: ["Pizza", "Noodles", "Japanese"],
    Western: ["Diners", "Steakhouses", "Burgers"]
}

$("#getMovieDinnerInfo").on("click", function () {
    event.preventDefault();
    getYelp()
    getMovie()
    renderInput()

})
function getMovie() {

    var movieTitle = $("#movie-input").val().trim();
    var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=" + "6cc7def2";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var movieInfoDisplay = $("<div>");

        var plot = response.Plot;
        var released = response.Released;
        var rating = response.Rated;

        var plotInfo = $("<p>").text("Plot: " + plot);
        var releaseInfo = $("<p>").text("Released: " + released);
        var ratingInfo = $("<p>").text("Rating: " + rating);

        movieInfoDisplay.append(plotInfo);
        movieInfoDisplay.append(releaseInfo);
        movieInfoDisplay.append(ratingInfo);

        $("#movie-view").append(movieInfoDisplay);

        var movieImgDisplay = $("<div>");

        var imgURL = response.Poster;
        var img = $("<img>").attr("src", imgURL);
        movieImgDisplay.append(img);

        $("#movie-view").prepend(movieImgDisplay);

    })
};


function getYelp() {
    var zipCode = $("#zip-code-input").val().trim();

    var baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?cc=US&location=" + zipCode + "&categories=restaurants"
    $.ajax({
        url: baseURL,
        headers: {
            'Authorization': 'Bearer 7-D4nAqKTqKGKyAhkEZhnzdFCzZ02Vigx-oRKe4i4WmREcgloB8n6nJr-qAG2B7xbtMxXC-3Dj2xTP-EUx4mDjeNaglMpCl8T9WnehSynk_6OtDL-jP1DmbNZUDeX3Yx',

        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log('success: ' + data);

            // Grab the results from the API JSON return
            var totalresults = data.total;
            // If our results are greater than 0, continue
            if (totalresults > 0) {
                // Display a header on the page with the number of results
                $('#food-1').append('<h5>We discovered ' + totalresults + ' results! Below are our top 3 recommendations:</h5>');
                // Itirate through the JSON array of 'businesses' which was returned by the API

                $.each(data.businesses, function (i, item) {
                    if (i >= 3) {
                        return false;
                    }

                    var id = item.id;
                    var alias = item.alias;
                    var image = item.image_url;
                    var name = item.name;
                    var rating = item.rating;
                    var reviewcount = item.review_count;
                    var address = item.location.address1;
                    var city = item.location.city;
                    var state = item.location.state;
                    var zipcode = item.location.zip_code;
                    // Append our result into our page
                    return ($('#food-1').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>'));
                });

            }
        }
    });

}

function renderInput() {
$("#food-1").empty()
$("getMovieDinnerInfo").empty()
}





