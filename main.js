const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
const imageUrls = [];
/* Declaring the alternative text for each image file */
const imageAltText = ["pictures 1", "pictures 2", "pictures 3", "pictures 4", "pictures 5"];
const ImagePath = "images/";

/* Looping through images */
window.onload = function () {
    console.log("window loaded");
    const url = document.location.origin + "/ImageCarousel/images/";
    for (let i = 1; i <= 10; i++) {
        imageUrls.push(url + 'picture' + i + '.jpg');
    }
    imageUrls.forEach((url, index) => {
        fetch(url, {method: 'HEAD'})
            .then(response => {
                if (response.ok) {
                    const newImage = document.createElement('img');
                    newImage.setAttribute('src', url);
                    newImage.setAttribute('alt', imageAltText[index]);
                    thumbBar.appendChild(newImage);
                    newImage.onclick = function (e) {
                        displayedImage.setAttribute('src', e.target.getAttribute('src'));
                    }
                }
            })
            .catch(error => console.log(error));
    });

}


/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}


