module.exports = function(g) {
    'use strict';

    g.initConfig({
        troll: {
            linux: {
                awesome: true
            },
            unknown: {}
        },
        osdetect: {
            run: {
                map: {
                    linux: 'troll:linux',
                    default: 'troll:unknown'
                }
            }
        }
    });

    g.task.loadTasks('./tasks');

    g.registerTask('default', ['osdetect:run']);
};
