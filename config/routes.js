module.exports = app => {
    app.route('/users') //consig acessa todas variaveis de app de diferent arquivos
        .post(app.api.user.save) 
}