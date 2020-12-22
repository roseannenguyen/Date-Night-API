$("#getMovieDinnerInfo").on("click", function(event){
event.preventDefault();  

    var movieTitle = $("#movie-input").val().trim();
    var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=" + "6cc7def2";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

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

        $("#movie-info").append(movieInfoDisplay);

        var movieImgDisplay = $("<div>");

        var imgURL = response.Poster;
        var img = $("<img>").attr("src", imgURL);
        movieImgDisplay.append(img);

        $("#movie-image").prepend(movieImgDisplay);

    })
});