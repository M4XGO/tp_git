//this is the JS file to sort elements of the to-do list according to date, alphabetically, or by priority
//this function is called when the sort button is clicked
function sort() {
    //get the sort button
    var sortButton = document.getElementById("sortButton");
    //get the output text
    var text = document.getElementById("text");
    //if the sort button is clicked, display the text
    if (sortButton.clicked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
