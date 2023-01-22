console.log('Javascript is running!');

const headphones = document.querySelector('#headphones');
const disk = document.querySelector('#disk');
const drum = document.querySelector('#drum');
const guitar = document.querySelector('#guitar');
const mic = document.querySelector('#mic');
const note = document.querySelector('#note');
const sound = document.querySelector('#sound');
const speaker = document.querySelector('#speaker');
const piano = document.querySelector('#piano');
const shaker = document.querySelector('#shaker');

function logID() {
    console.log('clicked on this element:',this.id);
}

headphones.addEventListener('click', logID);
disk.addEventListener('click', logID);
drum.addEventListener('click', logID);
guitar.addEventListener('click', logID);
mic.addEventListener('click', logID);
note.addEventListener('click', logID);
sound.addEventListener('click', logID);
speaker.addEventListener('click', logID);
piano.addEventListener('click', logID);
shaker.addEventListener('click', logID);