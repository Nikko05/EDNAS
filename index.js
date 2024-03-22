var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// handle buttons with functions to swipe sliders with projects
document.querySelector('.prev-project').addEventListener('click', function() {
  swiper.slidePrev();
});

document.querySelector('.next-project').addEventListener('click', function() {
  swiper.slideNext();
});

// ----------------------------- hidden header links -----------------------------
window.addEventListener("scroll", function() {
  let header = Array.from(document.querySelectorAll(".link"));
  let hamurger = this.document.querySelector('.hamburger');

  if (window.scrollY > 10) { // Adjust the scroll position where you want to hide the links
    header.map(link => {
      link.classList.remove('is-visible');
      link.classList.add("is-hidden");
    });
  } else {
    header.map(link => {
      link.classList.remove("is-hidden");
      link.classList.add('is-visible');
    });
  }
});

// ---------------------------- autoply poster video ----------------------------
let poster = document.querySelector('.poster-to-video');
let videoContent = document.querySelector('.video-popup-content');
let player;

// Function to initialize YouTube Player API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'HN-WH7C4K0Q', // Replace with your video ID
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Play the video when player is ready
  event.target.playVideo();
}

function playVideo() {
  poster.style.display = 'none'; // Hide the poster image
  videoContent.style.display = 'block'; // Display the video container
  player.playVideo(); // Start playing the video
}

poster.addEventListener('click', playVideo);