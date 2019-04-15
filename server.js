const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Database
const db = require('./models');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve Static Assets
app.use(express.static(__dirname + '/public'));

// ROOT Route
app.get('/', (req, res) => {
	res.sendFile('views/index.html', { root: __dirname });
});

// Documentation Route for API
app.get('/api', (req, res) => {
	res.json({
		documentationUrl: 'https://github.com/kbbushman/sei1-project1',
		// List all available endpoints for the API
		endpoints: [
			{
				method: 'GET',
				path: '/api',
				description: 'Describes all available endpoints'
			}
		]
	});
});

// Route to show favorite Developer on Team
app.get('/favdev', (req, res) => {
	res.send(
		`<section><img src="https://avatars0.githubusercontent.com/u/18340986?s=460&v=4" alt="best dev on team"><h1>He is by far the coolest developer we got.</h1></section>`
	);
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
