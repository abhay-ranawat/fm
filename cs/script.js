const hdr = document.querySelector('.hdr')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(event) {
    hdr.style.color = 'limegreen';
    hdr.innerHTML = 'Clicked';
})