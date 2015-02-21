module.exports = function(g) {
    'use strict';

    g.initConfig({
        troll: {
            linux: {
                awesome: true
            }
        },
        osdetect: {
            run: {
                map: {
                    linux: 'troll:linux'
                }
            }
        }
    });

    g.task.loadTasks('./tasks');

    g.registerTask('default', ['troll']);
};
