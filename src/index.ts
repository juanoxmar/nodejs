import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import chalk from 'chalk';
import moment from 'moment';

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import errorController from './controllers/error';

const app = express();

// setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController);

app.listen(3000, () => {
  console.log(
    chalk.cyanBright(`[${moment().format('HH:mm:ss')}]`),
    chalk.cyanBright('Listening on Port: '),
    chalk.blue('3000')
  );
  console.log();
});
