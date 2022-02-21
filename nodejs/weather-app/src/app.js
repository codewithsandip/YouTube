const path = require('path');
const express = require('express');
const hbs = require('hbs');
const axios = require('axios');

//console.log(__dirname);
//console.log(__filename);

const app = express();

// configure static content
app.use(express.static(path.join(__dirname, '../public')));

// configure view engine - handlebars
app.set('view engine', 'hbs');

// configure views directory
app.set('views', path.join(__dirname, '../templates/views'));

// configure partials
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        text: 'This is as awesome weather app'
    });
});

app.get('/pricing', (req, res) => {
    res.render('pricing', {
        title: 'Pricing Info',
        text: 'Ours services are free for now'
    });
});

app.get('/credits', (req, res) => {
    res.render('credits', {
        title: 'Credits',
        text: 'Sandip Gautam - Web Developer'
    });
});

app.get('/weather', (req, res) => {
    const location = req.query.location;

    async function fetchWeather() {
        try {
            const url = 'http://api.weatherapi.com/v1/current.json'
            const response = await axios.get(url, {
                params: {
                    key: 'b1fb468ad91845acaa010258221802',
                    q: location
                }
            });

            const { name, region, country } = response.data.location;
            const { temp_c, condition } = response.data.current;

            return res.send({
                location: `${name}, ${region}, ${country}`,
                current: temp_c,
                condition: condition
            });
        } catch (e) {
            return res.send({
                error: 'Something went wrong, please try again later.'
            });
        }
    }

    if (!location) {
        return res.send({
            error: 'Please enter valid location.'
        });
    }

    fetchWeather();
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'OOPs ! You seems to be landed on wrong page.'
    });
});

app.listen(3000, () => {
    console.log('app started on port 3000');
});