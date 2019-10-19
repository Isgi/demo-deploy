var app = require('./server.js');
var config = require('./config.js');

/*
 * Start server
 */
app.listen(process.env.PORT || config.PORT);
