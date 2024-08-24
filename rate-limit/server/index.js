

import express from 'express';
const app = express();
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})



// 1. Apply the rate limiting middleware to all requests.
// app.use(limiter)

// 2. Apply the rate limiting middleware to this request.
app.get('/api/rate', limiter, (req, res) => {
    res.send("ok");
})

// 3. Multiple Middleware 
const myMiddlware = (req, res, next) => {
    console.log(`Request URL: ${req.url}, Request Method: ${req.method}`);
    next(); // Pass control to the next middleware or route handler
};
app.get('/api/rate', myMiddlware, limiter, (req, res) => {
    res.send("ok");
})

app.listen(8000, () => {
    console.log('ok server');
})
