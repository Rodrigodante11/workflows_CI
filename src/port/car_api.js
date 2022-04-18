const Cars = require('../application/carss_service');
const Utils = require('../utils/utils');

const route = '/cars';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Cars.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Cars.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Cars.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Cars.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    
};