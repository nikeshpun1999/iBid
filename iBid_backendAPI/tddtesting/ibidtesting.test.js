const Profile = require('../Model/Profile');
const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/apitesting';
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
            'firstname': 'hello'


        };

        return Profile.create(profile)
            .then((profile_res) => {
                id = profile_res._id;

                expect(profile_res.firstname).toEqual('hello');
            });
    });
});


// describe('Jobs Schema test', () => {
//     // the code below is for insert testing
//     it('Add job testing', () => {
//         const jobs = {

//             'Title': 'Ezjobs',
//             'Description': '900',
//             'Location': 'alcohol'
//             // 'comments': 'comm'

//         };

//         return jobss.create(jobs)
//             .then((j) => {
//                 expect(j.Title).toEqual('Ezjobs');
//             });
//     });
// });

// describe('Rate Schema test', () => {
//     // the code below is for insert testing
//     it('Rate Product testing', () => {
//         const rate = {
//             'jid': '5dbfaf93cc062614c4e83898',
//             'userid': '5dbfaf93cc062614c4e83897'
//             // 'comments': 'comm'

//         };

//         return ratee.create(rate)
//             .then((j) => {
//                 expect('5dbfaf93cc062614c4e83897').toEqual('5dbfaf93cc062614c4e83897');
//             });
//     });
// });


// describe('contact Schema test', () => {
//     // the code below is for insert testing
//     it('contact testing', () => {
//         const contacts = {

//             'Name': 'Ezjobs',
//             'Email': 'asd"gmail.com',
//             'Phone': '999999'
//             // 'comments': 'comm'

//         };

//         return contact.create(contacts)
//             .then((j) => {
//                 expect(j.Name).toEqual('Ezjobs');
//             });
//     });
// });