// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require ('mongoose');

// Connection
const app = express();
const PORT = process.env.port || 8080

// Routes
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

