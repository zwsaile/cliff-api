const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    photo: "https://www.outsideonline.com/wp-content/uploads/migrated-images_parent/migrated-images_65/summer-cliff-jumping-colorado_s.jpg"
  },
  {
    id: 2,
    name: 'Eleven Mile State Park',
    type: 'Reservoir',
    maxHeight: 55,
    depth: 30,
    latLong: [38.929, -105.497],
    location: "Colorado",
    photo: "https://images.fineartamerica.com/images-medium-large-5/colorado-mountain-harbour-marlene-finn.jpg"
  },
  {
    id: 3,
    name: 'Guernsey State Park',
    type: 'Reservoir',
    maxHeight: 55,
    depth: 40,
    latLong: [42.320, -104.791],
    location: "Wyoming",
    photo: "https://media.glampinghub.com/collections/glendo-state-park-camping-glamping-98b21d23-8187-46e6-b134-5eedd46f56b6.jpg"
  },
  {
    id: 4,
    name: 'Green Mountain Reservoir',
    type: 'Reservoir',
    maxHeight: 70,
    depth: 40,
    latLong: [39.871, -106.278],
    location: "Colorado",
    photo: "https://www.visitgrandcounty.com/resources/media/user/1561656244-14743074735_eb90ddb2cd_o_(1)_desktop.jpg"
  },
  {
    id: 5,
    name: 'Havasu Falls',
    type: 'Waterfall',
    maxHeight: 120,
    depth: 40,
    latLong: [36.255, -112.697],
    location: "Arizona",
    photo: "https://i.pinimg.com/736x/5e/b8/33/5eb833ad6c7ce4e138e06e236e009f58.jpg"
  },
  {
    id: 6,
    name: 'Dorset Marble Quarry',
    type: 'Quarry',
    maxHeight: 115,
    depth: 20,
    latLong: [43.235, -73.083],
    location: "Vermont",
    photo: "https://vtskiandride.com/wp-content/uploads/2019/06/4736_AliKaukas-copy.jpg"
  },
  {
    id: 7,
    name: 'Ka Lae',
    type: 'Ocean',
    maxHeight: 75,
    depth: 20,
    latLong: [18.913, -155.682],
    location: "Hawaii",
    photo: "https://elanaloo.com/wp-content/uploads/2016/04/IMG_1717.jpg"
  },
  {
    id: 8,
    name: 'Lake Powell',
    type: 'Lake',
    maxHeight: 75,
    depth: 25,
    latLong: [39.960, -106.540],
    location: "Arizona",
    photo: "https://external-preview.redd.it/9PgFJSeyHuBh1PqAgUmFO9oKqmLNmCaftUOKb8S_rhQ.jpg?auto=webp&s=8ea2a3392d00706e5d38ba9edf2f88f9980e1c1a"
  },
  {
    id: 9,
    name: 'High Falls Park',
    type: 'Waterfall',
    maxHeight: 35,
    depth: 20,
    latLong: [34.401, -86.066],
    location: "Alabama",
    photo: "https://external-preview.redd.it/MuodnUj0PvRcn5FbutwQJhJ1A_9W_4aORq2AZEtNXI0.jpg?auto=webp&s=eff6bec2479842aa2846f7ab18825799efc6c820"
  },
  {
    id: 10,
    name: 'Tar Creek Falls',
    type: 'Waterfall',
    maxHeight: 90,
    depth: 50,
    latLong: [39.960, -106.540],
    location: "California",
    photo: "https://thumbor.thedailymeal.com/tuhErVkj8RfQC2nNy1COEDhoQfg=//https://www.theactivetimes.com/sites/default/files/uploads/2/2%20Tar%20creek%20falls-youtube%20(2).jpg"
  },
  {
    id: 11,
    name: 'Tally Lake',
    type: 'Lake',
    maxHeight: 100,
    depth: 80,
    latLong: [48.389, -114.556],
    location: "Montana",
    photo: "https://thedyrt.imgix.net/photo/40720/photo/montana-tally-lake-campground_9df01f7e73fa58cb76a1f3109c0460b9.jpg"
  },
  {
    id: 12,
    name: 'Crater Lake',
    type: 'Lake',
    maxHeight: 35,
    depth: 40,
    latLong: [42.934, -122.164],
    location: "Oregon",
    photo: "https://cdn.wearetravelgirls.com/spai/w_774+q_glossy+ret_img+to_webp/https://wearetravelgirls.com/wp-content/uploads/2017/02/Crater_Lake_Jump.jpg"
  },
  {
    id: 13,
    name: 'Punchbowl Falls',
    type: 'Waterfall',
    maxHeight: 80,
    depth: 12,
    latLong: [45.602, -121.635],
    location: "Oregon",
    photo: "https://live.staticflickr.com/4126/5051938988_1b8650cb06_b.jpg"
  },
  {
    id: 14,
    name: 'Emerald Pools',
    type: 'River',
    maxHeight: 75,
    depth: 30,
    latLong: [39.320, -120.656],
    location: "California",
    photo: "https://submergemag.com/wp-content/uploads/2016/08/Zach-Liptak-Submerge-EMERALDPOOLS-1-638x960.jpg"
  },
  {
    id: 15,
    name: 'Flaming Gorge',
    type: 'Reservoir',
    maxHeight: 50,
    depth: 25,
    latLong: [41.103, -109.542],
    location: "Utah",
    photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/643e18a7-7473-4610-805e-c6bf53075a47/do3tkq-ff5f53d3-63b0-48b1-b270-5cbca4d2ca32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0M2UxOGE3LTc0NzMtNDYxMC04MDVlLWM2YmY1MzA3NWE0N1wvZG8zdGtxLWZmNWY1M2QzLTYzYjAtNDhiMS1iMjcwLTVjYmNhNGQyY2EzMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.u3P3QbCSooaBalpKsk1H8-oq436o-Mi3FFa9qF4n7gU"
  },
  {
    id: 16,
    name: 'Malibu Creek',
    type: 'River',
    maxHeight: 70,
    depth: 25,
    latLong: [34.098, -118.732],
    location: "California",
    photo: "http://adventureavenuela.yolasite.com/resources/AZTECFALLS.jpg.opt470x313o0%2C0s470x313.jpg"
  },
  {
    id: 17,
    name: 'Chattahoochee River',
    type: 'River',
    maxHeight: 40,
    depth: 20,
    latLong: [33.986, -84.323],
    location: "Georgia",
    photo: "https://preview.redd.it/6ppz9eikmpc51.jpg?auto=webp&s=c9aa9e4482b02a68124a9f3e31b80938b710d0ad"
  },
  {
    id: 18,
    name: "Hell's Gate",
    type: 'Lake',
    maxHeight: 90,
    depth: 40,
    latLong: [32.851, -98.470],
    location: "Texas",
    photo: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,q_65/v1/clients/dallasites101/Screen_Shot_2021_06_27_at_3_59_29_PM_08a850a5-7b9f-4dbf-a484-0065d4c08180.png"
  },
  {
    id: 19,
    name: 'Wolf Creek Falls',
    type: 'Waterfall',
    maxHeight: 50,
    depth: 15,
    latLong: [35.868, -82.932],
    location: "North Carolina",
    photo: "https://ic.pics.livejournal.com/flyminion/14007242/433852/433852_original.jpg"
  },
  {
    id: 20,
    name: '76 Falls',
    type: 'Waterfall',
    maxHeight: 50,
    depth: 20,
    latLong: [36.780, -85.126],
    location: "Kentucky",
    photo: "https://images.world-of-waterfalls.com/Seventy_Six_Falls_053_20121023.jpg"
  },
  {
    id: 21,
    name: 'Percy Priest Lake',
    type: 'Lake',
    maxHeight: 50,
    depth: 20,
    latLong: [36.157, -86.617],
    location: "Tennessee",
    photo: "https://res.cloudinary.com/rayka/image/upload/dfxakipipszg99d2oskc"
  },
  {
    id: 22,
    name: 'Bash Bish Falls',
    type: 'Waterfall',
    maxHeight: 60,
    depth: 20,
    latLong: [42.115, -73.492],
    location: "Massachusetts",
    photo: "https://live.staticflickr.com/5523/9496941466_a6f9d4fdd6_b.jpg"
  },
  {
    id: 23,
    name: 'Kinkaid Lake',
    type: 'Lake',
    maxHeight: 70,
    depth: 25,
    latLong: [37.798, -89.437],
    location: "Illinois",
    photo: "https://yourdream.s3.amazonaws.com/media/cache/ac/22/ac22c1524a687fa0f00ef9553b9ab88d.jpg"
  },
  {
    id: 24,
    name: 'Banks Lake',
    type: 'Lake',
    maxHeight: 100,
    depth: 20,
    latLong: [47.820, -119.182],
    location: "Washington",
    photo: "https://icliffdive.com/wp-content/uploads/2018/06/Banks-Lake-Banks-Lake-WA-4.jpg"
  },
  {
    id: 25,
    name: 'Lake Tahoe',
    type: 'Lake',
    maxHeight: 65,
    depth: 30,
    latLong: [38.986, -120.098],
    location: "Nevada",
    photo: "https://tahoequarterly.com/wp-content/uploads/2018/06/Salm_DL-Huck_030-2.jpg"
  },
  {
    id: 26,
    name: 'Summersville Lake',
    type: 'Lake',
    maxHeight: 70,
    depth: 30,
    latLong: [38.232, -80.881],
    location: "West Virginia",
    photo: "https://ak.picdn.net/offset/photos/5d1cde3b469b183482a1b6f6/medium/photo.jpg"
  },
  {
    id: 27,
    name: 'Pace Bend Park',
    type: 'River',
    maxHeight: 45,
    depth: 20,
    latLong: [30.459, -98.019],
    location: "Texas",
    photo: "https://media2.sacurrent.com/sacurrent/imager/u/zoom/21262008/pace_bend.png?cb=1642783254"
  },
  {
    id: 28,
    name: 'Canyon Falls',
    type: 'River',
    maxHeight: 40,
    depth: 20,
    latLong: [46.624, -88.475],
    location: "Michigan",
    photo: "https://upper-michigan.com/wp-content/uploads/2015/10/Canyon-Falls-Rock-Ledges.jpg"
  },
  {
    id: 29,
    name: "Adam's Creek",
    type: 'River',
    maxHeight: 60,
    depth: 20,
    latLong: [41.262, -74.893],
    location: "Pennsylvania",
    photo: "https://images.squarespace-cdn.com/content/v1/5246e69de4b0b724ccf73ddf/1468806505623-7PBXPXYK3MP93ZXE7A2W/cliff-jumping-adams-creek"
  },
  {
    id: 30,
    name: 'Quechee Gorge',
    type: 'Bridge',
    maxHeight: 50,
    depth: 20,
    latLong: [43.637, -72.408],
    location: "Vermont",
    photo: "https://vtsports.com/wp-content/uploads/2018/07/Ali-Kaukas-WEB-1024x684.jpg"
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

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;