const database = require("./database-connection");

module.exports = {
    list(){
        return database('game').select();
    },
    read(id){
        return database('game').select().where('id', id).first();
    },
    create(game){
    },
    update(id, game){
    },
    delete(id){
    }
};
