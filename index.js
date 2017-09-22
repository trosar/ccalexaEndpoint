module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('DefaultWelcomeIntent',
  {

  //"slots":{"number":"NUMBER"}
	"slots":{"ordernumberslot":"ORDERNUMBER", "zipcodeslot":"ZIPCODE"}
	,"utterances":[ 
		"my order number is {ordernumberslot} and zipcode is {zipcodeslot}",
		"{ordernumberslot}",
		"{zipcodeslot}",
		"i'm looking for order details"]
  },
  function(request,response) {
    var orderNum = request.slot('ordernumberslot');
    var zipcode = request.slot('zipcodeslot');
    response.say("You asked for the order number "+ orderNum + " and zipcode " + zipcode);
  }
);

module.exports = app;