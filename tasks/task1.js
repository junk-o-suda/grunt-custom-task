module.exports = function(g) {
    'use strict';

    g.registerMultiTask('troll', 'Trolls gonna troll', function() {
        g.log.writeln('Task: ' + this.target);
    });
};
