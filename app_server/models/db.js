var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
if(process.env.NODE_ENV === 'production') {
	dbURI = 'mongodb://loc8r-dev:er#402ER@ds045714.mlab.com:45714/meandb'
}
mongoose.connect(dbURI);


var readLine = require('readline');
if(process.platform === "win32") {
	var rl = readLine.createInterface ({
		input:process.stdin,
		output:process.stdout
	});
	rl.on("SIGINT", function() {
		process.emit("SIGINT");
	});
}


//Activity Checks
mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connected to ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});


gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

//Nodemon Restarts
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});
//App Termination
process.on('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});
//Heroku App Termination
process.on('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});


require('./locations');