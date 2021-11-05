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

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'


users = {
    'users_list':[]
}


@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        # search_username = request.args.get('name')
        # search_job = request.args.get('password')
        # if search_username and search_job:
        #     users = User().find_by_name_job(search_username, search_job)
        # elif search_username:
        #     users = User().find_by_name(search_username)
        # elif search_job:
        #     users = User().find_by_job(search_job)
        # else:
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


@app.route('/users/<username>/<password>', methods=['GET'])
def get_user(username, password):
    print("In password username route")
    if request.method == 'GET':
        user = User().find_by_name_password(username, password)
        if user:
            return jsonify(user)
        else:
            return jsonify({"error": "User not found"}), 404
