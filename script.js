const video = document.getElementById('webcam');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const captureBtn = document.getElementById('capture-btn');

// Access the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing webcam: ', err);
    });

// Capture the screenshot and apply the "kitten filter"
captureBtn.addEventListener('click', () => {
    // Draw the current video frame on the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Apply "cute kitten" filter (let's add some ears and nose)
    const kittenImage = new Image();
    kittenImage.src = 'kitten_filter.png'; // Kitten filter image with transparent background
    kittenImage.onload = () => {
        // Overlay the kitten filter on top of the webcam capture
        ctx.drawImage(kittenImage, 100, 100, 150, 150); // Adjust size and position as needed
    };
});