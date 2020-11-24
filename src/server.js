
//servidor
const express = require('express') //chamando express --> usa para colocar a aplicação no localhost
const server = express() //declara o servidor como sendo a extensão express

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//template engine
const nunjucks = require('nunjucks') //"chamando" a T.E
//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache : true,
})

server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts, imagens...)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start server
.listen(5500)