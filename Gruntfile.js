module.exports = function(g) {
    'use strict';

    g.initConfig({
        troll: {
            linux: {
                name: 'Linux',
                awesome: true
            },
            windows: {
                name: 'Windows',
                awesome: false,
            },
            bsd: {
                awesome: false
            },
            unknown: {}
        },
        osdetect: {
            run: {
                map: {
                    linux: 'troll:linux',
                    windows: 'troll:windows',
                    default: 'troll:unknown'
                }
            }
        }
    });

    g.task.loadTasks('./tasks');

    g.registerTask('default', ['osdetect:run']);
};
