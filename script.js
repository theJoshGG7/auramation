// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to your server
    console.log('Form submitted:', { name, email, message });
    
    // Reset form
    this.reset();
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');
});

// Intersection Observer for animation triggers
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Observe all price cards
document.querySelectorAll('.price-card').forEach(card => {
    observer.observe(card);
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.circle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        circle.style.transform = `translate(${x}px, ${y}px) scale(${circle.style.scale || 1})`;
    });
});