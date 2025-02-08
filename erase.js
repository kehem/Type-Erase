// typewriter.js

(function() {
    // Function to initialize and trigger the typing and erasing effect
    function typeAndErase() {
        const eraseElements = document.querySelectorAll('.erase');
        let currentIndex = 0;
        let typing = true;
        let textIndex = 0;

        function typeAndEraseCycle() {
            const currentElement = eraseElements[currentIndex];
            const textContent = currentElement.getAttribute("data-text");

            if (typing) {
                // Typing effect
                if (textIndex < textContent.length) {
                    currentElement.textContent = textContent.substring(0, textIndex + 1);
                    textIndex++;
                    setTimeout(typeAndEraseCycle, 150); // Adjust typing speed
                } else {
                    typing = false;
                    setTimeout(typeAndEraseCycle, 2000); // Wait before erasing
                }
            } else {
                // Erasing effect
                if (textIndex > 0) {
                    currentElement.textContent = textContent.substring(0, textIndex - 1);
                    textIndex--;
                    setTimeout(typeAndEraseCycle, 100); // Adjust erasing speed
                } else {
                    typing = true;
                    currentIndex = (currentIndex + 1) % eraseElements.length;
                    setTimeout(typeAndEraseCycle, 500); // Wait before typing the next word
                }
            }
        }

        typeAndEraseCycle(); // Start the typing effect
    }

    // Expose function to be used externally
    window.initializeTypewriter = typeAndErase;
})();
