 // Show loader on page load
 window.onload = function() {
    document.getElementById("loader").style.display = "none"; 
};

// typing text auto

const texts = ["Frontend Developer", "Backend Developer" ,"Full Stack Java Developer", "Web Designer","Gamer" ,"Youtuber"]; // Array of texts to type
        const typingTextElement = document.getElementById("typing-text");
        let textIndex = 0;
        let charIndex = 0; 

        function type() {
            if (charIndex < texts[textIndex].length) {
                typingTextElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 80); 
            } else {
                setTimeout(erase, 1000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length; 
                setTimeout(type, 500);
            }
        }

        type(); 
        document.querySelectorAll('.circular-skill').forEach(skill => {
            const percent = skill.getAttribute('data-percent');
            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            const progressCircle = skill.querySelector('.progress');
        
            // Set the initial state to 0%
            progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            progressCircle.style.strokeDashoffset = circumference; // Start from full circumference
        
            // Start the animation to the desired percentage
            setTimeout(() => {
                progressCircle.style.transition = 'stroke-dashoffset 1s ease-in-out';
                progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference; // Animate to the desired percentage
            }, 100);
        });