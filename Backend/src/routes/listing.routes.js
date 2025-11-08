const express = require('express');
const listingController = require('../controllers/listing.controller');

const router = express.Router();

// get all listings
router.get('/', listingController.getAllListing); 
// new listings
router.get('/new',listingController.newListing);
// show listings
router.get('/:id',listingController.showListing);
// create listings
router.post('/',listingController.createListing); 
// edit listings
router.get('/:id/edit',listingController.editListing);
// update listings
router.put('/:id',listingController.updateListing);
// delete listings
router.delete('/:id',listingController.deleteListing);






module.exports = router;