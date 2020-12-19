var apiKey = "7-D4nAqKTqKGKyAhkEZhnzdFCzZ02Vigx-oRKe4i4WmREcgloB8n6nJr-qAG2B7xbtMxXC-3Dj2xTP-EUx4mDjeNaglMpCl8T9WnehSynk_6OtDL-jP1DmbNZUDeX3Yx"

var yelp = require("yelp-fusion");
var client = yelp.client(apiKey);

client.allCategories().then(response => {
  console.log(response.jsonBody.categories[0].alias);
}).catch(e => {
  console.log(e);
});


function allCategories(){
    return this.send({
      url: 'https://api.yelp.com/v3/categories',
      bearerToken: this.apiKey
    });
  }

  function categoryDetails(alias){
    return this.send({
      url: 'https://api.yelp.com/v3/categories/{alias}',
      urlParams:{
        alias: alias
      },
      bearerToken: this.apiKey
    });
  }


// fetch()

// https://www.yelp.com/developers/documentation/v3/all_category_list/categories.json