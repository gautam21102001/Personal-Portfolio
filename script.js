// ************************ toggle icon navbar**********************

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ************************scroll sections active link**********************

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href"=' + id + ']').classList.add('active');
            });
        };
    });



   // ************************ sticky navbar **********************

       let header = document.querySelector('header');

       header.classList.toggle('sticky', window.scrollY > 100);



   // ************************remove toggle icon navbar when click navbar link(scroll)**********************

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');


};

// ************************ scroll reveal **********************

ScrollReveal({
    // reset: true,
    distace: '80px',
    duration: 2000,
    delay: 200
}

);

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

// ************************ typed js **********************

const typed = new Typed('.multiple-text', {
    strings:['Linux System Administrator','Oracle DBA','DevOps Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ************************ go to social platform by onclick **********************

var button = document.getElementById('gotolinkedin');
button.onclick = function() {
    location.assign('https://www.linkedin.com/feed/');
}


var button = document.getElementById('gotofb');
button.onclick = function() {
    location.assign('https://www.facebook.com/profile.php?id=100071141442825');
}

var button = document.getElementById('gotoinsta');
button.onclick = function() {
    location.assign('https://www.instagram.com/rohitgautam9711');
}

var button = document.getElementById('gototwitter');
button.onclick = function() {
    location.assign('https://twitter.com/RohitG2112');
}





function SendMail() {
    var params = {
        from_name : document.getElementById("from_name").Value,
        email_id : document.getElementById("email_id").Value,
        phone_no : document.getElementById("phone_no").Value,
        subject : document.getElementById("subject").Value,
        message : document.getElementById("message").Value
    }
    emailjs.send("service_19xmk4h", "template_v5zuuhi", params).then(function (res) {
        alert("Success! " + res.status);
    })
}