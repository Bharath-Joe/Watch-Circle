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


@app.route('/users', methods=['GET', 'POST', 'DELETE'])
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
        print(newUser)
        print(resp)
        return resp

# @app.route('/users/<id>', methods=['GET', 'DELETE'])
# def get_user(id):
#     if id:
#       for user in users['users_list']:
#         if user['id'] == id:
#            if request.method == 'GET':
#               return user
#            if request.method == 'DELETE':
#               users['users_list'].remove(user)
#               resp = jsonify(success=True)
#               resp.status_code = 204
#               return resp
#       resp = jsonify({"User not found"}), 404
#       return resp
#     return users


@app.route('/users/<username>/<password>', methods=['GET'])
def get_user(username, password):
    print("In password username route")
    if request.method == 'GET':
        user = User().find_by_name_password(username, password)
        if user:
            var1 = jsonify(user)
            print(var1)
            print("USer info: " + str(var1.data))
            print("Status: " + str(var1.status))
            return jsonify(user), 200
        else:
            return jsonify({"error": "User not found"}), 404


# @app.route('/users/<username>/<shows>', methods=['GET'])
# def get_user(username, shows):
#     if request.method == 'GET':
#         userShows = User().find_by_name_shows(username, shows)
#         if userShows:
#             return jsonify(userShows), 200
#         else:
#             return jsonify({"error": "No shows found"}), 404
