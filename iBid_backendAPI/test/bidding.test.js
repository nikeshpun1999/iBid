const Bidding = require('../Model/bidding');
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

describe('Bidding Upload Testing', () => {
    // the code below is for insert testing  
    var id = '';
    it('Add Bid', () => {
        const bid = {
            'auctionId': 'Any',
            'userId': 'any',
            'bidamount': '20000',
            'status': 'Any'
        };
        return Bidding.create(bid)
            .then((bid_res) => {
                id = bid_res._id;

                expect(bid_res.auctionId).toEqual('Any');
            });
    });

    //  Bid Delete Testing
    it('testing Bidding Delete', async () => {
        const status = await
            Bidding.deleteMany({
                auctionId: 'Any'
            });
        expect(status.ok).toBe(1);
    });
});