
var chart    = document.getElementById('Chart').getContext('2d'),
gradient = chart.createLinearGradient(0,  0,  1600,  0);

gradient.addColorStop(0, 'rgba(0, 230, 0, 0.8)');
//gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
gradient.addColorStop(1, 'rgba(190, 0, 0, 0.8)');


var data  = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
  datasets: [{
    label: 'Custom Label Name',
    backgroundColor: gradient,
    pointBackgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#911215',
    data: [7,6,11,24,38,46,53,59,61,65,62,67,69,66,69,73]
  }]
};

var options = {
  global: {
    defaultFontSize: 30
  },
  animation: {
    duration: 3000
  },

  legend: {
    display: false
  },

  title: {
    display: true,
    text: "Bounce Rates Over Time",
    fontSize: 32,
    fontFamily: "Playfair Display, serif"
  },
  scales: {
    yAxes: [{
      ticks: {
        callback: function(value,index,values) {
          return value + '%';
        },
        fontSize: 26
      }
    }],
    xAxes: [{
      ticks: {
        callback: function(value,index,values) {
          return value + 's';
        },
        fontSize: 26
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