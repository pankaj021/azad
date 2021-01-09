const moment = require('moment');

module.exports = {
    res: (doc) => ({
        id: doc._id,
        name: doc.name || "",
        phone: doc.phone || "",
        email: doc.email || "",
        createdBy: doc.createdBy || "",
        updatedBy: doc.updatedBy || "",
        createdAt: moment(doc.createdAt).format("LL") || "",
        updatedAt: moment(doc.updatedAt).format("LL")  || "",
    })
}
