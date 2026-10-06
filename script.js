```javascript
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    alert("Welcome to GameZone! 🎮");

});


const gameButtons = document.querySelectorAll(".gameBtn");

gameButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("This game will be available soon! 🚀");

    });

});
```
