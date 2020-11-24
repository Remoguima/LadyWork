const Database = require ('./db')
const createProffy = require('./createProffy')
const { then } = require('./db')

Database.then( async(db)=> {
    //inserir

    proffyValue = {
        name: 'Mayk',
        avatar: 'https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/42792870_1693242554120211_6500279642098761728_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_eui2=AeHIzBk1eyLfecudgeYSKEz-eQ0gKV0AW0V5DSApXQBbReCtmo7aIDg5RH_Emwz4IoNNPS7SEAHE08D1r6o7CCAb&_nc_ohc=oc4qlTK3XJgAX_lipH-&_nc_ht=scontent.fcgh7-1.fna&oh=4b9ade282728c4fcfd4ef7d413523f58&oe=5F542C68',
        whatsapp: '12345678',
        bio: 'merda'

    }

    classValue = {
        subject: 1,
        cost: '20',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    //consultar classes de um determindado proffy. trazer junto os dados do proffy
    const selectClassesAndProffys = await db.all(`
    SELECT C.*, P.* 
    FROM classes c
    JOIN proffys p ON (c.proffy_id = p.id)
    WHERE c.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //
    const selectClassesSchedules = await db.all(`
        SELECT cs.*
        FROM class_schedule cs
        WHERE cs.class_id = 1
        AND cs.weekday = 0
        AND cs.time_from <= "420"
    `)
    console.log(selectClassesSchedules)

})