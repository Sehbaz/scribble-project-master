var signinModal = document.getElementById("signinModal");

function opensigninModal() {
    signinModal.style.display = "block";
}
var signupModal = document.getElementById("signupModal");

function opensignupModal() {
    signupModal.style.display = "block";

}

function closeSigninModal() {
    signinModal.style.display = "none";

}

function closeSignupModal() {

    signupModal.style.display = "none";
}

function redirect() {
    signinModal.style.display = "none";
    signupModal.style.display = "block";
}