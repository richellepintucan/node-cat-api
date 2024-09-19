import express from 'express';
import dotenv from 'dotenv';

import catRoutes from './routes/cat.js';

dotenv.config();
// Port
const PORT = process.env.PORT || 5003;

// Initialize express
const app = express();

// Parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', catRoutes);

// Handle 404
app.use((err, req) => {
    res.status(404).send('not found!');
});

// Handle error
app.use((err, req, res) => {
    console.error(err);
    res.status(500).send('Server is down');
});

// Listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
