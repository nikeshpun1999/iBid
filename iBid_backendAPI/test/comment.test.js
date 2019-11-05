const Comment = require('../Model/comment');
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

describe('Comment Upload Testing', () => {
    // the code below is for insert testing  
    var id = '';
    it('Add Comment', () => {
        const data = {
            'auctionID': 'any',
            'userId': 'any',
            'comment': 'Something',
            'rate': '5'
        };
        return Comment.create(data)
            .then((data_res) => {
                id = data_res._id;

                expect(data_res.auctionID).toEqual('any');
            });
    });

    // Table Delete Testing
    it('testing Comment Delete', async () => {
        const status = await
            Comment.deleteMany({
                auctionID: 'any'
            });
        expect(status.ok).toBe(1);
    });

});