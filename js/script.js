// page loader 

// Minimum display time for loader in milliseconds (3 seconds)
const minimumLoaderTime = 3000;

window.addEventListener('load', function() {
  const loader = document.querySelector('.page_loader');

  // Get the current time when the page starts loading
  const startTime = Date.now();

  // Ensure loader shows for at least 3 seconds
  setTimeout(() => {
    // Check if the page has fully loaded
    const timeElapsed = Date.now() - startTime;

    if (timeElapsed >= minimumLoaderTime) {
      hideLoader(); // Hide loader immediately after 3 seconds
    } else {
      // If page loads before 3 seconds, wait for the remaining time
      setTimeout(hideLoader, minimumLoaderTime - timeElapsed);
    }
  }, minimumLoaderTime);

  // Function to hide loader (set opacity to 0 and disable pointer events)
  function hideLoader() {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none'; // Make it non-interactive

    // No need to use display: none; we just let it fade out with opacity
  }
});


// get to top btn

// Get the button element
const getToTopBtn = document.querySelector(".get_to_top_btn");

// Add a scroll event listener
window.addEventListener("scroll", function () {
  // Check if the page has been scrolled more than 40px
  if (window.scrollY > 200) {
    getToTopBtn.classList.remove("opacity-0"); // Show the button
    getToTopBtn.classList.remove("pointer-events-none"); // Show pointer-events-initial
  } else {
    getToTopBtn.classList.add("opacity-0"); // Hide the button
    getToTopBtn.classList.add("pointer-events-none"); // Hide pointer-events-initial

  }
});

const header = document.querySelector("header");

// Add a scroll event listener
window.addEventListener("scroll", function () {
  // Check if the page has been scrolled more than 40px
  if (window.scrollY > 100) {
    header.classList.add("bg-zinc-900"); // Show pointer-events-initial
  } else {
    header.classList.remove("bg-zinc-900");  // Hide pointer-events-initial
  }
});




// nav active link

let nav = document.querySelectorAll("ul li a");

nav.forEach( (active)=>{
  active.addEventListener("click", ()=>{
    remove_active_btn();
    active.classList.add("active_btn");
  });
});

function remove_active_btn(){
  nav.forEach( (active)=>{
    active.classList.remove("active_btn");
  })
}

// menu slider function

let menu_slider_val = true;
function menu_slider(){
    // let menu_btn = document.querySelectorAll(".menu_slider_icon");

    if(menu_slider_val){
        document.querySelector(".menu_slider_container").classList.add("left-0");
        menu_slider_val = false;
        console.log(menu_slider_val);
    }
}

function close_menu_slider(){
    // let menu_slider = true;
    if(menu_slider_val == false){
        document.querySelector(".menu_slider_container").classList.remove("left-0");
        menu_slider_val = true;
        console.log(menu_slider_val);
    }
}




// form validation 

function validateForm(event) {
    // Prevent form submission
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
  
    let isValid = true;
  
    // Validate Name
    if (name.length < 5) {
      nameError.classList.remove('hidden');
      isValid = false;
    } else {
      nameError.classList.add('hidden');
    }
  
    // Validate Email (basic regex pattern for email validation)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      emailError.classList.remove('hidden');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
    }
  
    // Validate Message
    if (message.length < 10) {
      messageError.classList.remove('hidden');
      isValid = false;
    } else {
      messageError.classList.add('hidden');
    }
  
    // Submit form if valid
    if (isValid) {
      document.getElementById('contactForm').submit();
    }
  }
