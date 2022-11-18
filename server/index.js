const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
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
                if(b['problem_solving_and_aptitude'] = a['problem_solving_and_aptitude']) {
                    return b['version_control_systems'] - a['version_control_systems']
                } else {
                    return b['problem_solving_and_aptitude'] - a['problem_solving_and_aptitude']
                }
            } else {
                return b['cgpa'] - a['cgpa']
            }
        }
        return b['webdevScore'] - a['webdevScore']
    })
    return res.status(200).send(data)
})

app.post('/appDevStudents', async (req, res) => {
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
    return res.status(200).send(data)
})

app.post('/dataScienceStudents', async (req, res) => {
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
        let datascienceScore = 0
        if(inDefaultMode) {
            datascienceScore = (parseFloat(data[i]['python']) + parseFloat(data[i]['multivariate_calculus_linear_algebra']) + parseFloat(data[i]['probability_statistics'])) / 3.0
        } else {
            let pythonWeight = parseInt(parseFloat(req.body.python) / 10)
            let multivariate_calculus_linear_algebraWeight = parseInt(parseFloat(req.body.multivariate_calculus_linear_algebra) / 10)
            let probability_statisticsWeight = parseInt(parseFloat(req.body.probability_statistics) / 10)
            const total = pythonWeight + multivariate_calculus_linear_algebraWeight + probability_statisticsWeight
            datascienceScore = (pythonWeight * parseFloat(data[i]['python']) + multivariate_calculus_linear_algebraWeight * parseFloat(data[i]['multivariate_calculus_linear_algebra']) + probability_statisticsWeight * parseFloat(data[i]['probability_statistics'])) / total
        }
        data[i]['datascienceScore'] = datascienceScore
        i++;
    }
    data.sort((a, b) => {
        if(a['datascienceScore'] == b['datascienceScore']) {
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
        return b['datascienceScore'] - a['datascienceScore']
    })
    return res.status(200).send(data)
})

app.post('/machineLearningStudents', async (req, res) => {
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
        let machinelearningScore = 0
        if(inDefaultMode) {
            machinelearningScore = (parseFloat(data[i]['python']) + parseFloat(data[i]['multivariate_calculus_linear_algebra']) + parseFloat(data[i]['probability_statistics']) + parseFloat(data[i]['ml_algorithms'])) / 4.0
        } else {
            let pythonWeight = parseInt(parseFloat(req.body.python) / 10)
            let multivariate_calculus_linear_algebraWeight = parseInt(parseFloat(req.body.multivariate_calculus_linear_algebra) / 10)
            let probability_statisticsWeight = parseInt(parseFloat(req.body.probability_statistics) / 10)
            let ml_algorithmsWeight = parseInt(parseFloat(req.body.ml_algorithms) / 10)
            const total = pythonWeight + multivariate_calculus_linear_algebraWeight + probability_statisticsWeight + ml_algorithmsWeight
            machinelearningScore = (pythonWeight * parseFloat(data[i]['python']) + multivariate_calculus_linear_algebraWeight * parseFloat(data[i]['multivariate_calculus_linear_algebra']) + probability_statisticsWeight * parseFloat(data[i]['probability_statistics']) + ml_algorithmsWeight * parseFloat(data[i]['ml_algorithms'])) / total
        }
        data[i]['machinelearningScore'] = machinelearningScore
        i++;
    }
    data.sort((a, b) => {
        if(a['machinelearningScore'] == b['machinelearningScore']) {
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
        return b['machinelearningScore'] - a['machinelearningScore']
    })
    return res.status(200).send(data)
})

app.post('/cyberSecurityStudents', async (req, res) => {
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
        let cybersecurityScore = 0
        if(inDefaultMode) {
            cybersecurityScore = (parseFloat(data[i]['operating_system']) + parseFloat(data[i]['communication_networks'])) / 2.0
        } else {
            let operating_systemWeight = parseInt(parseFloat(req.body.operating_system) / 10)
            let communication_networksWeight = parseInt(parseFloat(req.body.communication_networks) / 10)
            const total = operating_systemWeight + communication_networksWeight
            cybersecurityScore = (operating_systemWeight * parseFloat(data[i]['operating_system']) + communication_networksWeight * parseFloat(data[i]['communication_networks'])) / total
        }
        data[i]['cybersecurityScore'] = cybersecurityScore
        i++;
    }
    data.sort((a, b) => {
        if(a['cybersecurityScore'] == b['cybersecurityScore']) {
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
        return b['cybersecurityScore'] - a['cybersecurityScore']
    })
    return res.status(200).send(data)
})

app.post('/softwareDeveloperStudents', async (req, res) => {
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
        let softwaredeveloperScore = 0
        if(inDefaultMode) {
            softwaredeveloperScore = (parseFloat(data[i]['data_structures']) + parseFloat(data[i]['algorithms']) + parseFloat(data[i]['problem_solving_and_aptitude'])) / 3.0
        } else {
            let data_structuresWeight = parseInt(parseFloat(req.body.data_structures) / 10)
            let algorithmsWeight = parseInt(parseFloat(req.body.algorithms) / 10)
            let problem_solving_and_aptitudeWeight = parseInt(parseFloat(req.body.problem_solving_and_aptitude) / 10)
            const total = data_structuresWeight + algorithmsWeight + problem_solving_and_aptitudeWeight
            softwaredeveloperScore = (data_structuresWeight * parseFloat(data[i]['data_structures']) + algorithmsWeight * parseFloat(data[i]['algorithms']) + problem_solving_and_aptitudeWeight * parseFloat(data[i]['problem_solving_and_aptitude'])) / total
        }
        data[i]['softwaredeveloperScore'] = softwaredeveloperScore
        i++;
    }
    data.sort((a, b) => {
        if(a['softwaredeveloperScore'] == b['softwaredeveloperScore']) {
            if(b['cgpa'] = a['cgpa']) {
                if(b['operating_system'] = a['operating_system']) {
                    return b['version_control_systems'] - a['version_control_systems']
                } else {
                    return b['operating_system'] - a['operating_system']
                }
            } else {
                return b['cgpa'] - a['cgpa']
            }
        }
        return b['softwaredeveloperScore'] - a['softwaredeveloperScore']
    })
    return res.status(200).send(data)
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, we are currently not serving the page you requested')
})