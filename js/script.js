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


// payment form open and close

const open_payment_form_section = document.querySelector(".userdata_price_form");
const close_form_icon = document.querySelector(".close_form_icon");

let payment_form = true;
function Open_payment_form(){
  if(payment_form){
    open_payment_form_section.classList.remove("opacity-0");
    open_payment_form_section.classList.remove("pointer-events-none");
    payment_form = false;
  }
}

function close_payment_form(){
  if(payment_form == false){
  open_payment_form_section.classList.add("opacity-0");
    open_payment_form_section.classList.add("pointer-events-none");
    payment_form = true;
  }
}


// document.getElementById('myForm').addEventListener('submit', function(e) {
//   let isValid = true;

//   // Name Validation (minimum 5 characters)
//   const name = document.getElementById('name');
//   const nameError = document.getElementById('nameError');
//   if (name.value.length < 5) {
//     nameError.textContent = "Name must be at least 5 characters long.";
//     name.classList.add('error-border');
//     isValid = false;
//   } else {
//     nameError.textContent = "";
//     name.classList.remove('error-border');
//   }

//   // Phone Validation (minimum 10 digits)
//   const phone = document.getElementById('phone');
//   const phoneError = document.getElementById('phoneError');
//   if (phone.value.length < 10 || phone.value.length > 10) {
//     phoneError.textContent = "Phone number must be exactly 10 digits.";
//     phone.classList.add('error-border');
//     isValid = false;
//   } else {
//     phoneError.textContent = "";
//     phone.classList.remove('error-border');
//   }

//   // Email Validation
//   const email = document.getElementById('email');
//   const emailError = document.getElementById('emailError');
//   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!emailPattern.test(email.value)) {
//     emailError.textContent = "Please enter a valid email address.";
//     email.classList.add('error-border');
//     isValid = false;
//   } else {
//     emailError.textContent = "";
//     email.classList.remove('error-border');
//   }

//   // Address Validation (minimum 10 characters)
//   const address = document.getElementById('address');
//   const addressError = document.getElementById('addressError');
//   if (address.value.length < 10) {
//     addressError.textContent = "Address must be at least 10 characters long.";
//     address.classList.add('error-border');
//     isValid = false;
//   } else {
//     addressError.textContent = "";
//     address.classList.remove('error-border');
//   }

//   // Amount Validation (1999, 3999, or 6999)
//   const amount = document.getElementById('amount');
//   const amountError = document.getElementById('amountError');
//   if (![1999, 3999, 6999].includes(parseInt(amount.value))) {
//     amountError.textContent = "Amount must be 1999, 3999, or 6999.";
//     amount.classList.add('error-border');
//     isValid = false;
//   } else {
//     amountError.textContent = "";
//     amount.classList.remove('error-border');
//   }

//   // Prevent form submission if not valid
//   if (!isValid) {
//     e.preventDefault();
//   }
// });




// const header = document.querySelector("header");

// // Add a scroll event listener
// window.addEventListener("scroll", function () {
//   // Check if the page has been scrolled more than 40px
//   if (window.scrollY > 100) {
//     header.classList.add("bg-zinc-900"); // Show pointer-events-initial
//   } else {
//     header.classList.remove("bg-zinc-900");  // Hide pointer-events-initial
//   }
// });




// nav active link

document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  let isValid = true;

  // Name Validation (minimum 5 characters)
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (name.value.length < 5) {
    nameError.textContent = "Name must be at least 5 characters long.";
    name.classList.add('error-border');
    isValid = false;
  } else {
    nameError.textContent = "";
    name.classList.remove('error-border');
  }

  // Phone Validation (minimum 10 digits)
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  if (phone.value.length !== 10) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    phone.classList.add('error-border');
    isValid = false;
  } else {
    phoneError.textContent = "";
    phone.classList.remove('error-border');
  }

  // Email Validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    email.classList.add('error-border');
    isValid = false;
  } else {
    emailError.textContent = "";
    email.classList.remove('error-border');
  }

  // Address Validation (minimum 10 characters)
  const address = document.getElementById('address');
  const addressError = document.getElementById('addressError');
  if (address.value.length < 10) {
    addressError.textContent = "Address must be at least 10 characters long.";
    address.classList.add('error-border');
    isValid = false;
  } else {
    addressError.textContent = "";
    address.classList.remove('error-border');
  }

  // Amount Validation (1999, 3999, or 6999)
  const amount = document.getElementById('amount');
  const amountError = document.getElementById('amountError');
  if (![1999, 3999, 6999].includes(parseInt(amount.value))) {
    amountError.textContent = "Amount must be 1999, 3999, or 6999.";
    amount.classList.add('error-border');
    isValid = false;
  } else {
    amountError.textContent = "";
    amount.classList.remove('error-border');
  }

  // If all fields are valid, proceed to redirect to WhatsApp
  if (isValid) {
    const phoneNumber = "916388402421"; // Replace with your WhatsApp number
    const message = `Name: ${name.value}%0APhone: ${phone.value}%0AEmail: ${email.value}%0AAddress: ${address.value}%0AAmount: ${amount.value}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
});


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
