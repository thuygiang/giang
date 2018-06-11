// data that you want to plot, I've used separate arrays for x and y values

// web: node server.js

// function getAveragePressure(cityName, dateTime, appId) {
//   url = 'http://api.openweathermap.org/pollution/v1/co/' + cityName + '/' + dateTime + '.json';
  
//   axios.get(url, {
//     params: {
//       appid: appId
//     }
//   })
//   .then(function(response) {
    
//     var data = response.data.data.slice(0,10);

//     console.log(data);
/////////////////////////////////
// function getField(arr, field) {

//   return arr.map( function(elem) {
//       return elem[field];
//   });

// }

// function arrayMax(arr) {
//   return arr.reduce(function (x, y) {
//     return Math.max(x, y);
//   })
// }

// function arrayMin(arr) {
//   return arr.reduce(function (x, y) {
//     return Math.min(x, y);
//   })
// }

// function render(tabId, data) {
//    var maxIndex = data.length;

//     var maxValue = arrayMax(data);

//     console.log(maxIndex);
//     console.log(maxValue);

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
//     render('#airtemperature', airtemperature);
//     var humidity = getField(data, 'field2');
//     console.log(humidity);
//     render('#humidity', humidity);

     


//   }).catch(function(err){
//     console.log(err);
//   });
// };



function getField(arr, field) {
  return arr.map( function(elem) {
      return elem[field];
  });

}

function arrayMax(arr) {
  return arr.reduce(function (x, y) { 
    return Math.max(x, y);
  })
} //tinh toan ra mot gia tri tu cac phan tu cua mang 

function arrayMin(arr) {
  return arr.reduce(function (x, y) {
    return Math.min(x, y);
  })
}

// function remove(tabId) {
//   d3.select(tabId).selectAll('svg').remove();
// }
function render(tabId, data) {
   var maxIndex = data.length;

    var maxValue = arrayMax(data);
    var minValue = arrayMin(data);
    // console.log(maxIndex);
    // console.log(maxValue);
    // console.log(minValue);
    var formatTime = d3.time.format("%e %B");

    // size and margins for the chart
    var margin = {top: 50, right: 50, bottom: 50, left: 50}
      , width =  800 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom;

    // x and y scales, I've used linear here but there are other options
    // the scales translate data values to pixel values for you
    var x = d3.scale.linear()
              .domain([0, maxIndex])  // the range of the values to plot
              .range([ 0, width ]);        // the pixel range of the x-axis


    var y = d3.scale.linear()
              .domain([0, maxValue])
              .range([ height, 0 ]);

    // the chart object, includes all margins
    var chart = d3.select(tabId)
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

  var tooltip = d3.select(tabId)
                  .append("div")
                  .attr('class', 'tooltip')
                  .style("opacity", 0);

  var circles = main.append("svg:g"); 

  circles.selectAll("scatter-dots")
    .data(data)  // using the values in the ydata array
    .enter().append("svg:circle")  // create a new circle for each value
        .attr("cy", function (d, i) { return y(d); } ) // translate y value to a pixel
        .attr("cx", function (d, i) { return x(i); } ) // translate x value
        .attr("r", 5) // radius of circle
        .style("opacity", 0.6) // opacity of circle
        .style("fill", function (d, i)   {
          return 'DarkBlue';
        }).on("mouseover", function (d, i) {

            tooltip.transition()
                   .duration(200)
                   .style("opacity", .9);

            tooltip.html(i + "</br>"  + d)
                    .style("left", d3.select(this).attr("cx") + "px")     
                    .style("top", d3.select(this).attr("cy") + "px");
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

      };
}


function getHumn(num_results, field) {
  url = 'http://demo-arisite.net:3000/sensors/date?year=2018&month=06&date=10';
  axios.get(url, {
    params: {
     
      results: num_results

    }
  }).then(function(response) {

    var data = response.data;

   
    if(field == 'hum') {
	    render('#humidity1', getField(data, field));
    }
	else if(field == 'airt') {
		render('#airtemperature1', getField(data, field));
	}
	else if(field == 'pts') {
		render('#light1', getField(data, field));
	}
	else if(field == 'watert') {
		render('#watertemperature1', getField(data, field));
	}
	else if(field == 'waterf') {
		render('#waterflow1', getField(data, field));
	}

  }).catch(function(err){
    console.log(err);
  });
}//f1 temp
//f2 hum


/////////////////////////////////////////////
 

const app_2 = new Vue({
      el : "#app_2", 
      data  :{ 
          light: 0, 
       },
      create: function () {
        this.getLight();
      },
      methods: {
         getLight: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.light = response.data.pts;
    // console.log(this.light); 
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
// console.log(app_2.light);
setInterval(() => {
  app_2.getLight();
},5*1000);


///////////////////////////////////

 const app_1 = new Vue({
      el : "#app_1", 
      data  :{ 
          humidity: 0, 
       },
      create: function () {
        this.getHum();
      },
      methods: {
         getHum: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.humidity = response.data.hum;
    // console.log(this.light); 
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
// console.log(app_2.light);
setInterval(() => {
  app_1.getHum();
},5*1000);

// /////////////////////
 const app_3 = new Vue({
      el : "#app_3", 
      data  :{ 
         airt : 0, 
       },
      create: function () {
        this.getAirt();
      },
      methods: {
         getAirt: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.airt = response.data.airt;
    // console.log(this.light); 
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
// console.log(app_2.light);
setInterval(() => {
  app_3.getAirt();
},5*1000);

// /////////////////////
  const app_4 = new Vue({
      el : "#app_4", 
      data  :{ 
         watert : 0, 
       },
      create: function () {
        this.getWatert();
      },
      methods: {
         getWatert: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.watert = response.data.watert;
    // console.log(this.light); 
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
// console.log(app_2.light);
setInterval(() => {
  app_4.getWatert();
},5*1000);
/////////////////////////////////////////
    const app_5 = new Vue({
      el : "#app_5", 
      data  :{ 
         waterf : 0, 
       },
      create: function () {
        this.getWatert();
      },
      methods: {
         getWaterf: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.waterf = response.data.waterf;
    // console.log(this.light); 
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
// console.log(app_2.light);
setInterval(() => {
  app_5.getWaterf();
},5*1000);
///////////////////////////////////


var hum = document.querySelector('li.Humidity');
var airt = document.querySelector('li.Airtemperature');
var light = document.querySelector('li.Light');
var watert = document.querySelector('li.Watertemperature');
var waterf = document.querySelector('li.Waterflow');

hum.addEventListener('click', function(){
	document.querySelector('#airtemperature1').innerHTML = '';
	document.querySelector('#airtemperature1').className = 'tab-pane';
	document.querySelector('#light1').innerHTML = '';
	document.querySelector('#light1').className = 'tab-pane';
	document.querySelector('#watertemperature1').innerHTML = '';
	document.querySelector('#watertemperature1').className = 'tab-pane';
	document.querySelector('#waterflow1').innerHTML = '';
	document.querySelector('#waterflow1').className = 'tab-pane';
	document.querySelector('#humidity1').className = 'tab-pane active';
	console.log('Humidity');
	getHumn(10, 'hum');

});

airt.addEventListener('click', function(){
	document.querySelector('#humidity1').innerHTML = '';
	document.querySelector('#humidity1').className = 'tab-pane ';
	document.querySelector('#light1').innerHTML = '';
	document.querySelector('#light1').className = 'tab-pane';
	document.querySelector('#watertemperature1').innerHTML = '';
	document.querySelector('#watertemperature1').className = 'tab-pane';
	document.querySelector('#waterflow1').innerHTML = '';
	document.querySelector('#waterflow1').className = 'tab-pane';
	document.querySelector('#airtemperature1').className = 'tab-pane active';
	getHumn(10 ,'airt');
	
});

light.addEventListener('click', function(){
	document.querySelector('#humidity1').innerHTML = '';
	document.querySelector('#humidity1').className = 'tab-pane ';
	document.querySelector('#airtemperature1').innerHTML = '';
	document.querySelector('#airtemperature1').className = 'tab-pane';
	document.querySelector('#watertemperature1').innerHTML = '';
	document.querySelector('#watertemperature1').className = 'tab-pane';
	document.querySelector('#waterflow1').innerHTML = '';
	document.querySelector('#waterflow1').className = 'tab-pane';
	document.querySelector('#light1').className = 'tab-pane active';
	getHumn(10 ,'pts');
	
});

watert.addEventListener('click', function(){
	document.querySelector('#humidity1').innerHTML = '';
	document.querySelector('#humidity1').className = 'tab-pane ';
	document.querySelector('#airtemperature1').innerHTML = '';
	document.querySelector('#airtemperature1').className = 'tab-pane';
	document.querySelector('#light1').innerHTML = '';
	document.querySelector('#light1').className = 'tab-pane';
	document.querySelector('#waterflow1').innerHTML = '';
	document.querySelector('#waterflow1').className = 'tab-pane';
	document.querySelector('#watertemperature1').className = 'tab-pane active';
	getHumn(10 ,'watert');
	
});

waterf.addEventListener('click', function(){
	document.querySelector('#humidity1').innerHTML = '';
	document.querySelector('#humidity1').className = 'tab-pane ';
	document.querySelector('#airtemperature1').innerHTML = '';
	document.querySelector('#airtemperature1').className = 'tab-pane';
	document.querySelector('#light1').innerHTML = '';
	document.querySelector('#light1').className = 'tab-pane';
	document.querySelector('#watertemperature1').innerHTML = '';
	document.querySelector('#watertemperature1').className = 'tab-pane';
	document.querySelector('#waterflow1').className = 'tab-pane active';
	getHumn(10 ,'waterf');
});


