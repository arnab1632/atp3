//DECLARATION
var express  	= require('express');
var ejs  		= require('ejs');

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParse.urlencoded({extended:false}));
//app.use(exSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
//app.use(cookieParser());
//app.use('/home', home);
//app.use('/user', user);
//app.use('/login', login);
//app.use('/logout', logout);

//ROUTING
app.get('/', function(req, res){
	res.send('<h2>hello from express</h2>');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
