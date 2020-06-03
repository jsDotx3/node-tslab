if (process.env.NODE_ENV !== 'development')
    require('module-alias/register');

// @ts-ignore
import express from 'express'
import homeRoute from './routes/home.route';
import healthRoute from './routes/health.route';
import userRoute from './routes/user.route';
import database from './utils/database.util';

database().then(() => console.log('Connect succes')).catch(console.error);
const app: express.Application = express();


app.use('/', homeRoute);
app.use('/health', healthRoute);
app.use('/users', userRoute);

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
