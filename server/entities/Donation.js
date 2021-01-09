const moment = require('moment');

module.exports = {
    res: (doc) => {
        return {
            _id: doc._id,
            target: doc.target || "",
            amount: doc.amount || "",
            donatedBy: doc.donatedBy || "",
            createdBy: doc.createdBy || "",
            updatedBy: doc.updatedBy || "",
            createdAt: moment(doc.createdAt).format("LL") || "",
            updatedAt: moment(doc.updatedAt).format("LL")  || "",
        }
    }
}