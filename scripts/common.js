var signinModal = document.getElementById("signinModal");
function opensigninModal() {
    signinModal.style.display = "block";
}
var signupModal = document.getElementById("signupModal");
function opensignupModal() {
    signupModal.style.display = "block";
  
}

function closeModal() {
    signinModal.style.display = "none";
    signupModal.style.display = "none";
    createModal.style.display = "none";
}

function redirect() {
    signinModal.style.display = "none";
    signupModal.style.display = "block";
}

var createModal = document.getElementById("createModal");
function opencreateModal() {
    createModal.style.display = "block";
  
}