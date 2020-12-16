# BootstAPI

### Introduction

We'll be exploring making API requests and displaying the results in Bootstrap components. When you're done, you'll be able to make a page not unlike [this random dog generator](bootstrapi-solution.surge.sh).


### Part 1 - Pick an API

Pick one of these APIs to play with!

**Be warned that some APIs in the last two lists are difficult to use.** We can always try to help you navigate them!

* [The Random Dog API](https://dog.ceo/dog-api/)
* [The Dad Jokes API](https://icanhazdadjoke.com/api)
* [TheCocktailDB](https://www.thecocktaildb.com/api.php?ref=apilist.fun)
* [Fancy Tacos](https://github.com/evz/tacofancy-api)
* [Chuck Norris Jokes](https://api.chucknorris.io/)
* [Random Kanye West Quotes](https://kanye.rest/)
* [The Bored API](https://www.boredapi.com/)
* [The Punk API (Craft Beers)](https://punkapi.com/documentation/v2)
* [Something from this crazy list of APIs](https://www.programmableweb.com/category/all/apis)


### Part 2 - XHR

XML HTTP Requests, or XHRs, are a callback-based method built into browsers for making network requests to [APIs](https://www.howtogeek.com/343877/what-is-an-api/). They allow us to access data on a server, whether it's our own server or a public-facing server for another app. Our app might want to access its users' information to display to them, or we might want to tie into Google's Maps API to show them where something is. Either way, XHRs will allow you to access data that's not immediately a part of your app.

Here is a breakdown of the steps to making a simple request using XHR:

* Create a new XMLHttpRequest object. The syntax for this is a bit new, but it's basically a factory function that returns the object we want with all its many methods and properties. Note the weird case inconsistencies with the acronyms! (Pick a LANE, coders!)

``` javascript
const xhr = new XMLHttpRequest();
```

* Add an event listener to the `xhr` object you got. We'll listen for a `loadend` event, and then take the JSON the server sends us (on the property `responseText` on our `xhr`) convert it to a JS object and, for now, print out that object to our console. Note how similar this is to DOM event listeners!

``` javascript
xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
})
```

* So all we did there is set things up to deal with a response, but we haven't actually made a request yet! We don't want to do that in the global scope for a number of reasons (including that we don't want it to make that request every time we make a change in our code and LiveServer reloads the page, running all global code!), so query the button (actually a link; check the HTML!) and add a click event listener to it.

``` javascript
// Code not pictured; you've got this one!
```

* So when they click the button, THAT'S when we want to send out our request. In your button's click event listener, use the `xhr` `open` method to set up (but not send!) a `GET` request to the url of the API you chose. The first argument to `open` is the type of request, and the second is the url.

``` javascript
xhr.open('GET', 'https://someurlbutnothisone.com/random')
```

* It's PROBABLY a good idea to specify you want JSON, although many APIs default to it or in fact ONLY use JSON. We do that by specifying in the "header" of our network request that we'll be accepting JSON. **NOTE:** if an API says you need to add a header for something else as well, this is the method to use!

``` javascript
xhr.setRequestHeader('Accept', 'application/json');
```

* Finally, we're ready to send that request. The `send` method on the `xhr` object can also take an argument if we need to actually send additional information (as with a `POST` request for example; what are we posting?), but with a `GET` request, we can simply hit the send button.

``` javascript
xhr.send();
```

* Check your console. You should have an object printed out! Now it's time to DO something with that object. Find some relevant info in your object and either put it in the `p` tag (if it's text) or the `img` tag (if it's a picture). Check your html!


### Part 3 - Basic Interface

You may have noticed that our interface is very very basic and also about dogs. Let's work on the dog part first. Unless your API actually WAS about dogs (the best ones are!), change the heading and subheading and button text and anything else to match your actual app!


### Part 4 - Bootstrap Stylin'

Okay, now that your content is specific to your app, let's add some Bootstrap and make it look... pretty good?

* Go check out [the docs for Bootstrap's card component](https://getbootstrap.com/docs/5.0/components/card/). We'll wait!
* Now let's add some of those sweet card classes to the right elements and watch our site get way better! Start with the `.main` `section`. Give it the additional class `card`, and check out the differnce.
* Next: give the `.button` element the additional classes `btn` and `btn-primary`.
* Give the `h5` element the class `card-title`.
* Give the `h6` element the clas `card-subtitle` and, optionally, `text-muted` (try it and see if you like it!)
* Give the `p` element the additional class `card-text`.
* Finally, give the `img` (if you need one) the class of `card-img-bottom`.

You should now have a decent-looking site! If its look doesn't approximately match the one linked in the Introduction, you may have missed a class or two. Check over your code and look at the examples in the docs!


### Part 5 - Stretch!

There are many directions you could take this one:

* Add a second API that combines with your current one. Ask which joke is funnier between two joke-telling APIs, or which is cuter between a dog and a cat, or who would win in a fight between random Jedi Knights and Pokemon. Or take it other directions... pick a random pokemon and then a random cocktail and try combining their names to make a pokemon-themed drink. Or something else! This is one way to make a fun app, combining datasets in original ways.
* Store the responses you got in an array as you go. This will allow the user to click random a bunch of times and then go back through the history. Whenever you add a new random thing to the array, change a global `i` variable to keep track of which is your latest item. What you'll want to do is add a previous button that, when clicked, decrements that `i` and displays the thing at THAT index in the array. You could also add a forward button that will do the same thing, but increments the `i`. This all will give the user a much more powerful ability to flip through all the items they've randomly gotten so far!
* If you did the previous Stretch Goal, the next step would be to use [Bootstrap's Carousel component](https://getbootstrap.com/docs/5.0/getting-started/introduction/#js) to display the items you've got already. It's going to take a fair amount of configuration, including [adding their JavaScript](https://getbootstrap.com/docs/5.0/getting-started/introduction/#js) to your page, but the result is a very nice-looking site!
