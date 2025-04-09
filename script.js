// DOM Elements
const changeableText = document.getElementById('changeable-text');
const changeTextBtn = document.getElementById('change-text-btn');
const styleDemo = document.getElementById('style-demo');
const toggleStyleBtn = document.getElementById('toggle-style-btn');
const elementContainer = document.getElementById('element-container');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const currentYear = document.getElementById('current-year');
const mainTitle = document.getElementById('main-title');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();

    // Change text content
    changeTextBtn.addEventListener('click', changeTextContent);

    // Style manipulation
    toggleStyleBtn.addEventListener('click', toggleDarkMode);
    styleDemo.addEventListener('mouseover', () => {
        styleDemo.style.transform = 'scale(1.05)';
        styleDemo.style.backgroundColor = '#e74c3c';
    });
    styleDemo.addEventListener('mouseout', () => {
        styleDemo.style.transform = 'scale(1)';
        styleDemo.style.backgroundColor = '#2ecc71';
    });

    // Element manipulation
    addElementBtn.addEventListener('click', addElement);
    removeElementBtn.addEventListener('click', removeElement);

    // Bonus: Typewriter effect on title
    typeWriterEffect(mainTitle, "DOM Manipulation Workshop", 0);
});

// Function to change text content dynamically
function changeTextContent() {
    const texts = [
        "The text has been changed!",
        "JavaScript is powerful!",
        "DOM manipulation is fun!",
        "You can create dynamic websites!",
        "Keep learning and coding!"
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    changeableText.textContent = texts[randomIndex];
    
    // Add visual feedback
    changeableText.style.color = '#e74c3c';
    setTimeout(() => {
        changeableText.style.color = '';
    }, 500);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleStyleBtn.textContent = 'Toggle Light Mode';
    } else {
        toggleStyleBtn.textContent = 'Toggle Dark Mode';
    }
}

// Function to add a new element
function addElement() {
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-element';
    const elementCount = elementContainer.querySelectorAll('.dynamic-element').length + 1;
    newElement.textContent = `This is dynamic element #${elementCount}`;
    elementContainer.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const elements = elementContainer.querySelectorAll('.dynamic-element');
    if (elements.length > 0) {
        const lastElement = elements[elements.length - 1];
        lastElement.style.animation = 'fadeIn 0.5s ease reverse';
        setTimeout(() => {
            elementContainer.removeChild(lastElement);
        }, 450);
    } else {
        alert('No more elements to remove!');
    }
}

// Bonus: Typewriter effect function
function typeWriterEffect(element, text, i) {
    if (i < text.length) {
        element.textContent = text.substring(0, i + 1);
        setTimeout(() => typeWriterEffect(element, text, i + 1), 100);
    }
}