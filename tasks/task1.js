module.exports = function(g) {
    'use strict';

    g.registerMultiTask('troll', 'Trolls gonna troll', function() {
        g.log.writeln(this.target + ' is ' + (this.data.awesome ? '' : 'not so ') + 'awesome.');
    });
};
