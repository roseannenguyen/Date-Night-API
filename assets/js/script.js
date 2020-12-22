var baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston"

function testYelp() {
    
    $.ajax({
        url: baseURL,
        headers: {
            'Authorization': 'Bearer 7-D4nAqKTqKGKyAhkEZhnzdFCzZ02Vigx-oRKe4i4WmREcgloB8n6nJr-qAG2B7xbtMxXC-3Dj2xTP-EUx4mDjeNaglMpCl8T9WnehSynk_6OtDL-jP1DmbNZUDeX3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log('success: ' + data);
        }
    });

}

$("#getMovieDinnerInfo").on("click", function (event) {
    event.preventDefault();
    testYelp()

})


// movie user-input


// var movieURL= "https://www.omdbapi.com/?t=starwars&apikey=trilogy"

// call the other API instead, with ajax call and appropriate category

// hard code one genre/ one yelp 


