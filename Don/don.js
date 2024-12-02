document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username); // Debugging line
    console.log('Password:', password); // Debugging line

    if (username === 'DON' && password === 'don') {
        console.log('Login successful'); // Debugging line
        window.location.href = 'home.html'; // Redirect to the homepage
    } else {
        console.log('Login failed'); // Debugging line
        alert('Invalid username or password');
    }
});
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic slideshow
setInterval(function() {
    plusSlides(1);
}, 2000); // Change image every 2 seconds
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var contentUrl = this.getAttribute('data-content');
        fetch(contentUrl)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content-area').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    });
});






