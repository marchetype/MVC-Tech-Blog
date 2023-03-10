const router = require('express').Router();

const homePageRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api');

router.use('/', homePageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;