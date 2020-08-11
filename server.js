var http = require('http');
const url = require('url');

g = 9.81
pi = Math.PI

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });



    const current_url = new URL("http://cool.com" + req.url)
    const params = current_url.searchParams

    speed = params.get('speed')


    xStart = params.get('xStart')
    yStart = params.get('yStart')

    xEnd = params.get('xEnd')
    yEnd = params.get('yEnd')

    distance = Math.sqrt(Math.pow(xEnd - xStart, 2) + Math.pow(yEnd - yStart, 2))

    //angle1 = Math.atan((yEnd - yStart) / (xEnd - xStart))

    console.log(distance)

    res.write(distance.toString() + "\n")
    res.write(maxDistance(speed).toString() + "\n")

    aReach = angleOfReach(140, distance)
    res.write("a1: " + radToDeg(aReach[0]).toString() + "\n")
    res.write("a2: " + radToDeg(aReach[1]).toString() + "\n")




    console.log(req.url)
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080




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

/*
spd = 100
dstt = 500

console.log(maxDistance(spd))

aReach = angleOfReach(spd, dstt)
console.log("a1: " + radToDeg(aReach[0]))
console.log("a2: " + radToDeg(aReach[1]))

console.log(timeOfFlight(spd, dstt))
*/