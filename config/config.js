/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "tr",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Istanbul",
				locationID: "745044",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "a5aae93fae8ce4294fcc0be6bcdc5bcb"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Istanbul",
				locationID: "745044",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "a5aae93fae8ce4294fcc0be6bcdc5bcb"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true 
			}
		},
		{
			module: "MMM-CurrencyExchange",
			position: "bottom_left",
			showCustomHeader: true,
			config: {
				base: 'TRY',
				symbols: ['USD', 'EUR', 'GBP']
			}
		},
		{
			module: "MMM-cryptocurrency",
			position: "bottom_right",
			config: {
				currency: ['bitcoin', 'ethereum', 'bitcoin-cash'],
				conversion: 'TRY'
			}
		},
		{
			module: "MMM-ImagesPhotos",
			position: "middle_center",
			config: {
				opacity: 1,
				animationSpeed: 1500,
				updateInterval: 15000,
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
