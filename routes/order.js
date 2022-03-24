'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');
const authService = require('../services/auth');


router.get('/', authService.authrize, controller.get);
router.post('/', authService.authrize, controller.post);

module.exports = router;