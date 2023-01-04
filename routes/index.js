const express = require('express');
const router = express.Router();

// Task: Implement a beer api using the following JavaScript Object from assignment:

const beers = [
  { 
    "id": 1, 
    "name": "512 IPA",
    "reviews": [{ "id": 1, "text": "delicious" }
    ]
  },
  { 
    "id": 2, 
    "name": "Durty Bull Brett",
    "reviews": [
      { "id": 2, "text": "why is Brett in the name?" },
      { "id": 3, "text": "Brett, or brat? Yuck!" },
      { "id": 4, "text": "Mmmm this is so good." },
      { "id": 5, "text": "Q Dogs!" },
      { "id": 6, "text": "^ Megan, is that you!?" }
    ]
  },
  { 
    "id": 3, 
    "name": "Dogfish Head 90 Minute IPA",
    "reviews": []
  },
  { 
    "id": 4, 
    "name": "Chocolate stout",
    "reviews": [
      { "id": 7, "text": "too much Chocolate" },
      { "id": 8, "text": "so yummy" },
      { "id": 9, "text": "the best!" }
    ]
  }
]

// Create the following routes:
//  1. Homepage displays JSON beers object:
router.get('/beers', (req, res) => {
  res.json(beers);
});

// 2. Route to a specific beer:
router.get('/beers/:beer', (req, res) => {
  const beer = beers.find(b => b.id === Number(req.params.beer));
  res.json(beer);
})

// 3. Route to ALL reviews (NOT WORKING):
router.get('/beers/reviews', (req, res) => {
  // const allReviews = beers.map(b => b.reviews)
  // console.log(allReviews); 
  res.json({ message: 'test'});
})

// 3. Route to all reviews for a specific beer (NOT WORKING):
router.get('/beers/:beer/reviews', (req, res) => {
  const beerReviews = beers.find(b => b.reviews === req.params.reviews);
  res.json(beerReviews);
})

// 4. Route to add a new beer:
router.put('/beers/:beer', (req, res) => {
  const newBeer = 
    { 
      "id": 5, 
      "name": "Molson Canadian",
      "reviews": [{ "id": 5, "text": "So Canadian" }
      ]
    }
  beers.push(newBeer);
  res.json(beers);
});

// 5. Route to delete a beer:
router.delete('/beers/:beer', (req, res) => {
  const beerIndex = beers.findIndex(b => b.id === Number(req.params.beer));
  console.log(beerIndex);
  console.log(req.params.beer, typeof req.params.beer);
  beers.splice(beerIndex, 1);
  res.json(beers);
});

// 6. Route to delete the review for a beer:
router.delete('/beers/:beer/reviews', (req, res) => {
  const beerIndex = beers.find(b => b.reviews === req.params.reviews);
  beers.splice(beerIndex, 1);
  // res.json(beers);
  res.json({ message: 'Review deleted'});
});

module.exports = router;