// Select popup container, upload container, and the plus button
var popupcontainer = document.querySelector(".popupcontainer");
var uploadcontainer = document.querySelector(".upload-container");
var plusbtn = document.querySelector(".plusbtn");

plusbtn.addEventListener("click", function() {
    popupcontainer.style.display = "block";
    uploadcontainer.style.display = "block";
});

// Select cancel and save buttons
var save = document.getElementById("savebtn");
var cancle = document.getElementById("canclebtn");

// Close the popup when cancel is clicked
cancle.addEventListener("click", function(event) {
    event.preventDefault();
    popupcontainer.style.display = "none";
    uploadcontainer.style.display = "none";
});

// Select form input elements
var savebtn = document.getElementById("savebtn");
var inputtitle = document.getElementById("input-title");
var inputauthor = document.getElementById("input-author");
var textareadescription = document.getElementById("textarea-descrption");

// Save the new content when the save button is clicked
savebtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a new div for the content
    var div = document.createElement("div");
    div.setAttribute("class", "inputcontainer");

    // Add the content to the new div
    div.innerHTML = `
        <h2>${inputtitle.value}</h2>
        <h4>${inputauthor.value}</h4>
        <p>${textareadescription.value}</p>
        <button onclick="deletecontent(event)">Delete</button>
    `;

    // Append the new content div to the body or another container
    document.body.appendChild(div); // Appending directly to the body

    // Hide the popup and reset the form
    popupcontainer.style.display = "none";
    uploadcontainer.style.display = "none";
    
    // Clear the input fields after saving
    inputtitle.value = '';
    inputauthor.value = '';
    textareadescription.value = '';
});

// Function to delete content when the delete button is clicked
function deletecontent(event) {
    event.target.parentElement.remove();
}
