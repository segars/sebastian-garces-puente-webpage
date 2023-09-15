import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();


const images = document.querySelectorAll('.image-gallery img');
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('siguiente');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);