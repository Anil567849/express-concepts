import express from 'express';
const app = express();
app.use(express.json());
import {authRoute} from './route/auth.js'
app.use(authRoute);

app.listen(8000, () => {
    console.log("listening");
})