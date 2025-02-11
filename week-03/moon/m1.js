// Function to get the current moon phase (simplified)
function getMoonPhase() {
  const date = new Date();
  const lunarCycle = 29.53;
  const startDate = new Date('2023-01-01'); // Arbitrary start date for the lunar cycle
  const diffDays = (date - startDate) / (1000 * 60 * 60 * 24);
  const phase = (diffDays % lunarCycle) / lunarCycle;
  
  if (phase < 0.03) return 'New Moon';
  if (phase < 0.25) return 'First Quarter';
  if (phase < 0.53) return 'Full Moon';
  return 'Last Quarter';
}

// Function to fetch tide information (using a mock tide API URL)
function getTideInfo() {
  // Replace with a real tide API URL
  const tideData = {
    currentTide: "High Tide at 12:00 PM",
    tideTimes: [0, 2, 5, 6, 8, 9] // Example tide heights for graphing
  };
  
  return tideData;
}

// Function to display the moon phase and tide info
function displayInfo() {
  const moonPhase = getMoonPhase();
  const tideInfo = getTideInfo();
  
  // Display moon phase
  document.getElementById('phase').textContent = moonPhase;
  
  // Display tide info
  document.getElementById('tide').textContent = tideInfo.currentTide;

  // Plot tide graph
  plotTideGraph(tideInfo.tideTimes);

  // Plot moon phase diagram
  plotMoonPhase(moonPhase);
}

// Function to plot tide data on a chart
function plotTideGraph(tideTimes) {
  const ctx = document.getElementById('tideChart').getContext('2d');
  
  const data = {
    labels: ['12:00 AM', '3:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM'],
    datasets: [{
      label: 'Tide Height (m)',
      data: tideTimes,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 1
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  
  new Chart(ctx, config);
}

// Function to plot the moon phase diagram
function plotMoonPhase(moonPhase) {
  const ctx = document.getElementById('moonPhaseChart').getContext('2d');
  
  const moonPhases = {
    "New Moon": "images/new_moon.png",
    "First Quarter": "images/first_quarter.png",
    "Full Moon": "images/full_moon.png",
    "Last Quarter": "images/last_quarter.png"
  };

  const phaseImage = moonPhases[moonPhase] || "images/default_moon.png";
  
  const moonPhaseImage = new Image();
  moonPhaseImage.src = phaseImage;
  
  moonPhaseImage.onload = function () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas first
    ctx.drawImage(moonPhaseImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
  };
}

// Initialize the page
window.onload = displayInfo;
