import string
import random
from random import randrange
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from model_mongodb import User


app = Flask(__name__)
CORS(app)


users = {
    'users_list':[]
}


@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        users = User().find_all()
        return {"users_list": users}
    if request.method == 'POST':
        print("POST else statement")
        userToAdd = request.get_json()
        if User().find_by_name(userToAdd['name']) or userToAdd['name'] == "":
            resp = jsonify(), 401
            return resp
        newUser = User(userToAdd)
        newUser.save()
        resp = jsonify(newUser), 201
        # print("User Info:" + str(newUser))
        # print("Status response: " + str(resp))
        return resp

@app.route('/users/Shows/<username>', methods=['POST'])
def get_shows(username):
    if request.method == 'GET':
        user = User().find_by_name(username)
        if user:
            print(user)
            return jsonify(user), 200 
        else:
            return jsonify({"error": "User not found"}), 404
    elif request.method == 'POST':
        user = User().find_by_name(username)
        if user:
            showDataToAdd = request.get_json()
            newUser = User(user[0])
            newUser.addShow(showDataToAdd)
            resp = jsonify(newUser), 201
            return resp
        else:
            return jsonify({"error": "User not found"}), 404



@app.route('/users/<username>/<password>', methods=['GET'])
def get_user(username, password):
    print("In password username route")
    if request.method == 'GET':
        user = User().find_by_name_password(username, password)
        if user:
            var1 = jsonify(user)
            print(var1)
            print("User info: " + str(var1.data))
            print("Status: " + str(var1.status))
            return jsonify(user), 200
        else:
            return jsonify({"error": "User not found"}), 404