var http = require('http');
var now = require('now');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080);

var everyone = now.initialize(server);

everyone.now.changeSlide = function(s) {
    console.log('Changing slide to:', s);
    everyone.now.keynote.goto(s);

    // setting default slide
    if (! this.now.slide) {
        this.now.slide = 'welcome';
    }
};
