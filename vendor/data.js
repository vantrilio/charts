var alert = new Image();
alert.src = 'https://vantrilio.github.io/charts/vendor/img/alert.png';

Chart.pluginService.register({
    afterUpdate: function(chart) {
        chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = alert;
    }
});



window.chartColors = {
  white: '#fff',
  orange: 'rgb(255,98,0)',
  blue: '#2E5573',
  lightgreen: 'rgba(111,207,195, 0.2)',
  lightred: 'rgba(255,98,0, 0.2)',
  grey: 'rgb(255,98,0)'
};

var config = {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        type: 'line',
        lineTension: '0.3',
        label: "Prediction",
        data: [, , , , , 50, 40, -30, -10, 0, 20, 30],
        borderDash: [5, 5],
        borderWidth: 2,
        backgroundColor: window.chartColors.white,
        borderColor: window.chartColors.blue
    },
      {
      type: 'line',
      lineTension: '0.3',
      label: 'Liquidity',
      data: [40, 50, 40, 30, 55, 0 ],
      backgroundColor: window.chartColors.white,
      borderColor: window.chartColors.blue,
      fill: false
    }, {
      type: 'bar',
      label: 'Payables',
      backgroundColor: window.chartColors.lightgreen,
      borderColor: window.chartColors.white,
      data: [65, 40, 80, 81, 56, 85, 40, 30, 40, 50, 50, 55],
    }, {
      type: 'bar',
      label: 'Receivables',
      backgroundColor: window.chartColors.lightred,
      borderColor: window.chartColors.white,
      data: [-65, -60, -80, -81, -56, -85, -90, -70, -40, -40, -30, -25]
    }]
  },
  options: {

    scales: {
      pointLabels :{
               fontStyle: "bold",
            },
      xAxes: [{
        stacked: true,
        barPercentage: 0.6,
        fontStyle: 'bold'
      }],
      yAxes: [{
        stacked: true,
        fontStyle: "bold"
      }]
    },
    legend: {
      position:"bottom",
      labels: {
      fontColor: '#2E5573',
      fontStyle: 600,
      }
    },
    tooltips: {
     backgroundColor: '#FFF',
     titleFontSize: 16,
     titleFontColor: 'rgba(46,85,115)',
     bodyFontColor: '#000',
     bodyFontSize: 14,
     fontStyle: 600,
     width:10,
     borderColor: 'rgba(46,85,115)',
     borderWidth: 1,
     displayColors: false
   },
   elements: {
            line: {
                fill: false,
                tension: 0
            }
        },
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: -50,
        borderColor: 'rgb(255,98,0)',
        borderWidth: 2,
        label: {
          enabled: false,
          content: 'Headroom',
        }
      },{
            type: 'box',
            drawTime: 'beforeDatasetsDraw',
            yScaleID: 'y-axis-0',
            xScaleID: 'x-axis-0',
            yMin: 100,
            yMax: -100,
            xMin: "Jan" -1 ,
            xMax: "Jun",
            backgroundColor: 'rgba(0, 0, 0, .08)',
         }]
      }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
var myLine = new Chart(ctx, config);

document.getElementById("myChart").onclick = function(evt) {
  var activePoint = myLine.getElementAtEvent(event);

  // make sure click was on an actual point
  if (activePoint.length > 0) {
    var clickedDatasetIndex = activePoint[0]._datasetIndex;
    var clickedElementindex = activePoint[0]._index;
    var label = myLine.data.labels[clickedElementindex];
    var value = myLine.data.datasets[clickedDatasetIndex].data[clickedElementindex];
    // console.log("Clicked: " + label + " - " + value);
    window.location.replace("#" + "/" + label + value);
  }
};
