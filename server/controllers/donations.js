const {
    createDonation,
    findDonationById,
    findAllDonations,
    updateDonationById,
    deleteDonationById,
    findDonationsByTargetId,
    findDonationsByEmail,
} = require('../use-cases/donation');
const {findAllContributors} = require('../use-cases/contributor');
const Donation = require('../entities/Donation');
const {NoResourceFound, ResourceAlreadyExists} = require('../middlewares/errors');

const getContributorsObj = async () => {
    const items = await findAllContributors();
    const obj = {};
    items.forEach(({email, name}) => obj[email] = name);
    return obj;
}

module.exports = {
    getAll: async(req, res, next) => {
        try {
            const [items, contributorsObj] = await Promise.all([
                findAllDonations(), 
                getContributorsObj()
            ]);
            res.status(200).json(items.map(item => Donation.res({
                ...item, 
                donatedBy: contributorsObj[item.donatedBy] || item.donatedBy
            })));
        } catch (error) {
            next(error);
        }
    }, 
    getOne: async (req, res, next) => {
        try {
            const [item, contributorsObj] = await Promise.all([
                findDonationById(req.params.id),
                getContributorsObj()
            ]);
            if(!item){
                throw new NoResourceFound();
            } 
            res.status(200).json(Donation.res({
                ...item, 
                donatedBy: contributorsObj[item.donatedBy] || item.donatedBy
            }));
        } catch (error) {
            next(error);
        }
    }, 
    createOne: async (req, res, next) => {
        try {
            const {target, amount, donatedBy} = req.body;
            const user = req.AZAD_USER;            
            const doc = {
                target,
                amount,
                donatedBy,
                createdBy: user.email,
                updatedBy: user.email,
            }
            const item = await createDonation(doc);
            const contributorsObj = await getContributorsObj();
            const [item, contributorsObj] = await Promise.all([
                await createDonation(doc),
                getContributorsObj()
            ]);
            res.status(200).json(Donation.res({
                ...item, 
                donatedBy: contributorsObj[item.donatedBy] || item.donatedBy
            }));
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }
    }, 
    updateOne: async (req, res, next) => {
        try {
            const {title, description, amount} = req.body;
            const id = req.params.id;
            const user = req.AZAD_USER;            
            const existingDoc = await findDonationById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                const doc = {
                    updatedBy: user.email,
                    updatedAt: new Date(),
                }
                if(title) doc.title = title;
                if(description) doc.description = description;
                if(amount) doc.amount = amount;
                const item = await updateDonationById(id, doc);
            const contributorsObj = await getContributorsObj();
                res.status(200).json(Donation.res({
                    ...item, 
                    donatedBy: contributorsObj[item.donatedBy] || item.donatedBy
                }));
            }
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return next(new ResourceAlreadyExists('This document already exists.'));
            }
            next(error);
        }  
    }, 
    deleteOne: async (req, res, next) => {
        try {
            const id = req.params.id;
            const existingDoc = await findDonationById(id);
            if(!existingDoc){
                throw new NoResourceFound();
            } else {
                await deleteDonationById(id);
                res.status(200).json();
            }
        } catch (error) {
            next(error);
        }
    }
}