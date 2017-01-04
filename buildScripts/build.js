/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, status) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    //const jsonStats = status.toJson();
    console.log(`Webpack stats: ${status}`);

    console.log(chalk.green('Your app has been built for production and written to /dist'));
    return 0;
});
