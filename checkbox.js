//this is the JS file for the checkbox.html file

//this function is called when the checkbox is clicked

function check() {
    //get the checkbox
    var checkBox = document.getElementById("myCheck");
    //get the output text
    var text = document.getElementById("text");
    //if the checkbox is checked, display the text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}