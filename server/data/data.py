from faker import Faker
import random
import csv
import firebase_admin
from firebase_admin import credentials, firestore
fake = Faker()

# cred = credentials.Certificate("devathon-33889-firebase-adminsdk.json")
# firebase_admin.initialize_app(cred, {
#     'databaseURL': 'https://solution-makers.firebaseio.com'
# })

# db = firestore.client()
# doc_ref = db.collection(u'applications')

TRAINING_DATA_SIZE = 300

fields = ["id",
    "name",
    "cgpa",
    "backend",
    "frontend",
    "database",
    "android",
    "ios",
    "cross_platform",
    "version_control_systems",
    "python",
    "multivariate_calculus_linear_algebra",
    "ml_algorithms",
    "communication_networks",
    "operating_system",
    "data_structures",
    "algorithms",
    "problem_solving_aptitude",
    "resumes"
]

DATA_FILE_NAME = "data.csv"

RESUME_LINKS = [
    "https://drive.google.com/file/d/1itqKZl2xKioEdFnoR1EHOQxZG4q_NpKo/view",
    "https://drive.google.com/file/d/1hQn6N6r6uV5hm_UH5PNi6zVFF4QAzq7p/view?usp=drivesdk",
    "https://drive.google.com/file/d/10ssHE1XZVfGH-09LN9Yp0KCGbQXuATCv/view?ts=637670d1"
]

names = []
cgpa = []
backend = []
frontend = []
database = []
android = []
ios = []
cross_platform = []
version_control_systems = []
python = []
multivariate_calculus_linear_algebra = []
probability_statistics = []
ml_algorithms = []
communication_networks = []
operating_system = []
data_structures = []
algorithms = []
problem_solving_aptitude = []
resumes = []

for i in range(TRAINING_DATA_SIZE):
    names.append(fake.name())
    cgpa.append(random.uniform(5, 10))
    backend.append(random.randint(0, 10))
    frontend.append(random.randint(0, 10))
    database.append(random.randint(0, 10))
    android.append(random.randint(0, 10))
    ios.append(random.randint(0, 10))
    cross_platform.append(random.randint(0, 10))
    version_control_systems.append(random.randint(0, 10))
    python.append(random.randint(0, 10))
    multivariate_calculus_linear_algebra.append(random.randint(0, 10))
    probability_statistics.append(random.randint(0, 10))
    ml_algorithms.append(random.randint(0, 10))
    communication_networks.append(random.randint(0, 10))
    operating_system.append(random.randint(0, 10))
    data_structures.append(random.randint(0, 10))
    algorithms.append(random.randint(0, 10))
    problem_solving_aptitude.append(random.randint(0, 10))
    resumes.append(RESUME_LINKS[random.randint(0, RESUME_LINKS.__len__() - 1)])

dataset = []
for i in range(TRAINING_DATA_SIZE):
    temp = []
    temp.append(1001+i)
    temp.append(names[i])
    temp.append(cgpa[i])
    temp.append(backend[i])
    temp.append(frontend[i])
    temp.append(database[i])
    temp.append(android[i])
    temp.append(ios[i])
    temp.append(cross_platform[i])
    temp.append(version_control_systems[i])
    temp.append(python[i])
    temp.append(multivariate_calculus_linear_algebra[i])
    temp.append(probability_statistics[i])
    temp.append(ml_algorithms[i])
    temp.append(communication_networks[i])
    temp.append(operating_system[i])
    temp.append(data_structures[i])
    temp.append(algorithms[i])
    temp.append(problem_solving_aptitude[i])
    temp.append(resumes[i])
    dataset.append(temp)

with open(DATA_FILE_NAME, 'w', newline='') as csvFile:
    csvWriter = csv.writer(csvFile)
    csvWriter.writerow(fields)
    csvWriter.writerows(dataset)

# list(map(lambda x: doc_ref.add(x), dataset))

# docs = doc_ref.stream()
# for doc in docs:
#     print(f’{doc.id} => {doc.to_dict()}’)
