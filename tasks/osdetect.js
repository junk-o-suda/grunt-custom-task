module.exports = function(g) {
    'use strict';

    g.registerMultiTask('osdetect', 'Detect OS and run task based on it', function() {
        var task, target_config,
            os = g.option('os') || process.platform,
            done = this.async();

        g.verbose.writeln('OS detected: ' + os);

        if('object' !== typeof this.data.map) {
            g.log.error();
            g.log.error('"map" is not defined for ' + this.target);
            g.fail.warn('using --force will NOT help in this case.');

            done(false);
        }

        if('undefined' !== typeof this.data.map[os]) {
            task = this.data.map[os];
        }
        else {
            if(g.option('force')) {
                if('undefined' === typeof this.data.map['default']) {
                    g.log.error();
                    g.log.error('No "default" task mapped.');

                    done(false);
                }

                task = this.data.map['default'];
                g.config(task.replace(/:/, '.') + '.name', os);
            }
            else {
                g.fail.warn('OS ' + os + ' have no tasks mapped');

                done(false);
            }
        }

        target_config = task.replace(/:/, '.');

        if('bsd' === os) {
            g.config(target_config + '.awesome', true);
            g.config(target_config + '.super', true);
        }

        g.task.run(task);

        g.log.ok('Task ' + task + ' queued for OS ' + os);

        done();
    });
};
