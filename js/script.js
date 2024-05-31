const mobileMenu = document.querySelector(".mobile-menu");
const menuButton = document.querySelector(".openmenu");
const closeButton = document.querySelector(".closemenu");
const signOutButton = document.querySelector(".signOut");
const signInButton = document.querySelector(".signin");
const bookBtn = document.querySelector(".bookbtn");
const usernameInput = document.querySelector('input[name="uname"]');
const passwordInput = document.querySelector('input[name="psw"]');
var modal = document.getElementById("id01");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "visible";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = function () {
  var userName = localStorage.getItem("userName");
  var passWord = localStorage.getItem("passWord");
  if (userName && passWord) {
    signInButton.style.display = "none";
    signOutButton.style.display = "block";
    bookBtn.style.display = "block";
  }
};

function loginHandler() {

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Store data in localStorage if remember is checked

  localStorage.setItem("userName", username);
  localStorage.setItem("passWord", password);

  // Redirect to the booking page
  alert(`welcome ${username}`);
}

function signOutHandler() {
  localStorage.removeItem("userName");
  localStorage.removeItem("passWord");
  signInButton.style.display = "block";
  signOutButton.style.display = "none";
  bookBtn.style.display = "none";
  window.location.href = "index.html";
}

const bookTicketHandler = () => {
  var userName = localStorage.getItem("userName");
  var passWord = localStorage.getItem("passWord");
  if (userName && passWord) {
    window.location.href = "/BookingPage/index.html";
    return;
  }
  alert("Please Login first!");
};
