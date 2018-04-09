// scrape script

// Require request and cheerio to our scrapes possible
var request = require("request");
var cheerio = require("cheerio");

// This function will scrape the BBC website 
// body is the actual HTML on the page. Load this into cheerio
var scrape = function (cb) {
  request("http://www.bbc.com/", function (err, res, body) {


    // Use cheerio to manipulate and traverse our html page
    var $ = cheerio.load(body);

    // Make an empty array to save our articles
    var articles = [];

    // Loop through each element that has the "media__content"
    // In each .media-content, we grab the child with the class media-title
    $(".media__content").each(function (i, element) {

      // This is the article headline - media__title
      var head = $(this).children(".media__title").text().trim();

      // Grab the URL of the article
      var url = $(this).children(".media__link").children("a").attr("href");

      // Then we grab any children with the class of media-summary
      // We store this to the sum variable for the media-summaries
      var sum = $(this).children(".media__summary").text().trim();

      // If our headline and sum and url aren't empty or undefined, do the following
      if (head && sum && url) {
        // This section uses regular expressions and the trim function to tidy our headlines and summaries

        // To remove extra lines, extra spacing, extra tabs, etc.. use regx method
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: url
        };

        articles.push(dataToAdd);
      }
    });
    // After our loop is complete, send back the array of articles to the callback function
    cb(articles);
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;
