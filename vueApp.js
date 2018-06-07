
// // window.onload= function () {

// // const url ='http://demo-arisite.net:3000/sensors';

// // var vm = new Vue({
// // 	  			el: '#app-1',
// // 	  			data: { data_1: 21
// // 	  			}

// // 	  		});
// // // var vm = new Vue({
// // // 	  			el: '#app-2',
// // // 	  			data: { data_2: 32
// // // 	  				}
// // // 	  		});
// // }

// // var vm = new Vue({
// // 	  			el: '#app-3',
// // 	  			data: {data_3: 31
// // 	  			}
// // 	  		});
// // var vm = new Vue({
// // 	  			el: '#app-4',
// // 	  			data: {data_4: 31
// // 	  			}
// // 	  		});
// // var vm = new Vue({
// // 	  			el: '#app-5',
// // 	  			data: {data_5: 31
// // 	  			}
// // 	  		});

// // var qui = {
// // 	"hum": 1
// // };

// // function getHum1(api) {
// //   url = 'http://demo-arisite.net:80/sensors';
// //   axios.get(url
// //     ).then(function(response) {
// //     //var hum = response.data.hum;
// //     var hum = response.data.hum;
// //     console.log(hum);
// //     return hum;
// //   });
// // };
// // qui.hum=getHum1('http://demo-arisite.net:3000/sensors');

// // window.onload=function() { 
// // 	var vm = new Vue({
// // 			el: '#app-1', 
// // 			data: { data_1: hum
// // 			}
// // 		});

// //  };
// //////////////////////////////////////////////////////////////////////////////////////////////////








// var jsonData=[{
//   "pump1c": 2,
//   "pump2c": 2,
//   "pump1s": 2,
//   "pump2s": 2,
//   "mode": 2,
//   "airt": 2,
//   "hum": 2,
//   "pts": 2,
//   "dis": 2,
//   "watert": 2,
//   "waterf": 2,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 3,
//   "pump2c": 5,
//   "pump1s": 2,
//   "pump2s": 8,
//   "mode": 2,
//   "airt": 6,
//   "hum": 5,
//   "pts": 7,
//   "dis": 8,
//   "watert": 5,
//   "waterf": 3,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 1,
//   "pump2c": 2,
//   "pump1s": 3,
//   "pump2s": 5,
//   "mode": 4,
//   "airt": 2,
//   "hum": 2,
//   "pts": 8,
//   "dis": 2,
//   "watert": 7,
//   "waterf": 9,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 2,
//   "pump2c": 9,
//   "pump1s": 4,
//   "pump2s": 3,
//   "mode": 2,
//   "airt": 6,
//   "hum": 4,
//   "pts": 5,
//   "dis": 2,
//   "watert": 2,
//   "waterf": 6,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 7,
//   "pump2c": 5,
//   "pump1s": 7,
//   "pump2s": 6,
//   "mode": 5,
//   "airt": 9,
//   "hum": 4,
//   "pts": 3,
//   "dis": 9,
//   "watert": 7,
//   "waterf": 4,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 5,
//   "pump2c": 8,
//   "pump1s": 1,
//   "pump2s": 1,
//   "mode": 4,
//   "airt": 3,
//   "hum": 9,
//   "pts": 8,
//   "dis": 4,
//   "watert": 4,
//   "waterf": 3,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 2,
//   "pump2c": 2,
//   "pump1s": 2,
//   "pump2s": 2,
//   "mode": 2,
//   "airt": 2,
//   "hum": 2,
//   "pts": 2,
//   "dis": 2,
//   "watert": 2,
//   "waterf": 2,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 5,
//   "pump2c": 4,
//   "pump1s": 5,
//   "pump2s": 2,
//   "mode": 3,
//   "airt": 2,
//   "hum": 6,
//   "pts": 4,
//   "dis": 9,
//   "watert": 3,
//   "waterf": 10,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 7,
//   "pump2c": 3,
//   "pump1s": 1,
//   "pump2s": 10,
//   "mode": 5,
//   "airt": 6,
//   "hum": 9,
//   "pts": 8,
//   "dis": 7,
//   "watert": 6,
//   "waterf": 7,
//   "time": "2018-06-05 7:18:45"
// },
// {
//   "pump1c": 1,
//   "pump2c": 1,
//   "pump1s": 1,
//   "pump2s": 1,
//   "mode": 1,
//   "airt": 1,
//   "hum": 1,
//   "pts": 1,
//   "dis": 1,
//   "watert": 1,
//   "waterf": 1,
//   "time": "2018-06-05 7:18:45"
// }];

// $(document).ready(function () {

// !(function (d3) {

// $("acontent").empty();


// function getField(arr, field) {

//   return arr.map( function(elem) {
//       return elem[field];
//   });

// }

// function arrayMax(arr) {
//   return arr.reduce(function (x, y) { 
//     return Math.max(x, y);
//   })
// } //tinh toan ra mot gia tri tu cac phan tu cua mang 

// function arrayMin(arr) {
//   return arr.reduce(function (x, y) {
//     return Math.min(x, y);
//   })
// }

// // function remove(tabId) {
// //   d3.select(tabId).selectAll('svg').remove();
// // }
// function render(tabId, data) {
//    var maxIndex = data.length;

//     var maxValue = arrayMax(data);
//     var minValue = arrayMin(data);
//     console.log(maxIndex);
//     console.log(maxValue);
//     console.log(minValue);
//     var formatTime = d3.time.format("%e %B");

//     // size and margins for the chart
//     var margin = {top: 50, right: 50, bottom: 50, left: 50}
//       , width =  800 - margin.left - margin.right
//       , height = 500 - margin.top - margin.bottom;

//     // x and y scales, I've used linear here but there are other options
//     // the scales translate data values to pixel values for you
//     var x = d3.scale.linear()
//               .domain([0, maxIndex])  // the range of the values to plot
//               .range([ 0, width ]);        // the pixel range of the x-axis


//     var y = d3.scale.linear()
//               .domain([0, maxValue])
//               .range([ height, 0 ]);

//     // the chart object, includes all margins
//     var chart = d3.select(tabId)
//     .append('svg:svg')
//     .attr('width', width + margin.right + margin.left)
//     .attr('height', height + margin.top + margin.bottom)
//     .attr('class', 'chart')

//     // the main object where the chart and axis will be drawn
//     var main = chart.append('g')
//     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//     .attr('width', width)
//     .attr('height', height)
//     .attr('class', 'main')

//     function range(start, end) {
//       return Array(end - start).join(0).split(0).map(function(val, id) {return id+start;});
//     }

//     // draw the x axis
//     var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient('bottom')
//     .tickFormat(function (d,i)   {
//       console.log(i);
//       return "Ngay" + i;
//     });

//     main.append('g')
//     .attr('transform', 'translate(0,' + height + ')')
//     .attr('class', 'main axis date')
//     .call(xAxis);

//     // draw the y axis
//     var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient('left');


//     main.append('g')
//     .attr('transform', 'translate(0,0)')
//     .attr('class', 'main axis date')
//     .call(yAxis); 

//   var tooltip = d3.select(tabId)
//                   .append("div")
//                   .attr('class', 'tooltip')
//                   .style("opacity", 0);

//   var circles = main.append("svg:g"); 

//   circles.selectAll("scatter-dots")
//     .data(data)  // using the values in the ydata array
//     .enter().append("svg:circle")  // create a new circle for each value
//         .attr("cy", function (d, i) { return y(d); } ) // translate y value to a pixel
//         .attr("cx", function (d, i) { return x(i); } ) // translate x value
//         .attr("r", 5) // radius of circle
//         .style("opacity", 0.6) // opacity of circle
//         .style("fill", function (d, i)   {
//           return 'DarkBlue';
//         }).on("mouseover", function (d, i) {

//             tooltip.transition()
//                    .duration(200)
//                    .style("opacity", .9);

//             tooltip.html(i + "</br>"  + d)
//                     .style("left", d3.select(this).attr("cx") + "px")     
//                     .style("top", d3.select(this).attr("cy") + "px");
//           }).on("mouseout", function (d) {
//             tooltip.transition()
//                    .duration(500)
//                    .style("opacity", 0);
//           });



   

//     var allCircles = d3.selectAll("circle");

//     for (var i = 0; i < allCircles[0].length - 1; i++) {
//       var currentCircle = d3.select(allCircles[0][i]);

//       var nextCircle = d3.select(allCircles[0][i+1]);

//       var line = main.append("line")
//                   .style("stroke","DarkBlue")
//                   .attr("x1", currentCircle.attr("cx"))
//                   .attr("y1", currentCircle.attr("cy"))
//                   .attr("x2", nextCircle.attr("cx"))
//                   .attr("y2", nextCircle.attr("cy"));

//       };
// }


// function getTemp(appId, num_results) {
//   url = 'https://api.thingspeak.com/channels/441612/feeds.json';
//   axios.get(url, {
//     params: {
//       appid: appId,
//       results: num_results

//     }
//   }).then(function(response) {
//     var data = response.data.feeds;
//     console.log(data);

//     var airtemperature = getField(data, 'field1');
//     console.log(airtemperature);

    

//     var humidity = getField(data, 'field2');
//     console.log(humidity);
//    // d3.select('#airtemperature').selectAll('svg').remove();
        

//      render('#airtemperature', airtemperature);


//   }).catch(function(err){
//     console.log(err);
//   });
// }


//  getTemp('C4VRR19CJ4UIW6HP', 10);
// }) (d3);

// });
// //////////////////////////////////////////////////
// //  function getHumChart() {
// //   var humChart = getField(jsonData,'hum');
// //   render('#humidity',humChart);
// //  };

// // getHumChart();
// /////////////////////////////////////////////////
// //   var humChart = getField(jsonData, 'hum');
// //   console.log(humChart);
// // //  d3.select('#humidity').selectAll('svg').remove();
// //   render('#humidity', humChart);

// //   var lightChart = getField(jsonData, 'pts');
// //   console.log(lightChart);
// //    render('#light', lightChart);

// //   var airtChart = getField(jsonData, 'airt');
// //   console.log(airtChart);
// //    render('#airtemperature', airtChart);

// //   var watertChart = getField(jsonData, 'watert');
// //   console.log(watertChart);
// //    render('#watertemperature', watertChart);

// //   var waterfChart = getField(jsonData, 'waterf');
// //   console.log(waterfChart);
// //    render('#waterflow', watertChart);

