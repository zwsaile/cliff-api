const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://cliff-jumps.vercel.app', // Restrict to your frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  credentials: true, // If using cookies or auth
};

app.use(cors(corsOptions)); // CORS should be applied before routes
app.options('*', cors(corsOptions)); // Handle preflight requests globally

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/photos', express.static(path.join(__dirname, 'photos')));

app.set('port', process.env.PORT || 8080);
app.locals.title = 'Best Cliff Jumping Spots In America';

app.get('/', (request, response) => {
  response.send('Check these spots out');
});

app.locals.cliffs = [
  {
    id: 1,
    name: 'Radium Hot Springs',
    type: 'River',
    maxHeight: 65,
    depth: 20,
    latLong: [39.960, -106.540],
    location: "Colorado",
    photo: "/photos/radium.jpg"
  },
  {
    id: 2,
    name: 'Eleven Mile State Park',
    type: 'Reservoir',
    maxHeight: 55,
    depth: 30,
    latLong: [38.929, -105.497],
    location: "Colorado",
    photo: "/photos/eleven-mile.jpg"
  },
  {
    id: 3,
    name: 'Guernsey State Park',
    type: 'Reservoir',
    maxHeight: 55,
    depth: 40,
    latLong: [42.320, -104.791],
    location: "Wyoming",
    photo: "/photos/guernsey.jpg"
  },
  {
    id: 4,
    name: 'Green Mountain Reservoir',
    type: 'Reservoir',
    maxHeight: 70,
    depth: 40,
    latLong: [39.871, -106.278],
    location: "Colorado",
    photo: "/photos/green-mountain-co.jpg"
  },
  {
    id: 5,
    name: 'Havasu Falls',
    type: 'Waterfall',
    maxHeight: 120,
    depth: 40,
    latLong: [36.255, -112.697],
    location: "Arizona",
    photo: "/photos/havasu.jpg"
  },
  {
    id: 6,
    name: 'Dorset Marble Quarry',
    type: 'Quarry',
    maxHeight: 115,
    depth: 20,
    latLong: [43.235, -73.083],
    location: "Vermont",
    photo: "/photos/dorset-quarry.jpg"
  },
  {
    id: 7,
    name: 'Ka Lae',
    type: 'Ocean',
    maxHeight: 75,
    depth: 20,
    latLong: [18.913, -155.682],
    location: "Hawaii",
    photo: "/photos/ka-lae-hawaii.jpg"
  },
  {
    id: 8,
    name: 'Lake Powell',
    type: 'Lake',
    maxHeight: 75,
    depth: 25,
    latLong: [39.960, -106.540],
    location: "Arizona",
    photo: "/photos/lake-powell.webp"
  },
  {
    id: 9,
    name: 'High Falls Park',
    type: 'Waterfall',
    maxHeight: 35,
    depth: 20,
    latLong: [34.401, -86.066],
    location: "Alabama",
    photo: "/photos/high-falls-alabama.webp"
  },
  {
    id: 10,
    name: 'Tar Creek Falls',
    type: 'Waterfall',
    maxHeight: 90,
    depth: 50,
    latLong: [39.960, -106.540],
    location: "California",
    photo: "/photos/tar-creek-ca.jpeg"
  },
  {
    id: 11,
    name: 'Tally Lake',
    type: 'Lake',
    maxHeight: 100,
    depth: 80,
    latLong: [48.389, -114.556],
    location: "Montana",
    photo: "/photos/tally-lake.jpg"
  },
  {
    id: 12,
    name: 'Crater Lake',
    type: 'Lake',
    maxHeight: 35,
    depth: 40,
    latLong: [42.934, -122.164],
    location: "Oregon",
    photo: "/photos/crater-lake.webp"
  },
  {
    id: 13,
    name: 'Punchbowl Falls',
    type: 'Waterfall',
    maxHeight: 80,
    depth: 12,
    latLong: [45.602, -121.635],
    location: "Oregon",
    photo: "/photos/punchbowl-oregon.jpg"
  },
  {
    id: 14,
    name: 'Emerald Pools',
    type: 'River',
    maxHeight: 75,
    depth: 30,
    latLong: [39.320, -120.656],
    location: "California",
    photo: "/photos/emerald-pool-cali.jpg"
  },
  {
    id: 15,
    name: 'Flaming Gorge',
    type: 'Reservoir',
    maxHeight: 50,
    depth: 25,
    latLong: [41.103, -109.542],
    location: "Utah",
    photo: "/photos/flaming-gorge.jpg"
  },
  {
    id: 16,
    name: 'Malibu Creek',
    type: 'River',
    maxHeight: 70,
    depth: 25,
    latLong: [34.098, -118.732],
    location: "California",
    photo: "/photos/malibu-creek.jpg"
  },
  {
    id: 17,
    name: 'Chattahoochee River',
    type: 'River',
    maxHeight: 40,
    depth: 20,
    latLong: [33.986, -84.323],
    location: "Georgia",
    photo: "/photos/chattahoochie.webp"
  },
  {
    id: 18,
    name: "Hell's Gate",
    type: 'Lake',
    maxHeight: 90,
    depth: 40,
    latLong: [32.851, -98.470],
    location: "Texas",
    photo: "/photos/hells-gate.jpeg"
  },
  {
    id: 19,
    name: 'Wolf Creek Falls',
    type: 'Waterfall',
    maxHeight: 50,
    depth: 15,
    latLong: [35.868, -82.932],
    location: "North Carolina",
    photo: "/photos/wolf-creek-nc.jpg"
  },
  {
    id: 20,
    name: '76 Falls',
    type: 'Waterfall',
    maxHeight: 50,
    depth: 20,
    latLong: [36.780, -85.126],
    location: "Kentucky",
    photo: "/photos/76-falls-ky.jpg"
  },
  {
    id: 21,
    name: 'Percy Priest Lake',
    type: 'Lake',
    maxHeight: 50,
    depth: 20,
    latLong: [36.157, -86.617],
    location: "Tennessee",
    photo: "/photos/percy-priest.jpg"
  },
  {
    id: 22,
    name: 'Bash Bish Falls',
    type: 'Waterfall',
    maxHeight: 60,
    depth: 20,
    latLong: [42.115, -73.492],
    location: "Massachusetts",
    photo: "/photos/bash-bish.jpg"
  },
  {
    id: 23,
    name: 'Kinkaid Lake',
    type: 'Lake',
    maxHeight: 70,
    depth: 25,
    latLong: [37.798, -89.437],
    location: "Illinois",
    photo: "/photos/kincaid-illinios.jpg"
  },
  {
    id: 24,
    name: 'Banks Lake',
    type: 'Lake',
    maxHeight: 100,
    depth: 20,
    latLong: [47.820, -119.182],
    location: "Washington",
    photo: "/photos/banks-lake-wash.jpg"
  },
  {
    id: 25,
    name: 'Lake Tahoe',
    type: 'Lake',
    maxHeight: 65,
    depth: 30,
    latLong: [38.986, -120.098],
    location: "Nevada",
    photo: "/photos/lake-tahoe.jpg"
  },
  {
    id: 26,
    name: 'Summersville Lake',
    type: 'Lake',
    maxHeight: 70,
    depth: 30,
    latLong: [38.232, -80.881],
    location: "West Virginia",
    photo: "/photos/summersville-wv.jpg"
  },
  {
    id: 27,
    name: 'Pace Bend Park',
    type: 'River',
    maxHeight: 45,
    depth: 20,
    latLong: [30.459, -98.019],
    location: "Texas",
    photo: "/photos/pace-bend-tx.png"
  },
  {
    id: 28,
    name: 'Canyon Falls',
    type: 'River',
    maxHeight: 40,
    depth: 20,
    latLong: [46.624, -88.475],
    location: "Michigan",
    photo: "/photos/canyon-falls-michigan.jpg"
  },
  {
    id: 29,
    name: "Adam's Creek",
    type: 'River',
    maxHeight: 60,
    depth: 20,
    latLong: [41.262, -74.893],
    location: "Pennsylvania",
    photo: "/photos/adams-creek-penn.jpeg"
  },
  {
    id: 30,
    name: 'Quechee Gorge',
    type: 'Bridge',
    maxHeight: 50,
    depth: 20,
    latLong: [43.637, -72.408],
    location: "Vermont",
    photo: "/photos/quechee-gorge-vt.jpg"
  }
];

app.get('/api/v1/cliffs', (request, response) => {
  const cliffs = app.locals.cliffs;

  response.json({ cliffs });
});

app.get('/api/v1/cliffs/:id', (request, response) => {
  const { id } = request.params;
  const cliff = app.locals.cliffs.find(cliff => cliff.id === id);

  if (!cliff) {
    return response.sendStatus(404)
  }

  response.status(200).json(cliff);
});

app.post('/api/v1/cliffs', (request, response) => {
  const id = app.locals.cliffs.length + 1;
  const { name, type, maxHeight, depth, latLong, photo } = request.body;

  app.locals.pets.push({ id, name, type, maxHeight, depth, latLong, photo });

  response.status(201).json({ id, name, type, maxHeight, depth, latLong, photo });
});

module.exports = app;