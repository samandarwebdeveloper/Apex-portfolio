// ============HAMBURGER MENU======================
var menu = document.querySelector(".hamburger-navbar");
var hamburgerButton = document.querySelector(".ham");
var menuCover = document.querySelector(".menu");

hamburgerButton.onclick = function () {
  menu.style.transform = "translateX(-200px)";
  menuCover.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == menuCover) {
    menuCover.style.display = "none";
  }
}

var courseWrapper = document.querySelector(".course-register__wrapper");
var matemButton = document.querySelector(".matem");
var fizikaButton = document.querySelector(".fizika");
var inglizButton = document.querySelector(".ingliz");
var courseCover = document.querySelector(".course-register");
var courseComplete = document.querySelector(".course-btn");
var courseCompleteWrap = document.querySelector(".course-regester__complete");
var courseCompleteBtn = document.querySelector(".course-complete__btn");

matemButton.onclick = function () {
  courseCover.style.display = "block";
}

fizikaButton.onclick = function () {
  courseCover.style.display = "block";
}

inglizButton.onclick = function () {
  courseCover.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == courseCover) {
    courseCover.style.display = "none";
  }
}

courseComplete.onclick = function() {
  courseCover.style.display = "none";
  courseCompleteWrap.style.display = "block";
}
courseCompleteBtn.onclick = function() {
  courseCompleteWrap.style.display = "none";
}

// =====================NEWS SECTION CARUESEL JS================================
const newsButtonsWrapper = document.querySelector(".news-buttons");
const newsSlides = document.querySelector(".news-section__list");


newsButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(newsButtonsWrapper.children).forEach(item =>
      item.classList.remove("scroll-btn--active")
    );
    if (e.target.classList.contains("first")) {
        newsSlides.style.transform = "translateX(-0%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains("second")) {
        newsSlides.style.transform = "translateX(-36%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains('third')){
        newsSlides.style.transform = 'translatex(-72%)';
      e.target.classList.add('scroll-btn--active');
    }
  }
});


// =====================COURSES SECTION CARUESEL JS================================
const coursesButtonsWrapper = document.querySelector(".courses-caruesel__btn");
const coursesSlides = document.querySelector(".courses-section__list");

coursesButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(coursesButtonsWrapper.children).forEach(item =>
      item.classList.remove("scroll-btn--active")
    );
    if (e.target.classList.contains("courses-first")) {
      coursesSlides.style.transform = "translateX(-0%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains("courses-second")) {
      coursesSlides.style.transform = "translateX(-35%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains('courses-third')){
      coursesSlides.style.transform = 'translatex(-68%)';
      e.target.classList.add('scroll-btn--active');
    }
  }
});

// =====================TEACHERS SECTION CARUESEL JS================================
const teachersButtonsWrapper = document.querySelector(".teachers-caruesel__btn");
const teachersSlides = document.querySelector(".teachers-section__list");

teachersButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(teachersButtonsWrapper.children).forEach(item =>
      item.classList.remove("scroll-btn--active")
    );
    if (e.target.classList.contains("teachers-first")) {
      teachersSlides.style.transform = "translateX(-0%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains("teachers-second")) {
      teachersSlides.style.transform = "translateX(-33.9%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains('teachers-third')){
      teachersSlides.style.transform = 'translatex(-68%)';
      e.target.classList.add('scroll-btn--active');
    }
  }
});

// =====================LESSONS VIDEOS SECTION CARUESEL JS================================
const lessonsVideosButtonsWrapper = document.querySelector(".lessons-videos-caruesel__btn");
const lessonsVideosSlides = document.querySelector(".lessons-videos__list");

lessonsVideosButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(lessonsVideosButtonsWrapper.children).forEach(item =>
      item.classList.remove("scroll-btn--active")
    );
    if (e.target.classList.contains("lessons-videos-first")) {
      lessonsVideosSlides.style.transform = "translateX(-0%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains("lessons-videos-second")) {
      lessonsVideosSlides.style.transform = "translateX(-33.9%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains('lessons-videos-third')){
      lessonsVideosSlides.style.transform = 'translatex(-68%)';
      e.target.classList.add('scroll-btn--active');
    }
  }
});


// =====================PUPILS SECTION CARUESEL JS================================
const pupilsButtonsWrapper = document.querySelector(".pupils-caruesel__btn");
const pupilsVideosSlides = document.querySelector(".students-results__list");

pupilsButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(pupilsButtonsWrapper.children).forEach(item =>
      item.classList.remove("scroll-btn--active")
    );
    if (e.target.classList.contains("pupils-first")) {
      pupilsVideosSlides.style.transform = "translateX(-0%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains("pupils-second")) {
      pupilsVideosSlides.style.transform = "translateX(-33.9%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains('pupils-third')){
      pupilsVideosSlides.style.transform = 'translatex(-68%)';
      e.target.classList.add('scroll-btn--active');
    }
  }
});


// =====================CLIENTS SECTION CARUESEL JS================================
const clientsButtonsWrapper = document.querySelector(".clients-caruesel__btn");
const clientsVideosSlides = document.querySelector(".clients-section__list");

clientsButtonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(clientsButtonsWrapper.children).forEach(item =>
      item.classList.remove("scroll-btn--active")
    );
    if (e.target.classList.contains("clients-first")) {
      clientsVideosSlides.style.transform = "translateX(-0%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains("clients-second")) {
      clientsVideosSlides.style.transform = "translateX(-33.9%)";
      e.target.classList.add("scroll-btn--active");
    } else if (e.target.classList.contains('clients-third')){
      clientsVideosSlides.style.transform = 'translatex(-68%)';
      e.target.classList.add('scroll-btn--active');
    }
  }
});
