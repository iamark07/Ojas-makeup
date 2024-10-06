// page loader 

// // Minimum display time for loader in milliseconds (3 seconds)
// const minimumLoaderTime = 3000;

// window.addEventListener('load', function() {
//   const loader = document.querySelector('.page_loader');

//   // Get the current time when the page starts loading
//   const startTime = Date.now();

//   // Ensure loader shows for at least 3 seconds
//   setTimeout(() => {
//     // Check if the page has fully loaded
//     const timeElapsed = Date.now() - startTime;

//     if (timeElapsed >= minimumLoaderTime) {
//       hideLoader(); // Hide loader immediately after 3 seconds
//     } else {
//       // If page loads before 3 seconds, wait for the remaining time
//       setTimeout(hideLoader, minimumLoaderTime - timeElapsed);
//     }
//   }, minimumLoaderTime);

//   // Function to hide loader (set opacity to 0 and disable pointer events)
//   function hideLoader() {
//     loader.style.opacity = '0';
//     loader.style.pointerEvents = 'none'; // Make it non-interactive

//     // No need to use display: none; we just let it fade out with opacity
//   }
// });


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


// book your event form

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

  // Phone Validation (minimum 10 digits, maximum 13 digits)
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^[0-9]{10,13}$/; // Only allows numbers between 10-13 digits
  if (!phonePattern.test(phone.value)) {
      phoneError.textContent = "Phone number must be between 10 and 13 digits.";
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

  // If all fields are valid, proceed to redirect to WhatsApp
  if (isValid) {
      const phoneNumber = "919795970589"; // Replace with your WhatsApp number
      const message = `Name: ${name.value}%0APhone: ${phone.value}%0AEmail: ${email.value}%0AAddress: ${address.value}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(whatsappUrl, '_blank');
  }
});



// header nav active class function

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




// contact form validation 

function validateForm(events) {
  // Prevent form submission
  events.preventDefault();

  // Get form values
  const form_name = document.getElementById('form_name').value.trim();
  const form_email = document.getElementById('form_email').value.trim();
  const form_message = document.getElementById('form_message').value.trim();

  // Get error message elements
  const form_nameError = document.getElementById('form_nameError');
  const form_emailError = document.getElementById('form_emailError');
  const form_messageError = document.getElementById('form_messageError');

  let isValid = true;

  // Clear existing error messages
  form_nameError.classList.add('hidden');
  form_emailError.classList.add('hidden');
  form_messageError.classList.add('hidden');

  // Validate Name
  if (form_name.length < 5) {
    form_nameError.classList.remove('hidden');
    isValid = false;
  }

  // Validate Email
  const form_emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!form_emailPattern.test(form_email)) {
    form_emailError.classList.remove('hidden');
    isValid = false;
  }

  // Validate Message
  if (form_message.length < 10) {
    form_messageError.classList.remove('hidden');
    isValid = false;
  }

  // Submit form if valid
  if (isValid) {
    const form_whatsappMessage = `Name: ${form_name}\nEmail: ${form_email}\nMessage: ${form_message}`;
    const form_whatsappNumber = '918002159996'; // Replace with your WhatsApp number
    const form_whatsappUrl = `https://api.whatsapp.com/send?phone=${form_whatsappNumber}&text=${encodeURIComponent(form_whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(form_whatsappUrl, '_blank');
    alert('Message sent to WhatsApp!');
  }
}





// // plan section qrcode img function

// function showQrPlan(plan) {
//   const qrImage = document.getElementById('qrImage');
//   const planQr = document.querySelector('.plan_qr');
  
//   // Set QR image source based on the selected plan
//   switch(plan) {
//     case 'silver':
//       qrImage.src = 'assets/img/qrcode.png'; // Replace with your silver QR code image path
//       break;
//     case 'vip':
//       qrImage.src = 'assets/img/qrcode.png'; // Replace with your VIP QR code image path
//       break;
//     case 'gold':
//       qrImage.src = 'assets/img/qrcode.png'; // Replace with your gold QR code image path
//       break;
//   }

//   // Show QR plan
//   planQr.style.opacity = '1';
//   planQr.style.pointerEvents = 'initial';
// }

// function closePlanQr() {
//   const planQr = document.querySelector('.plan_qr');

//   // Hide QR plan
//   planQr.style.opacity = '0';
//   planQr.style.pointerEvents = 'none';
// }