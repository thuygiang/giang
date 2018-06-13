
const app_11 = new Vue({
      el : "#app_11", 
      data  :{ 
          mode: 'Loading...', 
       },
      create: function () {
        this.getMode();
      },
      methods: {
         getMode: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.mode = response.data.mode; 
    if(app.mode==1) {
      app.mode='MANUAL';
    }
    else {
      app.mode='AUTO';
    }
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
setInterval(() => {
  app_11.getMode();
},5*1000);
//////////////////////////////
const app_22 = new Vue({
      el : "#app_22", 
      data  :{ 
          pump1s: 'Loading...', 
       },
      create: function () {
        this.getPump1s();
      },
      methods: {
         getPump1s: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.pump1s = response.data.pump1s; 
    if(app.pump1s==1) {
      app.pump1s='ON';
    }
    else {
      app.pump1s='OFF';
    }
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
setInterval(() => {
  app_22.getPump1s();
},5*1000);
///////////////////////////////
const app_33 = new Vue({
      el : "#app_33", 
      data  :{ 
          pump2s: 'Loading...', 
       },
      create: function () {
        this.getPump2s();
      },
      methods: {
         getPump2s: function() {
  url = 'http://demo-arisite.net:3000/sensors';
   var app=this;
  axios.get(url
  ).then(function(response) {
    app.pump2s = response.data.pump2s; 
    if(app.pump2s==1) {
      app.pump2s='ON';
    }
    else {
      app.pump2s='OFF';
    }
    }).catch(function(err){
    console.log(err);
  });
}
     }
});
setInterval(() => {
  app_33.getPump2s();
},5*1000);