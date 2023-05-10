const body = document.querySelector('body');
const title = document.getElementById('title');

function addContent() {
    const p = document.createElement('p');
    p.textContent = 'Hey you!';
    body.appendChild(p);
}

function clearContent() {
    body.removeChild(title);
    
}