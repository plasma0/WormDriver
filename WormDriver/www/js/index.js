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

var p = 0;
var c = 3;

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }

async function fx(x)
{
	var q = x.src;
	var z = q.substr(q.length - 5);
	if(z == "m.png"){
		x.src = "img/plate.png";
	p=p+1;
	document.getElementById("results").innerHTML = "<p class=\"points\">POINTS|" + p + "</p>" + "<p class=\"chances\">" + c + "|CHANCES</p>";
}
}

async function disp(but) {
	but.disabled = true;
	document.getElementById("results").innerHTML = "<p class=\"points\">POINTS|" + p + "</p>" + "<p class=\"chances\">" + c + "|CHANCES</p>";
	while (true) {
		var pos = Math.floor((Math.random()*9));
		document.getElementById(pos.toString()).src = "img/worm.png";
		s_time = 2000-p*50;
		if(s_time<100)s_time=200;
		await sleep(s_time);
		var state = document.getElementById(pos.toString()).src;
		var s_ate = state.substr(state.length - 5);
		if(s_ate=="m.png"){
			c=c-1;
			document.getElementById("results").innerHTML = "<p class=\"points\">POINTS|" + p + "</p>" + "<p class=\"chances\">" + c + "|CHANCES</p>";

		}
		if(c==0)
		{
			alert("GAME OVER\nYou socred "+p+" points.");
			document.getElementById(pos.toString()).src = "img/plate.png";
			document.getElementById("start").disabled = false;
			p=0;
			c=3;
			break;
		}
		document.getElementById(pos.toString()).src = "img/plate.png";
	}
}

function show_credits()
{
	alert("Author: Konrad Kania \nkonrad_kania@wp.pl");
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
	admob.setOptions(
	{publisherId:	"ca-app-pub-9400337818586168/1846702161"}
	);
	admob.createBannerView();
	admob.requestInterstitialAd();
	alert("xd");
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

app.initialize();
