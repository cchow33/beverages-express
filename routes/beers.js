const express = require('express');
const router = express.Router();

const beers = [
  { id: '1', name: 'IPA' },
  { id: '2', name: 'Stout' },
  { id: '3', name: 'Brown' },
  { id: '4', name: 'Pilsner' }
];

// Param middlewware function gets invoked any time a route comes in that uses the :beer parameter. 
router.param('beer', function(req, res, next, id) {
  req.beer = beers.find(beer => beer.id === id);
  next();
});

// Why is this a duplicate of the same home route?
router.get('/:beer', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

router.get('/:beer/reviews', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

module.exports = router;