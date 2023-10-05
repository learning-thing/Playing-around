var colors = [];
var stuff = ["Bruh", "lol", "Yoo", "Amogus", "SUS", "David0IV0"]
var DavidSpotify = "https://spotify.link/of1XE4A2UCb";



for (let i=0; i<10; i++) {
    colors.push('#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6));
}


for (let i = 0; i<colors.length; i++) {
    var a = document.createElement('a');
    var spam = document.createElement("span");
    var rand = Math.round(-1+Math.random()*10);
    console.log(linkText);

    a.appendChild(spam)

    while (rand > stuff.length-1 || rand < 0) {
        rand = Math.round(-1+Math.random()*10);
    }


    var linkText = document.createTextNode(stuff[rand]);
    console.log(linkText);
    spam.appendChild(linkText);
    a.style = '--clr:'+colors[i];
    spam.style = "--clr"+colors[i];

    a.title = stuff[rand];
    
    if  (rand == 5) {
        a.href = DavidSpotify;
    } else {
        a.href = "./index.html";
    }

    document.body.appendChild(a);
 }
