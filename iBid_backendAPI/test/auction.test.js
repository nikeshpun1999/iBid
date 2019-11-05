const Auction = require('../Model/Auction');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/iBidAPITesting';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('Auction Upload Testing', () => {
    // the code below is for insert testing  
    var id = '';
    it('Add Auction', () => {
        const auction = {
            'title': 'Any',
            'shippingCost': '200',
            'country': 'Any',
            'year': 'Any',
            'type': 'any',
            'condition': 'any',
            'auctionImgName': 'Any'
        };
        return Auction.create(auction)
            .then((auction_res) => {
                id = auction_res._id;

                expect(auction_res.title).toEqual('Any');
            });
    });


    // Auction Delete Testing
    it('testing Auction Delete', async () => {
        const status = await
            Auction.deleteMany({
                title: 'any'
            });
        expect(status.ok).toBe(1);
    });
});