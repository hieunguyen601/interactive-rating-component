# interactive-rating-component
# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive Rating Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). This challenge helped me improve my skills in HTML, CSS, JavaScript, and DOM manipulation by creating a simple interactive UI component.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their screen size
- See hover states for all interactive elements
- Select and submit a rating from 1 to 5
- See a thank you message after submitting

### Links

- Solution URL: [View on Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

---

## My process

### Built with

- Semantic HTML5
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation)
- LocalStorage API

---

### What I learned

While building this project, I reinforced my knowledge of:

- How to add and remove classes dynamically using `classList`
- How to use `forEach` to loop over NodeLists
- How to store and retrieve values using `localStorage`
- Best practices for toggling UI states with JavaScript

#### Example:
```js
button.classList.add('selected');
localStorage.setItem("selectedRating", button.value);
