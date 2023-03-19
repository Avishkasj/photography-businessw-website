function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  
  // Event listener for form submission
  document.getElementById("contact-form").addEventListener("submit", submitForm);
  
  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent default form behavior
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var eventDate = document.getElementById("event-date").value;
    var eventLocation = document.getElementById("event-location").value;
    var eventType = document.getElementById("event-type").value;
    var message = document.getElementById("message").value;
  
    // Do something with form data (e.g. send to server via AJAX)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Date of Event: " + eventDate);
    console.log("Location of Event: " + eventLocation);
    console.log("Type of Event: " + eventType);
    console.log("Message: " + message);
  
    // Reset form values
    document.getElementById("contact-form").reset();
  
    // Show success message
    document.getElementById("success-message").style.display = "block";
  }