import publicRouter from '../routes/public-routes.js';
import express, { application } from 'express';

const App = express();

// todo modlewares, routes etx....
App.use(express.json())

//routes
App.use('/public', publicRouter)

export default App;