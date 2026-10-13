/* =========================
   LOGIN DETAILS
=========================

   CHANGE THESE TWO VALUES
   TO YOUR OWN USER ID
   AND PASSWORD.
*/

const correctUserId = "arpita";

const correctPassword = "12345";


/* =========================
   LOGIN
========================= */

function checkLogin() {

    const userId =
        document.getElementById("userId").value.trim();

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("loginError");


    if (
        userId === correctUserId &&
        password === correctPassword
    ) {

        document
            .getElementById("loginScreen")
            .classList.add("hidden");

        document
            .getElementById("mainWebsite")
            .classList.remove("hidden");

        startHearts();

    } else {

        error.textContent =
            "Wrong User ID or Password ❤️";

    }

}


/* =========================
   ENTER KEY LOGIN
========================= */

document
    .getElementById("password")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                checkLogin();

            }

        }
    );


/* =========================
   LEVEL NAVIGATION
========================= */

function nextLevel(levelNumber) {

    const levels =
        document.querySelectorAll(".level");


    levels.forEach(function(level) {

        level.classList.add("hidden");

    });


    const next =
        document.getElementById(
            "level" + levelNumber
        );


    if (next) {

        next.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================
   FINAL COUNTDOWN
========================= */

function startFinalCountdown() {

    const countdown =
        document.getElementById("countdown");

    let number = 3;


    countdown.textContent = number;


    const timer =
        setInterval(function() {

            number--;

            countdown.textContent = number;


            if (number <= 0) {

                clearInterval(timer);

                nextLevel(10);

                createManyHearts();

            }

        }, 1000);

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className = "heart-float";


    heart.textContent =
        Math.random() > 0.5
            ? "❤️"
            : "💕";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";


    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 7000);

}


function startHearts() {

    setInterval(function() {

        createHeart();

    }, 700);

}


function createManyHearts() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}
