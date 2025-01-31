const articles = require("../articles");

class Articles_controller {
    async createArticles (req, res){
        const name_articles = req.body.name_articles
        const text_articles = req.body.text_articles
        const date = +new Date()
        await articles.create({name_articles: name_articles, text_articles: text_articles, date: date}).then((data)=>{
            res.json(data)
        }).catch(err=>console.log(err));

      };
    async getArticles (req, res){  
        console.log(req.query)             
        const id = req.params.id
        await articles.findAll({
            where: {
                id: id,
              },
            }).
            then(data => {
                res.json(data)
            }).catch(err=>console.log(err));
        
      };

      async getNameArticles (req, res){  
        console.log(req.query)
        await articles.findAll({
            attributes: ['name_articles', 'id']
            }).
        then(data => {
            res.json(data)
        }).catch(err=>console.log(err));          

        
      };
      
    async updateArticles (req, res){
        console.log('dsff')
        const name_articles = req.body.name_articles;
        const text_articles = req.body.text_articles;
        const date_update = +new Date()
        const id = req.params.id;
        await articles.update({name_articles: name_articles, text_articles: text_articles, date_update: date_update}, {where: {id: id} }).then(()=>{
            res.json('запись обновлена')
        }).catch(err=>console.log(err));
    }
    async deleteArticles (req, res) { 
        const id = req.params.id
        await articles.destroy({where: {id: id} }).then(() => {
            res.json('запись удалена')}).catch(err=>console.log(err));       
    }
}

module.exports = new Articles_controller()