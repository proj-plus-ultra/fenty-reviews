const db = require('./index.js');

module.exports = {
    getUsers: (cb) => {
        var usrQueryStr = 'SELECT * FROM user_info';
        db.query(usrQueryStr, (err, res) => {
            cb(err, res);
        });
    },
    getReviews: (cb) => {
        var revQueryStr = 'SELECT * FROM review';
        db.query(revQueryStr, (err, res) => {
            cb(err, res);
        })
    }
}