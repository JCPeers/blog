const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
  makeBodyDark();
  makeTopNavDark();
  makeNavSubjectDark();
  makeNavSubjectsDark();
  makeMainTitleDark();
  makeCodeImageTextDark();
  makeCodeImageDark();
  makeCodingLinkJourneyDark();
  makeSmallLinkDark();
  makeFooterNameDark();
});

function makeBodyDark() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

function makeTopNavDark() {
  const topNav = document.getElementsByClassName("topnav");
  topNav[0].classList.toggle("dark-mode");
}

function makeNavSubjectDark() {
  const navSubject = document.getElementsByClassName("nav-subject");
  navSubject[0].classList.toggle("dark-mode-text");
}

function makeNavSubjectsDark() {
  const navSubjects = document.getElementsByClassName("nav-subjects");

  for (let i = 0; i < navSubjects.length; i++) {
    navSubjects[i].classList.toggle("dark-mode-text");
  }
}
function makeMainTitleDark() {
  const mainTitle = document.getElementsByClassName("main-title");
  mainTitle[0].classList.toggle("dark-mode-text");
}

function makeCodeImageTextDark() {
  const codeImageText = document.getElementsByClassName("code-image-text");
  codeImageText[0].classList.toggle("dark-mode-text");
}

function makeCodeImageDark() {
  const codeImage = document.getElementsByClassName("code-image");
  codeImage[0].classList.toggle("dark-mode-image");
}

function makeCodingLinkJourneyDark() {
  const codingJourneyLink = document.getElementsByClassName(
    "coding-journey-link"
  );
  codingJourneyLink[0].classList.toggle("dark-mode-text");
}

function makeSmallLinkDark() {
  const smallLink = document.getElementsByClassName("small-link");
  for (let i = 0; i < smallLink.length; i++) {
    smallLink[i].classList.toggle("dark-mode-text");
  }
}

function makeFooterNameDark() {
  const footerName = document.getElementsByClassName("footer-name");
  footerName[0].classList.toggle("dark-mode-text");
}
