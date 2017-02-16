var tape = require('tape');
var mjAPI = require("../lib/main.js");

tape('CSS output', function(t) {
    t.plan(2);
    mjAPI.start();
    var tex = 'x';
    mjAPI.typeset({
        math: tex,
        format: "TeX",
        css: true
    }, function(data) {
        t.ok(data.css, 'css output while no other output');
    });
    mjAPI.typeset({
        math: tex,
        format: "TeX",
        css: true,
        svg: true
    }, function(data) {
        t.ok(data.css, 'css output with SVG output');
    });
});
