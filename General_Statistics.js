// Sample data (replace with real data from the logging page)
const data = [
    { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], y: [3, 5, 2, 7, 4, 6, 1, 8, 9, 10, 11], name: 'Person 1' },
    // Add more data objects for other people
  ];
  
  // Create a single chart with all data
  const layout = {
    title: 'Tequila Shot Tracker (Combined)',
    xaxis: { title: 'Time (hours)' },
    yaxis: { title: 'Number of Tequila Shots' }
  };
  
  Plotly.newPlot('chart', data, layout);