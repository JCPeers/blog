const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // const header = document.getElementsByTagName("header");
  // header[0].classList.toggle("dark-mode");

  const topNav = document.getElementsByClassName("topnav");
  topNav[0].classList.toggle("dark-mode");

  const navSubject = document.getElementsByClassName("nav-subject");
  navSubject[0].classList.toggle("dark-mode-text");

  const navSubjects = document.getElementsByClassName("nav-subjects");
  navSubjects[0].classList.toggle("dark-mode-text");
  navSubjects[1].classList.toggle("dark-mode-text");
  navSubjects[2].classList.toggle("dark-mode-text");
  navSubjects[3].classList.toggle("dark-mode-text");

  const mainTitle = document.getElementsByClassName("main-title");
  mainTitle[0].classList.toggle("dark-mode-text");

  const codeImageText = document.getElementsByClassName("code-image-text");
  codeImageText[0].classList.toggle("dark-mode-text");

  const codingJourneyLink = document.getElementsByClassName(
    "coding-journey-link"
  );
  codingJourneyLink[0].classList.toggle("dark-mode-text");

  const smallLink = document.getElementsByClassName("small-link");
  smallLink[0].classList.toggle("dark-mode-text");
  smallLink[1].classList.toggle("dark-mode-text");
  smallLink[2].classList.toggle("dark-mode-text");
  smallLink[3].classList.toggle("dark-mode-text");

  const footerName = document.getElementsByClassName("footer-name");
  footerName[0].classList.toggle("dark-mode-text");
});
