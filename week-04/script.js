// You can add additional JavaScript for interactivity if desired
document.addEventListener("DOMContentLoaded", () => {
    const moviePosters = document.querySelectorAll('.movie-poster');
    
    moviePosters.forEach(poster => {
      poster.addEventListener('click', () => {
        alert('Movie clicked!');
      });
    });
  });
  