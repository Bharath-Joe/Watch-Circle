import pytest
import sample_backend
from flask import jsonify


def test_add_remove_user():
    userToAdd = {'name': 'test2', 'password': 'test2',
                 'shows': [], 'confirm_password': 'test2'}
    newUser = sample_backend.User(userToAdd)
    newUser.save()
    newUser.save()
    newUser.remove('test2')


def test_find_users_by_name_success():
    expected = [
        {
            "_id": "61a85b8943701e718e236985",
            "confirm_password": "bs1121",
            "name": "bharath",
            "password": "bs1121",
            "shows": []
        }
    ]
    assert sample_backend.User().find_by_name("bharath") == expected


def test_find_by_name_fail():
    expected = []
    assert sample_backend.User().find_by_name("BobbyShmurda") == expected


def test_find_by_password_success():
    expected = [
        {
            "_id": "61a85b8943701e718e236985",
            "confirm_password": "bs1121",
            "name": "bharath",
            "password": "bs1121",
            "shows": []
        }
    ]
    assert sample_backend.User().find_by_name_password(
        "bharath", "bs1121") == expected


def test_find_by_password_fail():
    expected = []
    assert sample_backend.User().find_by_name_password(
        "BobbyShmurda", "Huh") == expected


def test_reload_Success():
    user = sample_backend.User().find_by_name("test")
    newUser = sample_backend.User(user[0])
    assert sample_backend.User.reload(newUser) == True


def test_reload_Fail():
    emptyDic = {}
    newUser = sample_backend.User(emptyDic)
    assert sample_backend.User.reload(newUser) == False


def test_addShow():

    addedShow = {
        "episode": "65",
        "genre": "Adventure",
        "name": "testShow",
        "rating": "5",
        "status": "Completed",
        "user": "test"
    }

    user = sample_backend.User().find_by_name("test")
    newUser = sample_backend.User(user[0])
    before = sample_backend.User().find_all()
    sample_backend.User.addShow(newUser, addedShow)

    # Checks to see if the show was added to the correct user and nowhere else
    assert sample_backend.User().find_all() != before
