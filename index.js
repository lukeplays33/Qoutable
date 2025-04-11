import { PichaiUX } from 'https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX/imports.js';

let pichai = new PichaiUX(options);
pichai.initialize();

document.body.style.removeProperty('background-image'); // remove the background color to make it transparent

let refreshButton = document.getElementById('refresh');

function randomQoute() { // gives the contrast checker a random qoute.
    fetch('https://quotes-api-self.vercel.app/quote')
        .then(response => response.json())
        .then(data => {
            // Handle the retrieved quote
            document.title = data.quote;

            document.getElementById('qoute').innerHTML = '<b>' + data.quote + '</b> ~ ' + data.author + ' ~ ';
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });

}

randomQoute();

refreshButton.addEventListener('click', function () {
    refreshButton.classList.add('rotating');
    randomQoute();
});

refreshButton.addEventListener('animationend', function () {
    refreshButton.classList.remove('rotating');
});

window.setInterval(function () {
    randomQoute();
}, 60000); // refresh every 10 seconds