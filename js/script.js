// Project 9 Additions
document.addEventListener("DOMContentLoaded", function() {
     // Add a click event listener for the moon icon
     var icon = document.getElementById("moon-icon");
     icon.addEventListener("click", toggleDarkMode);
     // Function to toggle dark mode
     function toggleDarkMode() {
          document.body.classList.toggle("dark-theme");
          // Change the icon based on the theme
          if(document.body.classList.contains("dark-theme")) {
               icon.src = "media/sun.png";
          } else {
               icon.src = "media/moon.png";
          }
     }
});
// End of Project 9 Additions

// Project 10 Additions
document.addEventListener("DOMContentLoaded", function() {
     const sections = document.querySelectorAll(".fade");

     function fadeIn() {
          sections.forEach(section => {
               const sectionTop = section.getBoundingClientRect().top;
               const windowHeight = window.innerHeight;
               if(sectionTop < windowHeight) {
                    section.style.opacity = 1;
                    section.style.transform = "translateY(0)";
               }
          });
     }
     fadeIn();
     document.addEventListener("scroll", fadeIn);
});
// End of Project 10 Additions


// Project 11 Additions
document.addEventListener("DOMContentLoaded", function() {
     const form = document.getElementById("contactForm");
     const nameInput = document.getElementById("name");
     const emailInput = document.getElementById("email");
     const messageInput = document.getElementById("message");
     const errorMessage = document.getElementById("error-message");
     const successMessage = document.getElementById("success-message");
     const submitBtn = document.getElementById("submitBtn");

     function validateInput(input, regex, errorMessageText) {
          if(!regex.test(input.value.trim())) {
               input.style.border = "2px solid red";
               errorMessage.textContent = errorMessageText;
               return false;
          } else {
               input.style.border = "2px solid green";
               errorMessage.textContent = "";
               return true;
          }
     }

     function validateForm() {
          const nameValid = validateInput(nameInput, /^[a-zA-Z\s]+$/, "Please enter a valid name");
          const emailValid = validateInput(emailInput, /^\S+@\S+\.\S+$/, "Please enter a valid email address");
          const messageValid = validateInput(messageInput, /^.{10,}$/, "Please enter a message with at least 10 characters");
          return nameValid && emailValid && messageValid;
     }
     form.addEventListener("submit", function(event) {
          event.preventDefault();
          if(validateForm()) {
               // Simulate form submission (replace this with your actual form submission logic)
               setTimeout(function() {
                    form.reset();
                    successMessage.textContent = "Form submitted successfully!";
               }, 500);
          }
     });
     nameInput.addEventListener("input", function() {
          validateInput(nameInput, /^[a-zA-Z\s]+$/, "Please enter a valid name");
          updateSubmitButtonState();
     });
     emailInput.addEventListener("input", function() {
          validateInput(emailInput, /^\S+@\S+\.\S+$/, "Please enter a valid email address");
          updateSubmitButtonState();
     });
     messageInput.addEventListener("input", function() {
          validateInput(messageInput, /^.{10,}$/, "Please enter a message with at least 10 characters");
          updateSubmitButtonState();
     });

     function updateSubmitButtonState() {
          submitBtn.disabled = !validateForm();
     }
});
// End of Project 11 Additions 
