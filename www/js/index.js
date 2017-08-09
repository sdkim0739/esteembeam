/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function schedule()
{
	$('.button').click(function(){
    	var subcatValue = [];
            $.each($("input[type='checkbox']:checked"), function(){
                subcatValue.push($(this).val());
            });

        var subcatFilter = [];

        $.getJSON("https://sdkim0739.pythonanywhere.com/api/message/?format=json", function(result){
			subcatValue.forEach(function(subcat) {
            	subcatFilter.push(result.objects.filter(function(msg) {
                   return msg.subcategory == subcat;
                }));
            });
            var message = subcatFilter[Math.floor(Math.random() * subcatFilter.length)][Math.floor(Math.random() * subcatFilter.length)].text;
        });
	});

  var user_freq = document.getElementById("frequency").options[ document.getElementById("frequency")].value;
  var date = new Date();

  cordova.plugins.notification.local.schedule({
      id: 1,
      title: "EsteemBeam",
      message: "${message}",
      firstAt: date, // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
      every: "${user_freq}", // this also could be minutes i.e. 25 (int)
      sound: "file://sounds/reminder.mp3",
      icon: "http://icons.com/?cal_id=1",
      data: { meetingId:"123#fg8" }
  });

  cordova.plugins.notification.local.on("click", function (notification) {
      joinMeeting(notification.data.meetingId);
  });

}
