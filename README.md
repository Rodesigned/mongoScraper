# mongoScraper
## here is the link on HEROKU https://nameless-shore-99051.herokuapp.com/

## All the News That's Fit to Scrape
### Overview

In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

## Dependencies
### NPM packages
1. express

2. express-handlebars

3. mongoose

4. body-parser

5. cheerio

6. request

## Deploy to Heroku and set-up an mLab provision. 
### mLab is a remote MongoDB database

## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits the site, the app can scrape stories from a news outlet and display news articles. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.
