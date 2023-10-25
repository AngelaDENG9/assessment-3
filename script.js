
let introSection = document.querySelector("#intro")
// introSection.style.backgroundColor = "#ff0"

introSection.className = "redback"

let heading = document/createElement("h2");
let headingText = document.createTextNode("Community Impacts");
heading.appendChild(headingText);

document.body.appendChild(heading);


const modal = document.createElement('div');
modal.id = 'myModal';

const closeBtn = document.createElement('span');
closeBtn.className = 'close';
closeBtn.innerHTML = '&times;';
closeBtn.addEventListener('click', closeModal);

const modalImage = document.createElement('img');

modal.appendChild(closeBtn);
modal.appendChild(modalImage);
document.body.appendChild(modal);

function openModal(src) {
    modal.style.display = 'block';
    modalImage.src = src;
}

function closeModal() {
    modal.style.display = 'none';
}


const images = document.querySelectorAll('.gallery-image');


images.forEach(image => {
    image.addEventListener('click', () => {
        const imageUrl = image.src;
        openModal(imageUrl);
    });
});