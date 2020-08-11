var http = require('http');

//create a server object:
http.createServer(function(req, res) {
    res.write('Hello World!'); //write a response to the client


    console.log(req.url)
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

g = 9.81
pi = Math.PI

function maxDistanceOfAngle(speed, angle) {
    return (Math.pow(speed, 2) * Math.sin(2 * degToRad(angle))) / g
}

function maxDistance(speed) {
    return maxDistanceOfAngle(speed, 45)
}

function angleOfReach(speed, distance) {
    a1 = 1 / 2 * Math.asin(g * distance / Math.pow(speed, 2))
    a2 = degToRad(90) - a1

    return [a1, a2]
}

function timeOfFlight(speed, angle) {
    return (2 * speed * Math.sin(degToRad(angle))) / g
}



function degToRad(deg) {
    return deg * (pi / 180)
}

function radToDeg(rad) {
    return rad * (180 / pi)
}



console.log(maxDistance(10))

aReach = angleOfReach(30, 50)
console.log("a1: " + radToDeg(aReach[0]))
console.log("a2: " + radToDeg(aReach[1]))

console.log(timeOfFlight(30, 50))