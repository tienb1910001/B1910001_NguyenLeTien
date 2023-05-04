const CustomerService = require("../services/customer.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

// Create and Save a new customers
exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }

    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.create(req.body);
        return res.send(document);        
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the customers")
        );
    }
};

// Update a contact by the id in the request
exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.update(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "customers not found"));
        } 
        return res.send({message: "customers was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500,`Error updating customers with id=${req.params.id}`)
        );
    }
};
exports.findAll = async (req, res, next) => {
    let documents = [];

    try {
        const customerService = new CustomerService(MongoDB.client);
        const {name} = req.query;
        if (name) {
            documents = await customerService.findByName(name);
        } else {
            documents = await customerService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the customers")
        );
    }

    return res.send(documents);
};

exports.findOne = async (req, res, next) => {
    let documents = [];
    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        } 
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500,`Error retrieving contact with id=${req.params.id}`)
        );
    }
};
// Delete a customers with the specified id in the request
exports.delete = async (req, res, next) => {
    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "customers not found"));
        } 
        return res.send({ message: " was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(500,`Could not delete customers with id=${req.params.id}`)
        );
    }
};

// Delete all customer of a customers from the database
exports.deleteAll = async (_req, res, next) => {
    try {
        const customerService = new CustomerService(MongoDB.client);
        const deletedCount = await customerService.deleteAll();
        return res.send({
            message: `${deletedCount} customers were deleted successfully`,
        });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, "An error occurred while removing all customers")
        );
    }
};
