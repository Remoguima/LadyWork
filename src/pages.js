const Database = require('./database/db')

const { subjects, weekdays, cities, getSubject} = require('./utils/format')  //construtores estão no arquivo ./utils/format.js

function pageLanding(req,res){
    return res.render("index.html")
}

async function pageStudy(req,res){
    const filters = req.query
    if(!filters.subject || !filters.weekday || !filters.city){
        return res.render("study.html", {filters, subjects, weekdays})
    }

        //em caso de erro na consulta ao BD
        try {
            const db = await Database
            const proffys = await db.all(query) //executa queryes acima

            proffys.map((proffy)=>{
                proffy.subject = getSubject(proffy.subject)
            })

            return res.render('study.html', {proffys, subjects, filters ,weekdays})
            
        } catch (error) {
            console.log(error)
        }
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html", {subjects, weekdays})
}

async function saveClasses(req,res){
    const createProffy = require('./database/createProffy')

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday, index)=>{
        return {
            weekday,
            city
        }
    } )

    try {
        const db = await Database
        await createProffy(db, {proffyValue, classValue, classScheduleValues})
        
        //bloco para redirecionar a pagina para o instrutor recem cadastrado
        let queryString = "?subject=" + req.body.subject
            queryString = "?city=" + req.body.city

        return res.redirect("/study" + queryString)        
        
    } catch (error) {
        console.log(error)
        
    }


}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}