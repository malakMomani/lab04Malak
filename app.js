
var username = prompt('what is your name ?');
alert('Welcome ' + username + ' Hope you will like our recieps');


var order = prompt('choose your order : ');

if (order === "Roasted Chicken") {
    console.log('https://www.allrecipes.com/recipe/83557/juicy-roasted-chicken/');
    alert('GO TO CONSOL TO ENJOY YOUR MEAL !!');
    var result = confirm('Did you enjoy your meal ?');
if (result) {
    alert("Thank you");
}
} else if (order === "Burger") {
    console.log('https://www.jordan.kfc.me/en/mega-deal?lng=en&gclid=CjwKCAiAu8SABhAxEiwAsodSZCbJBkAGXIiqemw-eNn7Tum0I1etpTwFFg4oWXZeHi80PhlL70ZhqxoCCvoQAvD_BwE&gclsrc=aw.ds');
    alert('GO TO CONSOL TO ENJOY YOUR MEAL !!');
    var result = confirm('Did you enjoy your meal ?');
if (result) {
    alert("Thank you");
}

} else if (order === "Salads") {
    console.log('https://www.loveandlemons.com/salad-recipes/');
    alert('GO TO CONSOL TO ENJOY YOUR MEAL !!');
    var result = confirm('Did you enjoy your meal ?');
if (result) {
    alert("Thank you");
}
} else if (order === "Shawrma") {
    console.log('https://en.wikipedia.org/wiki/Shawarma');
    alert('GO TO CONSOL TO ENJOY YOUR MEAL !!');
    var result = confirm('Did you enjoy your meal ?');
if (result) {
    alert("Thank you");
}

} else if (order === "Drinks") {
    console.log('https://www.realsimple.com/food-recipes/shopping-storing/beverages/cool-beverages-sultry-day');
    alert('GO TO CONSOL TO ENJOY YOUR MEAL !!');
    var result = confirm('Did you enjoy your meal ?');
if (result) {
    alert("Thank you");
}
}
else {
    console.log('This reciepe is not exist!!');}





