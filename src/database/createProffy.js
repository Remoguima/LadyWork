module.exports = async function(db,{proffyValue, classValue, classScheduleValues}){ //await só funciona com o async
    //inserir dados na tabela proffys
    //await deixa a execução "parada" enquanto não finaliza instrução atual
    const insertedProffy = await db.run(`
    INSERT INTO proffys (
        name,
        avatar,
        whatsapp,
        bio
    ) VALUES (
        "${proffyValue.name}",
        "${proffyValue.avatar}",
        "${proffyValue.whatsapp}",
        "${proffyValue.bio}"
    );    
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedClasss = await db.run(`
        INSERT INTO classes(
            subject,
            cost,
            proffy_id
        ) VALUES(
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        )
    `)

    const class_id = insertedClasss.lastID


    //inserir dados na tabela class Schedules
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{ //map é um tipo de loop que gera um novo array com os dados retornados
        return db.run(`
            INSERT INTO class_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            ) 
            VALUES(
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //executar todos os "db.run" das class_chedules
    await Promise.all(insertedAllClassScheduleValues) 

}