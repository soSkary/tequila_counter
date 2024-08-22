// Sample data (replace with real data from the logging page)
const data = [
    { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], y: [3, 5, 2, 7, 4, 6, 1, 8, 9, 10, 11], name: 'Person 1' },
    // Add more data objects for other people
  ];
  
  // Function to calculate statistics for a given person
  function calculateStatistics(personData) {
    const totalShots = personData.y.reduce((acc, shots) => acc + shots, 0);
    const averageShots = totalShots / personData.y.length;
    const peakTime = personData.x[personData.y.indexOf(Math.max(...personData.y))];
  
    return {
      totalShots,
      averageShots,
      peakTime
    };
  }
  
  // Iterate over the data and display statistics for each person
  data.forEach(personData => {
    const statistics = calculateStatistics(personData);
  
    const statisticsElement = document.createElement('div');
    statisticsElement.innerHTML = `
      <h2>${personData.name}'s Statistics</h2>
      <p>Total Shots: ${statistics.totalShots}</p>
      <p>Average Shots per Day: ${statistics.averageShots.toFixed(2)}</p>
      <p>Peak Shot Time: ${peakTime}</p>
    `;
  
    document.getElementById('statistics').appendChild(statisticsElement);
  });