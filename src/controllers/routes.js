/**
 * Created by trefi on 12.03.2017.
 */

'use strict';

exports.initRouters = function (app) {
	app.get('/', function (req, res) {
                /* eslint no-unused-vars: 0 */
		res.render('main-page');
	});

	app.get('/profile', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.get('/quest/:id', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.get('/quest/:id/details', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.get('/myquests', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.get('/newquest', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.get('/editquest/:id', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.post('/signin', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.post('/signup', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.post('/rating', function (req, res) {
        /* eslint no-unused-vars: 0 */
	});

	app.use(function (req, res) {
        /* eslint no-unused-vars: 0 */
		res.status(404);
	});

	app.use(function (err, req, res) {
        /* eslint no-unused-vars: 0 */
		console.error(err.stack);
		res.status(500);
	});
};
