document.addEventListener('DOMContentLoaded', function () {
  function generateRandomData(numPoints) {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    return data;
  }

  const data = generateRandomData(10);

  Highcharts.chart('container', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Random Test Data'
    },
    xAxis: {
      categories: Array.from({ length: data.length }, (_, i) => i + 1)
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Random Data',
      data: data
    }]
  });
});
