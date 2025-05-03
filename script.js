let totalUsed = 0;

function logUsage() {
  const flowRate = parseFloat(document.getElementById('activity').value);
  const minutes = parseFloat(document.getElementById('minutes').value);
  const monthlyGoal = parseFloat(document.getElementById('monthlyGoal').value);

  if (isNaN(minutes) || isNaN(monthlyGoal)) {
    alert("Please enter both usage time and monthly goal.");
    return;
  }

  const usage = flowRate * minutes;
  totalUsed += usage;

  document.getElementById('result').innerText = `You used ${usage.toFixed(2)} gallons. Total this month: ${totalUsed.toFixed(2)} gal.`;

  if (totalUsed > monthlyGoal) {
    document.getElementById('status').innerText = `⚠️ Over your goal by ${(totalUsed - monthlyGoal).toFixed(2)} gallons.`;
  } else {
    document.getElementById('status').innerText = `✅ Under your goal by ${(monthlyGoal - totalUsed).toFixed(2)} gallons.`;
  }
}
