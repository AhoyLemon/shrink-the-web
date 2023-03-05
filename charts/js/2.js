
var chart    = document.getElementById('Chart').getContext('2d'),
gradient = chart.createLinearGradient(0,  0,  1600,  0);

gradient.addColorStop(0, 'rgba(0, 230, 0, 0.8)');
//gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
gradient.addColorStop(1, 'rgba(190, 0, 0, 0.8)');


var data  = {
  labels: [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022'
  ],
  datasets: [{
    backgroundColor: gradient,
    pointBackgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#911215',
    data: [
      467,
      608,
      817,
      1026,
      1229,
      1416,
      1505,
      1676,
      1588,
      1836,
      1969,
      2204,
      2222
    ]
  }]
};

var options = {
  global: {
    defaultFontSize: 30
  },
  animation: {
    duration: 3000
  },

  label: {
    display:false
  },

  legend: {
    display: false
  },

  title: {
    display: true,
    text: "Web Page File Size Over Time",
    fontSize: 32,
    fontFamily: "Playfair Display, serif"
  },
  scales: {
    xAxes: [{
      ticks: {
        fontSize: 32
      }
    }]
  }
};


var chartInstance = new Chart(chart, {
  type: 'line',
  data: data,
  options: options
});






/*
document.getElementById('randomizeData').addEventListener('click', function() {
  config.data.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });

  window.myPie.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
  var newDataset = {
    backgroundColor: [],
    data: [],
    label: 'New dataset ' + config.data.datasets.length,
  };

  for (var index = 0; index < config.data.labels.length; ++index) {
    newDataset.data.push(randomScalingFactor());

    var colorName = colorNames[index % colorNames.length];
    var newColor = window.chartColors[colorName];
    newDataset.backgroundColor.push(newColor);
  }

  config.data.datasets.push(newDataset);
  window.myPie.update();
});

document.getElementById('removeDataset').addEventListener('click', function() {
  config.data.datasets.splice(0, 1);
  window.myPie.update();
});
*/