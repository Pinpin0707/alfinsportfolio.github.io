// /*==== Firebase ====*/
// const firebaseConfig = {
//     apiKey: "AIzaSyAhBXE56lzgeLbVPS3wOY4ppd5J88KIhYk",
//     authDomain: "contactform-portfolio-website.firebaseapp.com",
//     databaseURL: "https://contactform-portfolio-website-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "contactform-portfolio-website",
//     storageBucket: "contactform-portfolio-website.appspot.com",
//     messagingSenderId: "497192727925",
//     appId: "1:497192727925:web:79d40497d5fa611d328f3c"
// };
// /*==== Initialize Firebase ====*/
// firebase.initializeApp(firebaseConfig);
// /*==== Reference the database ====*/
// var contactDB = firebase.database().ref('contact')

// document.getElementById('contactForm').addEventListener('submit', submitForm);

// function submitForm() {
//     e.preventDefault();

//     var name = getElementVal("name");
//     var emailid = getElementVal("emailid");
//     var msgContent = getElementVal("msgContent");

//     saveMessages(name, emailid, msgContent);

//     //   enable alert
//     document.querySelector(".alert").style.display = "block";

//     //   remove the alert
//     setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//     }, 3000);

//     //   reset the form
//     document.getElementById("contactForm").reset();
// }

// const saveMessages = (name, emailid, msgContent) => {
//     var newContactForm = contactFormDB.push();
  
//     newContactForm.set({
//       name: name,
//       emailid: emailid,
//       msgContent: msgContent,
//     });
//   };

// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// } 

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.experience-container',{interval: 200});
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});