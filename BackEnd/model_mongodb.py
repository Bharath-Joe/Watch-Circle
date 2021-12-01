import pymongo
from bson import ObjectId

class Model(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                return True
        return False
    
    # db.users_list.updateOne({"name": "bharath"}, {$push: {"shows": {"eee": "asdf", "lll": "sss" }}})

    def addShow(self, showData):
        jsonData = self.collection.find({})
        for user in jsonData:
            if(user['name'] == showData['user']):
                resp = self.collection.update({"name": user["name"]}, {'$push': {"shows": showData}})
        return resp

class User(Model):
    # to use a .env file, create .env and include a statmement MONGODB_URI='mongodb+srv://<atlas-user>:<password>@cluster0.6f9re.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority'
    # with <atlas-user>, <password> and <myFirstDatabase> updated accordingly
    # make sure .env is in .gitignore so that your password isn't relased into the wild

    # load_dotenv()  # take environment variables from .env.
    # MONGODB_URI = os.environ['MONGODB_URI']
    # db_client = pymongo.MongoClient(MONGODB_URI)

    db_client = pymongo.MongoClient('localhost', 27017)  #change if your db is in another host and port
    # db name is 'users' and collection name is 'users_list'

    collection = db_client["test"]["users_list"] # for testing  
    # collection = db_client["users"]["users_list"] # for production 

    def find_all(self):
        users = list(self.collection.find())
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name(self, name):
        users = list(self.collection.find({"name": name}))
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name_password(self, name, password):
        users = list(self.collection.find({"name": name, "password": password}))
        for user in users:
            user["_id"] = str(user["_id"])
        return users     