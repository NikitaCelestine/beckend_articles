const comments = require("../comments");
const { Op } = require('sequelize');

class RangeComment{
    async getComments (req, res){ 
        console.log(req.body)
        const dateFrom = req.query.dateFrom
        const dateTo = req.query.dateTo              
        const id = req.params.id
        await comments.findAll({
            where: {
                date: {
                    [Op.gte]: dateFrom,
                    [Op.lte]: dateTo
                }
              },
            }).
            then(data => {
                res.json(data)
            }).catch(err=>console.log(err));
        
    };
}

module.exports = new RangeComment()