// List of sample videos with title, description, and iframe URL for embedding
const videos = [
    {
        title: "Sample Video 1",
        description: "This is the description of Sample Video 1.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Sample Video 2",
        description: "This is the description of Sample Video 2.",
        embedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
        title: "Sample Video 3",
        description: "This is the description of Sample Video 3.",
        embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        title: "Sample Video 4",
        description: "This is the description of Sample Video 4.",
        embedUrl: "https://www.youtube.com/embed/QH2-TGUlwu4"
    }
];

// Function to render the video thumbnails dynamically
function renderVideoThumbnails() {
    const videoGrid = document.querySelector('.video-grid');
    videoGrid.innerHTML = ''; // Clear existing thumbnails

    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        
        // Create thumbnail image and other elements
        const thumbnail = document.createElement('img');
        thumbnail.src = `https://via.placeholder.com/320x180?text=Video+${index + 1}`;
        thumbnail.alt = `Thumbnail for ${video.title}`;
        
        const title = document.createElement('h4');
        title.textContent = video.title;
        
        const description = document.createElement('p');
        description.textContent = `By User ${index + 1}`;

        // Append elements to video card
        videoCard.appendChild(thumbnail);
        videoCard.appendChild(title);
        videoCard.appendChild(description);

        // Add click event to change video and update title/description
        videoCard.addEventListener('click', () => playVideo(video, index));

        // Append the video card to the grid
        videoGrid.appendChild(videoCard);
    });
}

// Function to change the video player when a thumbnail is clicked
function playVideo(video, index) {
    const iframe = document.querySelector('.video-player iframe');
    const videoTitle = document.querySelector('.video-player h2');
    const videoDescription = document.querySelector('.video-player p');

    // Update the iframe URL to the clicked video
    iframe.src = video.embedUrl;
    
    // Update the title and description dynamically
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
}

// Initialize the page
renderVideoThumbnails();
