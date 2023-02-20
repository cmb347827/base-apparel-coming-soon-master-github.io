# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
- The `input` field is empty
- The email address is not formatted correctly

### Screenshot

![Screenshot](https://i.postimg.cc/Ls6Cnr7V/screenshot.png)


### Links

- Solution URL: [Github](https://github.com/cmb347827/base-apparel-coming-soon-master-github.io)
- Live Site URL: [Live Github](https://cmb347827.github.io/base-apparel-coming-soon-master-github.io/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap
- Sass/SCSS
- Javascript
- Mobile-first workflow


### What I learned

- No matter what I tried , when I added a `<div></div>` around the form and top image, in order to be able to apply `d-flex flex-xxl-column` in desktop view, then it would mess up the top logo image and form alignment (by order) in mobile.

- If I don't add the `<div></div>` around the form and top logo image, the order is correct in mobile, but then I can't get the form and top logo image to verticaly align in desktop.

- In the end I decided to make use of the display property : `display: none` to hide the desktop code when in mobile view, and to hide the mobile code when in desktop view.

- I also remembered the use of `strict mode;` in Javascript. Something I had used in the past as essential error checking, and is still needed and used today.

- Also how to override the default Bootstrap button css and how to override the default input field border when it receives the focus.

- I also needed to reset the form after the submit button is pressed , which led me to the form `reset()` function

- The use of `addEventListener()` on multiple elements with the same class 


### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascrip (plus some JQuery), Bootstrap, Sass/SCSS. For now. In time I will go re-learn React ect.

### Useful resources

- [Change Bootstrap Button Color with Classes or Variables](https://smartdevpreneur.com/change-bootstrap-button-color-with-classes-or-variables/) - To change default Bootstrap button CSS.

- [Form reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset) -  The HTMLFormElement.reset() method restores a form element's default values. 

- [Want to add addEventListener to multiple elements](https://stackoverflow.com/questions/51573435/want-to-add-addeventlistener-on-multiple-elements-with-same-class) - Use querySelectorAll

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

