module.exports = function(g) {
    'use strict';

    g.registerMultiTask('osdetect', 'Detect OS and run task based on it', function() {
        var task, target_config,
            os = process.platform;

        g.verbose.writeln('OS detected: ' + os);

        if('object' !== typeof this.data.map) {
            g.log.error();
            g.log.error('"map" is not defined for ' + this.target);
            g.fail.warn('using --force will NOT help in this case.');

            return;
        }

        if('undefined' !== typeof this.data.map[os]) {
            task = this.data.map[os];
        }
        else {
            g.fail.warn('OS ' + os + ' have no tasks mapped');

            return;
        }

        g.task.run(task);

        g.log.ok('Task ' + task + ' queued for OS ' + os);
    });
};