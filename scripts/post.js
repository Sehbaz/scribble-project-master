var editPost = document.getElementById("editPost");
var postTitle = document.getElementById("postTitle");
var postContent = document.getElementById("postContent");

var i = 0;



function edit() {
    if (i == 0) {
        console.log(editPost);
        postContent.contentEditable = true;
        postTitle.contentEditable = true;
        postContent.style.border = "1px #ff0a54 solid";
        postTitle.style.border = "1px #ff0a54 solid";
        document.getElementById("editPost").innerText = "save";
        changeIcon();

        i++;
    } else {
        postContent.contentEditable = false;
        postTitle.contentEditable = false;
        postContent.style.border = "0px red solid";
        postTitle.style.border = "0px #ff0a54 solid";
        document.getElementById("editPost").innerText = "edit";
        document.getElementById("update-title").innerText = "UPDATED :";
        document.getElementById("update-content").innerText = "UPDATED :";
        changeIcon();
        i--;
    }

}

function changeIcon() {
    var x = document.getElementById("MyElement").classList[1];
    if (x == "fa-save") {
        document.getElementById("MyElement").classList.remove('fa-save');
        document.getElementById("MyElement").classList.add('fa-edit');

    } else {
        document.getElementById("MyElement").classList.remove('fa-edit');
        document.getElementById("MyElement").classList.add('fa-save');
    }

}




var j = 0;

function addLike() {
    j++;
    document.getElementById("Likes").innerHTML = j + " person like this !";
    changeText();
}

function changeText() {
    document.getElementById("likeBtn").innerHTML = "Liked";

}

function addComment() {

    var node = document.createElement("LI");
    var t = document.getElementById("comment").value;
    if (t != "") {
        document.getElementById("myList").style.display = "block";
        var textnode = document.createTextNode(t);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        document.getElementById("comment").value = "";
    }

}