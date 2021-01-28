// by click mouse

var animalsButton = document.querySelectorAll(".animal").length;

for (var i = 0; i < animalsButton; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {

        alert(this.innerHTML);

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "cow":
                var cow = new Audio("sounds/cow.mp3");
                cow.play();
                break;

            case "cat":
                var cat = new Audio("sounds/cat.mp3");
                cat.play();
                break;

            case "duck":
                var duck = new Audio("sounds/duck.mp3");
                duck.play();
                break;


            case "horse":
                var horse = new Audio("sounds/horse.mp3");
                horse.play();
                break;

            case "rooster":
                var rooster = new Audio("sounds/rooster.mp3");
                rooster.play();
                break;

            case "sheep":
                var sheep = new Audio("sounds/sheep.mp3");
                sheep.play();
                break;



            default:
                console.log(buttonInnerHTML);
                break;
        }

    });

};



var audio = new Audio("sounds/playtime.mp3");
audio.play();