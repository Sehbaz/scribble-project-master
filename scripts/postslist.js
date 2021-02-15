function viewPost(object) {
    window.location = "./post.html";
}

var popupDelete = document.getElementById("popupDelete");

function popdown() {
    popupDelete.style.display = "none";

}
var temp;

function deleteconfirm() {
    document.getElementById("post" + temp).style.display = "none";
    popupDelete.style.display = "none";
}



function popup(id) {
    popupDelete.style.display = "block";
    temp = id;
}