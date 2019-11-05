const Like = require('../Model/like');
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

describe('Like Upload Testing', () => {
    // the code below is for insert testing  
    var id = '';
    it('Add Like', () => {
        const likeCount = {
            'auctionId': 'any',
            'userId': 'any',
            'like': '5'
        };
        return Like.create(likeCount)
            .then((likeCount_res) => {
                id = likeCount_res._id;

                expect(likeCount_res.auctionId).toEqual('any');
            });
    });

    // Like Delete Testing
    it('testing Like Delete', async () => {
        const status = await
            Like.deleteMany({
                auctionId: 'any'
            });
        expect(status.ok).toBe(1);
    });

});