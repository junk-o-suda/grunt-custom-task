module.exports = function(g) {
    'use strict';

    g.initConfig({
        troll: {
            target1: {}
        }
    });

    g.task.loadTasks('./tasks');

    g.registerTask('default', ['troll']);
};
