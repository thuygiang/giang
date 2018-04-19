// data that you want to plot, I've used separate arrays for x and y values

function getAveragePressure(cityName, dateTime, appId) {
  url = 'http://api.openweathermap.org/pollution/v1/co/' + cityName + '/' + dateTime + '.json';
  
  axios.get(url, {
    params: {
      appid: appId
    }
  })
  .then(function(response) {
    
    var data = response.data.data.slice(0,10);

    console.log(data);


    var maxDay = data.length;

    // for (i=0; i<data.length; i++) {
    //   console.log(data[i]);
    //   if(data[i].day > maxDay)
    //     maxDay = data[i].day;
    // }

    var maxTemp = data[0].value;

    for (i=0; i<data.length; i++) {
      if(data[i].value > maxTemp)
        maxTemp = data[i].value;
    }

    console.log(maxDay);
    console.log(maxTemp);

  
    var formatTime = d3.time.format("%e %B");

    // size and margins for the chart
    var margin = {top: 200, right: 10, bottom: 60, left: 700}
      , width = 1200 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom;

    // x and y scales, I've used linear here but there are other options
    // the scales translate data values to pixel values for you
    var x = d3.scale.linear()
              .domain([0, maxDay])  // the range of the values to plot
              .range([ 0, width ]);        // the pixel range of the x-axis


    var y = d3.scale.linear()
              .domain([0, maxTemp])
              .range([ height, 0 ]);

    // the chart object, includes all margins
    var chart = d3.select('#home')
    .append('svg:svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

    // the main object where the chart and axis will be drawn
    var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main')

    function range(start, end) {
      return Array(end - start).join(0).split(0).map(function(val, id) {return id+start;});
    }

    // draw the x axis
    var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .tickFormat(function (d,i)   {
      console.log(i);
      return "Ngay" + i;
    });

    main.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'main axis date')
    .call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');


    main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(yAxis);
  

  var tooltip = d3.select("#home")
                  .append("div")
                  .attr('class', 'tooltip')
                  .style("opacity", 0);

  var circles = main.append("svg:g"); 

  circles.selectAll("scatter-dots")
    .data(data)  // using the values in the ydata array
    .enter().append("svg:circle")  // create a new circle for each value
        .attr("cy", function (d, i) { return y(d.value); } ) // translate y value to a pixel
        .attr("cx", function (d, i) { return x(i); } ) // translate x value
        .attr("r", 5) // radius of circle
        .style("opacity", 0.6) // opacity of circle
        .style("fill", function (d, i)   {
          return 'DarkBlue';
        }).on("mouseover", function (d, i) {

            tooltip.transition()
                   .duration(200)
                   .style("opacity", .9);

            tooltip.html(i + "</br>"  + Math.round(d.value*100000000000)/10000)
                   .style("left", (d3.event.pageX) + "px")   
                   .style("top", (d3.event.pageY - 28) + "px");

          }).on("mouseout", function (d) {
            tooltip.transition()
                   .duration(500)
                   .style("opacity", 0);
          });



   

    var allCircles = d3.selectAll("circle");

    for (var i = 0; i < allCircles[0].length - 1; i++) {
      var currentCircle = d3.select(allCircles[0][i]);

      var nextCircle = d3.select(allCircles[0][i+1]);

      var line = main.append("line")
                  .style("stroke","DarkBlue")
                  .attr("x1", currentCircle.attr("cx"))
                  .attr("y1", currentCircle.attr("cy"))
                  .attr("x2", nextCircle.attr("cx"))
                  .attr("y2", nextCircle.attr("cy"));
    }






    // var labels = main.append("svg:g");

    // labels.selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .text(function (d, i)    {
    //     return '(' + i + ',' + d.value + ')';
    //   })
    //   .attr("y", function (d, i)    {
    //     return y(d.value);
    //   })
    //   .attr("x", function (d, i)    {
    //     return x(i);
    //   })
    //   .attr("fill","blue")
    //   .attr("font-size","15px");




      })
      .catch(function(err) {
        console.log(err);
      }); 

}



getAveragePressure('0.0,10.0','current','333667886d834109b16601a96571a0b7');



