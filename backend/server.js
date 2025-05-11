const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comment');
const dashboardRoutes = require('./routes/protected');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', commentRoutes);
app.use('/api', dashboardRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
