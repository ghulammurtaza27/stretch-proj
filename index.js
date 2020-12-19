
function drawBarChart(data, options, element) {
  let x = '';
  let y = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > y) {
      y = data[i];
    }
    x += bar(data[i], options);
  }
  $(element).append(`<h2 class="chart-title">Title: ${options[4]}</h2><span class="horizontal-axis">y-axis</span><div class="chart" ><div class="y-axis"> values </div><div class="bar-chart" style="height: ${78 * data.length / 2.27}px; width:${(options[0] + 0.25) * y}px;">
    ${x}
  </div></div>`)
}
function bar (data, options) {
  return `<div class="bar" style="height: ${options[1]/3}px; margin-top:6px; width:${options[0] * data}px; background:${options[2]};text-align: ${options[3]};"/>${data}<br/>`
}


drawBarChart([2, 3, 4, 9, 25, 23, 24],[10, 75, "purple", "center", "Students in Current Cohort"], "main");
drawBarChart([5, 7, 9, 13, 23, 34, 20],[15, 75, "orange", "right", "Students in Previous Cohort"], "main");
drawBarChart([5, 7, 9, 13, 23, 34, 63],[10, 75, "orange", "right", "Students in Previous Cohort"], "main");


// The data parameter will be the data the chart should work from Start with just an Array of numbers
// e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element that the chart will get rendered into.
