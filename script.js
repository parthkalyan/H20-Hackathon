let facts = [
  "The initial 750 Gallons of water are sold at a lower price for a household",
  "Did you know the average American uses 82 gallons of water a day?",
  "A bath uses up to 70 gallons of water!",
  "Turning off the tap while brushing your teeth saves 8 gallons a day.",
  "Leaks can waste nearly 1 trillion gallons of water annually in the U.S.",
  "Showers use about 2.5 gallons per minute.",
  "A running toilet can waste up to 200 gallons of water a day.",
  "Washing a car can use up to 100 gallons of water.",
  "Only 1% of the earth's water is available for drinking water"
];
let currentFact = 0;

function updateFact() {
  document.getElementById("fact-text").innerText = facts[currentFact];
}


function slideFact(direction) {
  const factEl = document.getElementById("fact-text");
  const offset = direction === "left" ? "-100%" : "100%";

  // Slide out
  factEl.style.transform = `translateX(${offset})`;
  factEl.style.opacity = 0;

  setTimeout(() => {
    // Change the fact
    updateFact();
    // Reset position to opposite side
    factEl.style.transform = `translateX(${direction === "left" ? "100%" : "-100%"})`;

    setTimeout(() => {
      // Slide in
      factEl.style.transform = "translateX(0)";
      factEl.style.opacity = 1;
    }, 50);
  }, 300);
}

function prevFact() {
  currentFact = (currentFact - 1 + facts.length) % facts.length;
  slideFact("right");
}

function nextFact() {
  currentFact = (currentFact + 1) % facts.length;
  slideFact("left");
}

// Jug Fill Simulation
function setJugFill(percent) {
  document.getElementById("jug-fill").style.height = percent + "%";
}

// Dummy data for pie and bar charts
const pieData = {
  labels: ["Shower", "Faucet", "Garden", "Other"],
  datasets: [{
    data: [40, 30, 20, 10],
    backgroundColor: ["#34c759", "#007aff", "#ff9500", "#5856d6"]
  }]
};

const pieChart = new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: pieData
});

const barData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
  datasets: [{
    label: "Water Used (gallons)",
    data: [40, 55, 30, 45, 70, 60, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
    backgroundColor: "#007aff"
  }]
};

const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: barData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Simulate water usage update
setJugFill(60);
updateFact();