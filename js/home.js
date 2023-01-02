let bg = document.getElementById('home-bg');

window.addEventListener('scroll', function (e) {
    let position = window.scrollY;
    console.log(position)
    if (position > 10 && position < 150) {
        bg.style.background = '#F4B8A1';
    }
    else if (position > 150) {
        bg.style.background = '#ECA296';
    }
    else {
        bg.style.background = '#f7c79e';
    }
})


let mtn1 = document.getElementById('mtn1');
let mtn2 = document.getElementById('mtn2');
let mtn3 = document.getElementById('mtn3');
let sand = document.getElementById('sand');
let waves = document.getElementById('waves');
let ocean = document.getElementById('ocean');
let sun = document.getElementById('sun');

window.addEventListener('scroll', function (e) {
    let value = window.scrollY;
    mtn1.style.top = (value * .01 + 17) + "em";
    mtn2.style.top = (value * .02 + 3) + "em";
    mtn3.style.top = (value * .03 + 8) + "em";
    sand.style.top = (value * .032 + 15.1) + "em";
    waves.style.top = (value * .032 + 15.1) + "em";
    ocean.style.top = (value * .032 + 15.1) + "em";
    sun.style.top = (value * .052 + 7.5) + "em";
})

function showMenu() {
    var menu = document.getElementById("menu-items");
    var bg = document.getElementById("home-bg");
    var bar = document.getElementById("navbar-mobile");
    if (menu.style.visibility === "visible") {
        bar.style.maxHeight = "10vh";
        menu.style.visibility = "hidden";
        // bg.style.height = "100vh";
    } else {
        bar.style.maxHeight = "50vh";
        // bg.style.height = "130vh";
        menu.style.visibility = "visible";
    }
}