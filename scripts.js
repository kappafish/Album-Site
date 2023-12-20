// TITLE CARD JS

document.addEventListener("DOMContentLoaded", function() {
    // Get all fade-out objects
    const fadeOutObjects = document.querySelectorAll('.fade-out');

    // Get all content divs
    const contentDivs = document.querySelectorAll(".content");

    // Function to handle the scroll event
    function handleScroll() {
        // Iterate through each content div
        contentDivs.forEach(function(contentDiv, index) {
            // Get the offset position of the content div
            const contentOffset = contentDiv.offsetTop;

            // Check if the user has scrolled past the content div
            if (window.pageYOffset >= contentOffset) {
                fadeOutObjects[index].classList.add("hidden");
                fadeOutObjects[index].classList.remove("beginning");
            } else {
                fadeOutObjects[index].classList.remove("hidden");
                fadeOutObjects[index].classList.add("beginning");
            }
        });
    }

    // Attach the handleScroll function to the scroll event
    window.onscroll = handleScroll;
});

document.addEventListener("DOMContentLoaded", function() {
    // Set the target position you want to scroll to
    var targetPosition = 1; // Adjust this value based on your needs

    // Use the window.scroll method to scroll to the target position
    window.scroll(0, targetPosition);
});

//BOTTOM REVEALER
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const revealsImg = document.querySelectorAll(".reveals-img");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsImg[i].classList.add("active");
        } else {
            revealsImg[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

let counter = 1;
    function leftBtnClick() {
    const pauseBtn = document.getElementById("pause-button");
    const playBtn = document.getElementById("play-button");
    playBtn.style.display="block";
    pauseBtn.style.display="none";
    trackOne.currentTime = 0;
    trackOne.pause();
    trackTwo.currentTime = 0;
    trackTwo.pause();
    trackThree.currentTime = 0;
    trackThree.pause();
    trackFour.currentTime = 0;
    trackFour.pause();
    trackFive.currentTime = 0;
    trackFive.pause();
    trackSix.currentTime = 0;
    trackSix.pause();
    trackSeven.currentTime = 0;
    trackSeven.pause();
    trackEight.currentTime = 0;
    trackEight.pause();
    trackNine.currentTime = 0;
    trackNine.pause();
    trackTen.currentTime = 0;
    trackTen.pause();
    trackEleven.currentTime = 0;
    trackEleven.pause();
    trackTwelve.currentTime = 0;
    trackTwelve.pause();
    counter--;
    if(counter === 0) {
        counter = 12;
    }
    else {
    }
        document.getElementById("track-number").innerHTML= counter.toString();

        if(counter === 1){
            document.getElementById("track-title").innerHTML="COMING OF AGE";
        }
        else if(counter === 2) {
            document.getElementById("track-title").innerHTML="WHO'S LAUGHING NOW";
        }
        else if(counter === 3) {
            document.getElementById("track-title").innerHTML="HASTA LA VISTA BABY";
        }
        else if(counter === 4) {
            document.getElementById("track-title").innerHTML="TKO";
        }
        else if(counter === 5) {
            document.getElementById("track-title").innerHTML="WORSE FOR WEAR";
        }
        else if(counter === 6) {
            document.getElementById("track-title").innerHTML="IM FINE (NO REALLY)";
        }
        else if(counter === 7) {
            document.getElementById("track-title").innerHTML="MALL RAT";
        }
        else if(counter === 8) {
            document.getElementById("track-title").innerHTML="LITTLE BIT LONELY";
        }
        else if(counter === 9) {
            document.getElementById("track-title").innerHTML="LOSERS CLUB";
        }
        else if(counter === 10) {
            document.getElementById("track-title").innerHTML="TRAUMA QUEEN";
        }
        else if(counter === 11) {
            document.getElementById("track-title").innerHTML="SUBURBAN LEGEND";
        }
        else if(counter === 12) {
            document.getElementById("track-title").innerHTML="ENCORE";
        }
}

    function rightBtnClick() {
    const pauseBtn = document.getElementById("pause-button");
    const playBtn = document.getElementById("play-button");
    playBtn.style.display="block";
    pauseBtn.style.display="none";
    trackOne.currentTime = 0;
    trackOne.pause();
    trackTwo.currentTime = 0;
    trackTwo.pause();
    trackThree.currentTime = 0;
    trackThree.pause();
    trackFour.currentTime = 0;
    trackFour.pause();
    trackFive.currentTime = 0;
    trackFive.pause();
    trackSix.currentTime = 0;
    trackSix.pause();
    trackSeven.currentTime = 0;
    trackSeven.pause();
    trackEight.currentTime = 0;
    trackEight.pause();
    trackNine.currentTime = 0;
    trackNine.pause();
    trackTen.currentTime = 0;
    trackTen.pause();
    trackEleven.currentTime = 0;
    trackEleven.pause();
    trackTwelve.currentTime = 0;
    trackTwelve.pause();
    counter++;
    if(counter === 13) {
        counter = 1;
    }
    else {

    }
    document.getElementById("track-number").innerHTML= counter.toString();

    if(counter === 1){
        document.getElementById("track-title").innerHTML="COMING OF AGE";
    }
    else if(counter === 2) {
        document.getElementById("track-title").innerHTML="WHO'S LAUGHING NOW";
    }
    else if(counter === 3) {
        document.getElementById("track-title").innerHTML="HASTA LA VISTA BABY";
    }
    else if(counter === 4) {
        document.getElementById("track-title").innerHTML="TKO";
    }
    else if(counter === 5) {
        document.getElementById("track-title").innerHTML="WORSE FOR WEAR";
    }
    else if(counter === 6) {
        document.getElementById("track-title").innerHTML="IM FINE (NO REALLY)";
    }
    else if(counter === 7) {
        document.getElementById("track-title").innerHTML="MALL RAT";
    }
    else if(counter === 8) {
        document.getElementById("track-title").innerHTML="LITTLE BIT LONELY";
    }
    else if(counter === 9) {
        document.getElementById("track-title").innerHTML="LOSERS CLUB";
    }
    else if(counter === 10) {
        document.getElementById("track-title").innerHTML="TRAUMA QUEEN";
    }
    else if(counter === 11) {
        document.getElementById("track-title").innerHTML="SUBURBAN LEGEND";
    }
    else if(counter === 12) {
        document.getElementById("track-title").innerHTML="ENCORE";
    }
}


    const trackOne = new Audio('mp3/Coming of Age.mp3');
    const trackTwo = new Audio('mp3/Durry - Whos Laughing Now.mp3')
    const trackThree = new Audio('mp3/Hasta La Vista Baby.mp3')
    const trackFour = new Audio('mp3/TKO.mp3')
    const trackFive = new Audio('mp3/Worse For Wear.mp3')
    const trackSix = new Audio('mp3/Im Fine (No Really).mp3')
    const trackSeven = new Audio('mp3/Mall Rat.mp3')
    const trackEight = new Audio('mp3/Little Bit Lonely.mp3')
    const trackNine = new Audio('mp3/Losers Club.mp3')
    const trackTen = new Audio('mp3/Trauma Queen.mp3')
    const trackEleven = new Audio('mp3/Suburban Legend.mp3')
    const trackTwelve = new Audio('mp3/Encore.mp3')

    function playAudio() {
        const pauseBtn = document.getElementById("pause-button");
        const playBtn = document.getElementById("play-button");
        playBtn.style.display="none";
        pauseBtn.style.display="block";
        if (counter === 1) {
            trackOne.play();
        }
        else if (counter === 2) {
            trackTwo.play();
        }
        else if (counter === 3) {
            trackThree.play();
        }
        else if (counter === 4) {
            trackFour.play();
        }
        else if (counter === 5) {
            trackFive.play();
        }
        else if (counter === 6) {
            trackSix.play();
        }
        else if (counter === 7) {
            trackSeven.play();
        }
        else if (counter === 8) {
            trackEight.play();
        }
        else if (counter === 9) {
            trackNine.play();
        }
        else if (counter === 10) {
            trackTen.play();
        }
        else if (counter === 11) {
            trackEleven.play();
        }
        else if (counter === 12) {
            trackTwelve.play();
        }

    }

    function stopAudio() {
        const pauseBtn = document.getElementById("pause-button");
        const playBtn = document.getElementById("play-button");
        playBtn.style.display="block";
        pauseBtn.style.display="none";
        trackTwo.pause();
        trackOne.pause();
        trackThree.pause();
        trackFour.pause();
        trackFive.pause();
        trackSix.pause();
        trackSeven.pause();
        trackEight.pause();
        trackNine.pause();
        trackTen.pause();
        trackEleven.pause();
        trackTwelve.pause();
    }

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function scrollToBottom() {
    // Set the scroll position to the maximum height of the page
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.documentElement.scrollHeight; // For Chrome, Firefox, IE, and Opera
}
