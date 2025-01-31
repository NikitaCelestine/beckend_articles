const comments = require("../comments");
const { Op } = require('sequelize')


class Comments_controller {
    async createComments (req, res){
        const id = req.params.id        
        const text_comment = req.body.text_comment
        const date = +new Date()
        await comments.create({text_comment: text_comment, date: date, articleId: id}).then(data => {
            res.json(data)
        }).catch(err=>console.log(err));

      };
    async getComments (req, res){            
        const id = req.params.id
        await comments.findAll({
            where: {
                articleId: id,
              },
            }).
            then(data => {
                res.json(data)
            }).catch(err=>console.log(err));
        
      };
      
    async updateComments (req, res){
        console.log(req.params.comment_id)
        const text_comment = req.body.text_comment;
        const date_update = +new Date()
        const id = req.params.id;
        const comment_Id = req.params.comment_id;
        
        await comments.update({text_comment: text_comment,  date_update: date_update},  {where: {[Op.and]: [{ articleId: id }, { id: comment_Id }]}}).then(()=>{
            res.json('комментарий обновлен')
        }).catch(err=>console.log(err));
    }
    async deleteComments (req, res) { 
        const comment_Id = req.params.comment_id;
        const id = req.params.id
        await comments.destroy({where: {[Op.and]: [{ articleId: id }, { id: comment_Id }]}}).then(() => {
            res.json('комментарий удален')}).catch(err=>console.log(err));       
    }
}

module.exports = new Comments_controller()