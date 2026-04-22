// Shay VanLandschoot 
// 4/22/26
// Slideshow Project


const images = ['/images/coffee-shop.jpg', '/images/climbing-team.jpg', '/images/jean-jacket.jpg'];
const captions = ['coffee shop', 'rock climbing', 'person in jean jacket'];
let currentIndex = 0;
let slideInterval;
let isPlaying = false;

function updateGallery(index){
    currentIndex = index;
    document.getElementById('gallery-img').src = images[index];
    document.getElementById('gallery-caption').textContent = captions[index];
}

function runSlideshow() {
    let nextidx = (currentIndex + 1) % images.length;
    updateGallery(nextidx);
}

function startTimer(){
    isPlaying = true;
    document.getElementById('pause-btn').textContent = 'Pause';
    slideInterval = setInterval(runSlideshow, 2000);
}

function stopTimer(){
    isPlaying =false;
    document.getElementById('pause-btn').textContent = 'Play';
    clearInterval(slideInterval);
}

function toggleSlideshow(){
    if (isPlaying){
        stopTimer();
    } else{
        startTimer();
    }//end if else
}//end function

function nextImage(){
    stopTimer();
    runSlideshow();
}
 
function prevImage(){
    stopTimer();
    let prevIdx = (currentIndex - 1 + images.length) % images.length;
    updateGallery(prevIdx);
}

document.getElementById('pause-btn').addEventListener('click', toggleSlideshow);
document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);

window.addEventListener('load', startTimer)