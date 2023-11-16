
// Project 9 Additions

  document.addEventListener("DOMContentLoaded", function () {
  // Add a click event listener for the moon icon
  var icon = document.getElementById("moon-icon");
  icon.addEventListener("click", toggleDarkMode);

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");

    // Change the icon based on the theme
    if (document.body.classList.contains("dark-theme")) {
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

            if (sectionTop < windowHeight) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    fadeIn();

    document.addEventListener("scroll", fadeIn);
});


// End of Project 10 Additions