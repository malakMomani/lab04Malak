function welcome() {
    var username = prompt('what is your name ?');
    alert('Welcome ' + username + ' Hope you will like our recieps');
}

function takeOrder(order) {
if (order === "Roasted Chicken") {
    console.log('https://www.allrecipes.com/recipe/83557/juicy-roasted-chicken/');
    var no = prompt('How many meals you want?');
    for (var i = 1; i <= no; i++) {
        document.write(i + '. ' + '<img src="https://i.pinimg.com/474x/f2/6b/66/f26b667452282978c7425e18cddb86b8.jpg" style="margin-right: 103px; ">')
    }
} else if (order === "Burger") {
    console.log('https://www.jordan.kfc.me/en/mega-deal?lng=en&gclid=CjwKCAiAu8SABhAxEiwAsodSZCbJBkAGXIiqemw-eNn7Tum0I1etpTwFFg4oWXZeHi80PhlL70ZhqxoCCvoQAvD_BwE&gclsrc=aw.ds');
    var no = prompt('How many meals you want?');
    for (var i = 1; i <= no; i++) {
        document.write(i + '. ' + '<img src="https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1898839841148240393/5aec8ad23768858ddfaf029ada493a50_large.png&width=256&type=webp&quality=40" style="margin-right: 103px; ">')
    }
} else if (order === "Salads") {
    console.log('https://www.loveandlemons.com/salad-recipes/');
    var no = prompt('How many meals you want?');
    for (var i = 1; i <= no; i++) {
        document.write(i + '. ' + '<img src="https://i.pinimg.com/474x/51/e4/9d/51e49d9cd8539a55bbbeba420a08cfa2.jpg" style="margin-right: 103px; ">')
    }
} else if (order === "Shawrma") {
    console.log('https://en.wikipedia.org/wiki/Shawarma');
    var no = prompt('How many meals you want?');
    for (var i = 1; i <= no; i++) {
        document.write(i + '. ' + '<img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.0-9/102879155_115967180144581_4053593621591468295_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8024bb&_nc_ohc=aYBWytqquY4AX-Jn9Yc&_nc_oc=AQnCPeX3DOGs-RlC0Vjt8b09Duqv0dMPi3uA-NkpQ7vEeVO_Ye8MiAL3muFbrGDi7YM&_nc_ht=scontent.famm10-1.fna&oh=28e003310116c05b439118251fbd9bd4&oe=60354759" style="margin-right: 103px; ">')
    }
} else if (order === "Drinks") {
    console.log('https://www.realsimple.com/food-recipes/shopping-storing/beverages/cool-beverages-sultry-day');
    var no = prompt('How many meals you want?');
    for (var i = 1; i <= no; i++) {
        document.write(i + '. ' + '<img src="https://i.pinimg.com/474x/00/34/70/0034701b31c031a0f80be69a47fdd71a.jpg" style="margin-right: 103px; ">')

    }
}
}

welcome();

do {
    var order = prompt('choose your order : ', 'Roasted Chicken , Burger , Salads , Shawrma ,Drinks');
    var result = (order == 'Roasted Chicken') || (order == 'Burger') || (order == 'Salads') || (order == 'Shawrma') || (order == 'Drinks');

} while (!result)

takeOrder(order);

var r = confirm('SCROLL DOWN TO TAKE YOUR MEAL , THEN GO TO CONSOLE TO ENJOY IT !!')





