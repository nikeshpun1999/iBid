const AuctionRegister = require('../Model/auctionregister');
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

describe('Register Auction Upload Testing', () => {
    // the code below is for insert testing  
    var id = '';
    it('Auction Registered', () => {
        const auctionRegis = {
            'auctionId': 'Any',
            'userId': 'any',
            'auctionUsertype': 'Any'
        };
        return AuctionRegister.create(auctionRegis)
            .then((auctionRegis_res) => {
                id = auctionRegis_res._id;

                expect(auctionRegis_res.auctionUsertype).toEqual('Any');
            });
    });

    //  Auction Register Delete Testing
    it('testing Bidding Delete', async () => {
        const status = await
            AuctionRegister.deleteMany({
                auctionId: 'Any'
            });
        expect(status.ok).toBe(1);
    });
});