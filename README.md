# Typewriter Effect (JavaScript)

This is a JavaScript function that provides a typewriter effect for text. It types and erases words sequentially, and can be used by including the script in your HTML file.

## How to Use

### 1. Include the JavaScript File

You can include the `erase.js` file in your HTML by linking it to a hosted version. For example, if you are hosting it on GitHub Pages or any other server, use the following link:

```html
<script src="https://your-hosted-link/typewriter.js"></script>
```
### 2. Add HTML Elements
Add the HTML structure with span elements that have the class erase and a data-text attribute with the content you want to type and erase.

```
<div id="typewriter">
    <h2>How are you <span class="erase" data-text="Freelancer"></span><span class="erase" data-text="Django"></span></h2>
</div>
```
### 3. Initialize the Typewriter Effect
After including the JavaScript file in your HTML, call the initializeTypewriter() function to start the typing effect. Add this to the bottom of your HTML file:

```
<script>
    // Initialize the typewriter effect
    initializeTypewriter();
</script>
```
Customization
Typing Speed: You can adjust the typing speed by changing the setTimeout(typeAndEraseCycle, 150) value in typewriter.js.
Erasing Speed: Adjust the erasing speed by changing setTimeout(typeAndEraseCycle, 100) in typewriter.js.
Pause Time: Modify the pause time after typing by changing setTimeout(typeAndEraseCycle, 2000).
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

Author
KEHEM IT
