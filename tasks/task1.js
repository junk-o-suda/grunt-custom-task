module.exports = function(g) {
    'use strict';

    g.registerMultiTask('troll', 'Trolls gonna troll', function() {
        var name = this.data.name || this.target,
            word;

        if(this.data.awesome) {
            word = 'awesome';
        }
        else {
            word = 'not so awesome';
        }

        g.log.writeln(name + ' is ' + word);
    });
};
