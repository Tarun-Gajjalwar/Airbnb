const Listing = require('../models/listing.model');


// Get all listings
async function getAllListing(req, res) {
    const allListings = await Listing.find({});
    // res.status(200).json(alllistings);
    res.render("listings/index",{allListings});
}

// show listings
async function showListing(req,res){
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show",{listing});

}

// new listings
async function newListing(req,res){
    res.render("listings/new")
}

// Create a new listing
async function createListing(req, res) {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");


}

// edit a listings
async function editListing(req,res){
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit",{listing});

}

// update listings
async function updateListing(req,res){
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`)
    
}

// delete listings
async function deleteListing(req,res){
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");

}



module.exports = {
    getAllListing,
    showListing,
    newListing,
    createListing,
    editListing,
    updateListing,
    deleteListing


};