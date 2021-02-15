var editPost = document.getElementById("editPost");
var postTitle = document.getElementById("postTitle");
var postContent = document.getElementById("postContent");

var i = 0;


function edit() {
    if (i==0) {
    console.log(editPost);
    postContent.contentEditable = true;
    postContent.style.border = "1px red solid";
        document.getElementById("editPost").innerText = "save";
        i++;
    } else {
        postContent.contentEditable = false;
        postContent.style.border = "0px red solid";
        document.getElementById("editPost").innerText = "edit";
        i--;
    }
    
}

var j = 0;

function addLike() {
    j++;
    document.getElementById("Likes").innerHTML = j+" person like this !";
}

function addComment() {
    var node = document.createElement("LI");
    var t = document.getElementById("comment").value;
    if (t!="") {
        var textnode = document.createTextNode(t);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("comment").value = "";
    }
    
}