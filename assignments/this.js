/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* it's a pronoun in place of an object, kinda like 'here'
*
* 1. Window/Global object binding - the value of this is the window or console object, where are we? we're in the window/global place
* 2. Implicit binding - when a function is called by a preceding dot, the object to the left is the place we're referring to, that binds it, by binding it means we're setting the context
* 3. New Binding - when we're making that nifty template called a constructor function, we're saying 'here', but not the immediate 'here' of the constructor, the future 'here' context in the new object.
* 4. Explicit Binding - so, .bind, .call, .apply override what 'this' points to? binding objects together..., passing an object to .call and .apply. explicit binding 'I need to tell you where here is'
*
* write out a code example of each explanation above
*/

// Principle 1
//THE UNIVERSE! it's the video from TK, Ryan showed us the universe.
// code example for Window Binding
console.log(this)

// Principle 2
// code example for Implicit Binding
const lindseyObj = {
    greeting: 'Howdy',
    speak: function() {
        return this.greeting + ' partner, welcome to the wild west.'
    }
};
//we are 'here'

// Principle 3
// code example for New Binding
function Person(idNumber, emailAddress, firstName, gender){
    this.idNumber = idNumber;
    this.emailAddress = emailAddress;
    this.firstName = firstName;
    this.gender = gender;
    this.introduction = function(){
        return 'My name is ' + this.firstName + '. I am ' + this.gender + ', my identification number is ' + this.idNumber + ' and my email address is ' + this.emailAddress;
    }
}

// Principle 4
// code example for Explicit Binding
const yourObject = {
    name: 'Dan Frehner',
    city: 'Salt Lake City',
    favoriteFood: 'Burritos'
}

const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']

function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
}


// Using yourObject and thingsYouEnjoy array, set the context of this on tellUsAboutYourself and call the function.

tellUsAboutYourself.apply(yourObject);

tellUsAboutYourself(thingsYouEnjoy[1], thingsYouEnjoy[4], thingsYouEnjoy[5]);

//If you finish fast add some keys to the yourObject and use them in the funciton. Or create your own function.
