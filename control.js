
const app_11 = new Vue({
      el : "#app_11", 
      data  :{ 
          sth: 'Loading...', 
       },
      create: function () {
        this.getMode();
      },
      methods: {
         getMode: function() {
  url = 'http://demo-arisite.net:3000/status/get';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.sth = response.data.sth; 
    if(app.sth==true) {
      app.sth='START';
    }
    else {
      app.sth='OFF';
    }
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
setInterval(() => {
  app_11.getMode();
},3*1000);
//////////////////////////////
const app_22 = new Vue({
      el : "#app_22", 
      data  :{ 
          pump1c: 'Loading...', 
       },
      create: function () {
        this.getPump1s();
      },
      methods: {
         getPump1s: function() {
          console.log('a');
  url = 'http://demo-arisite.net:3000/status/get';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.pump1c = response.data.pump1c; 
    if(app.pump1c==true) {
      app.pump1c='ON';
    }
    else {
      app.pump1c='OFF';
    }
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
setInterval(() => {
  app_22.getPump1s();
},3*1000);
///////////////////////////////
const app_33 = new Vue({
      el : "#app_33", 
      data  :{ 
          pump2c: 'Loading...', 
       },
      create: function () {
        this.getPump2s();
      },
      methods: {
         getPump2s: function() {
  url = 'http://demo-arisite.net:3000/status/get';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.pump2c = response.data.pump2c; 
    if(app.pump2c==true) {
      app.pump2c='ON';
    }
    else {
      app.pump2c='OFF';
    }
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
setInterval(() => {
  app_33.getPump2s();
},3*1000);
///////////////////
// var mqtt;
//    var reconnectTimeout=2000;
//    var host="broker.mqttdashboard.com";
//    var port=8000;

//    function onConnect(){
//     console.log("Connected");
//     message = new Paho.MQTT.Message("asdasd");
//     message.destinationName ="sensor1";
//     mqtt.send(message);
//     console.log("Success!! Topic: " + message.destinationName + " Message: " + message  )
//    }

//    function MQTTconnect(){
//     console.log("connecting to " + host + " " + port);
//     mqtt = new Paho.MQTT.Client(host,port,"clientjs");
//      var options = {
//       timeout: 3,
//       onSuccess: onConnect,
//      };
//     mqtt.connect(options); 
//    }
//    MQTTconnect();
//////////////////////////////////////////////////////
  $('#bt1').click(function(e){
        e.preventDefault();

         $.ajax({
            type: "get",
            url: "http://demo-arisite.net:3000/status/get",
            // data: modeData,
            contentType: "application/json",
            success: function(response) {
              var flag = 0;

                if(response.sth ==false ){

                  $.ajax({
                          type: "get",
                          url: "http://demo-arisite.net:3000/status/create",
                          data: {
                            sth: true,
                            pump1c: response.pump1c,
                            pump2c: response.pump2c
                          },
                          // dataType: "json",
                          contentType: "application/json",
                          success: function(response) {
                            alert("done");


                          },

                          error: function (error) {console.log(error);}
                       });
              }
              else {
                alert("Ready");
              }
           },

            error: function (error) {
              console.log(error); 
            }
        
      });
     });
////////////////////////////////
$('#bt3').click(function(e){
        e.preventDefault();
      

         $.ajax({
            type: "get",
            url: "http://demo-arisite.net:3000/status/get",
            // data: modeData,
            contentType: "application/json",
            success: function(response) {
              var flag = 0;

                if(response.pump1c ==false && response.sth==true){

                  $.ajax({
                          type: "get",
                          url: "http://demo-arisite.net:3000/status/create",
                          data: {
                            sth: response.sth,
                            pump1c: true,
                            pump2c: response.pump2c
                          },
                          // dataType: "json",
                          contentType: "application/json",
                          success: function(response) {
                            alert("done");


                          },

                          error: function (error) {console.log(error);}
                       });
              }
              else {
                alert("Ready");
              }
           },

            error: function (error) {
              console.log(error); 
            }
        
      });
     });
//////////////////////////////////
$('#bt4').click(function(e){
        e.preventDefault();
      

         $.ajax({
            type: "get",
            url: "http://demo-arisite.net:3000/status/get",
            // data: modeData,
            contentType: "application/json",
            success: function(response) {
              var flag = 0;

                if(response.pump1c ==true && response.sth==true){

                  $.ajax({
                          type: "get",
                          url: "http://demo-arisite.net:3000/status/create",
                          data: {
                            sth: response.sth,
                            pump1c: false,
                            pump2c: response.pump2c
                          },
                          // dataType: "json",
                          contentType: "application/json",
                          success: function(response) {
                            alert("done");


                          },

                          error: function (error) {console.log(error);}
                       });
              }
              else {
                alert("Ready");
              }
           },

            error: function (error) {
              console.log(error); 
            }
        
      });
     });
//////////////////////////////////////////
$('#bt5').click(function(e){
        e.preventDefault();
      

         $.ajax({
            type: "get",
            url: "http://demo-arisite.net:3000/status/get",
            // data: modeData,
            contentType: "application/json",
            success: function(response) {
              var flag = 0;

                if(response.pump2c ==false && response.sth==true){

                  $.ajax({
                          type: "get",
                          url: "http://demo-arisite.net:3000/status/create",
                          data: {
                            sth: response.sth,
                            pump1c: response.pump1c,
                            pump2c: true
                          },
                          // dataType: "json",
                          contentType: "application/json",
                          success: function(response) {
                            alert("done");


                          },

                          error: function (error) {console.log(error);}
                       });
              }
              else {
                alert("Ready");
              }
           },

            error: function (error) {
              console.log(error); 
            }
        
      });
     });
/////////////////////////////////////////
$('#bt6').click(function(e){
        e.preventDefault();
      

         $.ajax({
            type: "get",
            url: "http://demo-arisite.net:3000/status/get",
            // data: modeData,
            contentType: "application/json",
            success: function(response) {
              var flag = 0;

                if(response.pump2c ==true && response.sth==true){

                  $.ajax({
                          type: "get",
                          url: "http://demo-arisite.net:3000/status/create",
                          data: {
                            sth: response.sth,
                            pump1c: response.pump1c,
                            pump2c: false
                          },
                          // dataType: "json",
                          contentType: "application/json",
                          success: function(response) {
                            alert("done");


                          },

                          error: function (error) {console.log(error);}
                       });
              }
              else {
                alert("Ready");
              }
           },

            error: function (error) {
              console.log(error); 
            }
        
      });
     });
//////////////////////////
$('#bt2').click(function(e){
        e.preventDefault();

         $.ajax({
            type: "get",
            url: "http://demo-arisite.net:3000/status/get",
            // data: modeData,
            contentType: "application/json",
            success: function(response) {
              var flag = 0;

                if(response.sth ==true ){

                  $.ajax({
                          type: "get",
                          url: "http://demo-arisite.net:3000/status/create",
                          data: {
                            sth: false,
                            pump1c: false,
                            pump2c: false
                          },
                          // dataType: "json",
                          contentType: "application/json",
                          success: function(response) {
                            alert("done");


                          },

                          error: function (error) {console.log(error);}
                       });
              }
              else {
                alert("Ready");
              }
           },

            error: function (error) {
              console.log(error); 
            }
        
      });
     });