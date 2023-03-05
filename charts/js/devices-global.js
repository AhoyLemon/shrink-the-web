var chart = new Chart('Chart', {
  type: 'outlabeledPie',
  data: {
      labels: [
				'mobile',
				'tablet',
				'desktop'
				//'javascript',
				//'images'
      ],
      datasets: [{
          backgroundColor: [
              '#FF3784',
              '#36A2EB',
              '#4BC0C0',
              '#F77825',
              '#9966FF',
              '#00A8C6',
              '#379F7A',
              '#CC2738',
              '#8B628A',
              '#8FBE00'
          ],
          data: [
						49,
						4,
						47
						//3902,
					]
      }]
  },
  options: {
		animation: {
			duration: 3000
    },
    title: {
      display: true,
      text: "Global Device Use, 2019",
      fontSize: 32
    },

		zoomOutPercentage: 15, // makes chart 55% smaller (50% by default, if the preoprty is undefined)
		plugins: {
			legend: false,
			outlabels: {
				text: '%l %p',
				color: 'white',
				stretch: 45,
				font: {
					resizable: true,
					minSize: 10,
					maxSize: 18
				}
			}
		}
  }
});

let chartHasImages = false;


function addImages() {
  chartHasImages = !chartHasImages;

  if (chartHasImages) {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(3902);
    });
  } else {
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
  }
  
	console.log(chart.data);
	chart.update();
}



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