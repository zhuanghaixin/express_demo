//导出

var orm=require('orm');

module.exports=orm.express("sqlite://database.sqlite", {
    define: function (db, models, next) {
        models.note = db.define("note", {
            title      : String,
            content   : String
        }); //定义数据库
        models.note.sync();  //创建数据库
        next();
    }
})
//创建数据库