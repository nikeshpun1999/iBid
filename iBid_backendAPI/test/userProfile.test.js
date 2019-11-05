const Profile = require('../Model/Profile');
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


//schema test of
describe('user Schema test', () => {
    // the code below is for insert testing
    it('Add user testing', () => {
        const profile = {
            'firstname': 'Nikhil',
            'middlename': 'Raj',
            'lastname': 'kapali',
            'address': 'yetkha',
            'about': 'something',
            'phone': '9865',
            'gender': 'male',
            'email': 'any@gmail.com',
            'usertype': 'User',
            'password': 'Any'
        };

        return Profile.create(profile)
            .then((profile_res) => {
                id = profile_res._id;
                expect(profile_res.firstname).toEqual('Nikhil');
            });
    });

    //Test code for Updating User
    it('updateuser testing', () => {
        const userupdate = {
            firstname: 'Ashim'
        }
        console.log(id)
        return Profile.findByIdAndUpdate(id, userupdate, {
            new: true
        }).then((userupdate) => {
            expect(userupdate.firstname).toEqual('Ashim');
        });
    });

    //User Delete Testing
    it('testing User Delete', async () => {
        const status = await
            Profile.deleteMany({
                firstname: 'hello'
            });
        expect(status.ok).toBe(1);
    });
});