const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fs = require('firebase-admin');
const serviceAccount = require('./firebase.json')

app.set("view engine", "ejs")
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.listen(PORT, (req, res) => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.get('/getAllStudentsData', async (req, res) => {
    if (!fs.apps.length) {
        fs.initializeApp({
            credential: fs.credential.cert(serviceAccount)
        });
    }

    const db = fs.firestore();
    const data = await db.collection('applications').get()
    return res.status(200).send(data.docs.map(doc => doc.data()));
});

app.get('/getStudent/:id', async (req, res) => {
    if (!fs.apps.length) {
        fs.initializeApp({
            credential: fs.credential.cert(serviceAccount)
        });
    }

    const id = req.params.id
    const db = fs.firestore();
    const collections = db.collection('applications')
    const collection = await collections.get()
    const data = collection.docs.map(doc => doc.data())

    let sent = false
    data.forEach(d => {
        if(d['id'] == id) {
            sent = true
            return res.status(200).send(d);
        }
    });

    if(!sent)
        res.status(200).send(null)
})

app.post('/webDevStudents', async (req, res) => {
    const inDefaultMode = req.body.inDefaultMode

    if (!fs.apps.length) {
        fs.initializeApp({
            credential: fs.credential.cert(serviceAccount)
        });
    }
    const db = fs.firestore();
    const collection = await db.collection('applications').get()
    let data = collection.docs.map(doc => doc.data())
    let i = 0;
    while(data[i] != undefined) {
        let webdevScore = 0
        if(inDefaultMode) {
            webdevScore = (parseFloat(data[i]['backend']) + parseFloat(data[i]['frontend']) + parseFloat(data[i]['database'])) / 3.0
        } else {
            let backendWeight = parseInt(parseFloat(req.body.backend) / 10)
            let frontendWeight = parseInt(parseFloat(req.body.frontend) / 10)
            let databaseWeight = parseInt(parseFloat(req.body.database) / 10)
            const total = backendWeight + frontendWeight + databaseWeight
            webdevScore = (backendWeight * parseFloat(data[i]['backend']) + frontendWeight * parseFloat(data[i]['frontend']) + databaseWeight * parseFloat(data[i]['database'])) / total
        }
        data[i]['webdevScore'] = webdevScore
        i++;
    }
    data.sort((a, b) => {
        if(a['webdevScore'] == b['webdevScore']) {
            if(b['cgpa'] = a['cgpa']) {
                return b['problem_solving_and_aptitude'] - a['problem_solving_and_aptitude']
            } else {
                return b['cgpa'] - a['cgpa']
            }
        }
        return b['webdevScore'] - a['webdevScore']
    })
    return res.send(data)
})

app.post('/appdevStudents', async (req, res) => {
    const inDefaultMode = req.body.inDefaultMode

    if (!fs.apps.length) {
        fs.initializeApp({
            credential: fs.credential.cert(serviceAccount)
        });
    }
    const db = fs.firestore();
    const collection = await db.collection('applications').get()
    let data = collection.docs.map(doc => doc.data())
    let i = 0;
    while(data[i] != undefined) {
        let appdevScore = 0
        if(inDefaultMode) {
            appdevScore = (parseFloat(data[i]['android']) + parseFloat(data[i]['ios']) + parseFloat(data[i]['cross_platform'])) / 3.0
        } else {
            let androidWeight = parseInt(parseFloat(req.body.android) / 10)
            let iosWeight = parseInt(parseFloat(req.body.ios) / 10)
            let cross_platformWeight = parseInt(parseFloat(req.body.cross_platform) / 10)
            const total = androidWeight + iosWeight + cross_platformWeight
            appdevScore = (androidWeight * parseFloat(data[i]['android']) + iosWeight * parseFloat(data[i]['ios']) + cross_platformWeight * parseFloat(data[i]['cross_platform'])) / total
        }
        data[i]['appdevScore'] = appdevScore
        i++;
    }
    data.sort((a, b) => {
        if(a['appdevScore'] == b['appdevScore']) {
            if(b['cgpa'] = a['cgpa']) {
                if(b['problem_solving_and_aptitude'] = a['problem_solving_and_aptitude']) {
                    return b['version_control_systems'] - a['version_control_systems']
                } else {
                    return b['problem_solving_and_aptitude'] - a['problem_solving_and_aptitude']
                }
            } else {
                return b['cgpa'] - a['cgpa']
            }
        }
        return b['appdevScore'] - a['appdevScore']
    })
    return res.send(data)
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, we are currently not serving the page you requested')
})