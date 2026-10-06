```javascript
// EXPLORE BUTTON

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });

});


// DOWNLOAD BUTTONS

const downloadButtons = document.querySelectorAll(".downloadBtn");

downloadButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const gameLink = button.getAttribute("data-link");

        window.open(gameLink, "_blank");

    });

});


// SIGN IN

const signInBtn = document.getElementById("signInBtn");

const loginOverlay = document.getElementById("loginOverlay");

const closeBtn = document.getElementById("closeBtn");


// OPEN LOGIN

signInBtn.addEventListener("click", function () {

    loginOverlay.style.display = "flex";

});


// CLOSE LOGIN

closeBtn.addEventListener("click", function () {

    loginOverlay.style.display = "none";

});


// LOGIN FORM

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Login interface works! 🎮");

});
```
