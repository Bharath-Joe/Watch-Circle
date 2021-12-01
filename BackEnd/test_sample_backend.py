import pytest
import sample_backend


# def test_find_users_by_name_success():
#     expected = [
#         {
#             "_id": "61a7ff342e46075d9b1c78ec",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "1",
#                     "genre": "w",
#                     "name": "s",
#                     "rating": "1",
#                     "status": "C",
#                     "user": "Spencer"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "Spencer"
#                 }
#             ]
#         }
#     ]

#     assert sample_backend.User().find_by_name("Spencer") == expected


# def test_find_by_name_fail():
#     expected = []
#     assert sample_backend.User().find_by_name("BobbyShmurda") == expected


# def test_find_by_password_success():
#     expected = [
#         {
#             "_id": "61a7ff342e46075d9b1c78ec",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "1",
#                     "genre": "w",
#                     "name": "s",
#                     "rating": "1",
#                     "status": "C",
#                     "user": "Spencer"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "Spencer"
#                 }
#             ]
#         }
#     ]
#     assert sample_backend.User().find_by_name_password("Spencer", "me") == expected


# def test_find_by_password_fail():
#     expected = []
#     assert sample_backend.User().find_by_name_password(
#         "BobbyShmurda", "Huh") == expected


# def test_reload_Success():
#     user = sample_backend.User().find_by_name("Spencer")
#     newUser = sample_backend.User(user[0])
#     assert sample_backend.User.reload(newUser) == True


# def test_reload_Fail():
#     emptyDic = {}
#     newUser = sample_backend.User(emptyDic)
#     assert sample_backend.User.reload(newUser) == False


# def test_addShow():

#     addedShow = {
#         "episode": "done",
#         "genre": "with",
#         "name": "this",
#         "rating": "5",
#         "status": "Ongoing",
#         "user": "m"
#     }

#     expected = [
#         {
#             "_id": "61a7ff342e46075d9b1c78ec",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "1",
#                     "genre": "w",
#                     "name": "s",
#                     "rating": "1",
#                     "status": "C",
#                     "user": "Spencer"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "Spencer"
#                 }
#             ]
#         },
#         {
#             "_id": "61a8024865b8bd9a71da15e7",
#             "confirm_password": "e",
#             "name": "m",
#             "password": "e",
#             "shows": [
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "m"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "m"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "m"
#                 }
#             ]
#         }
#     ]

#     user = sample_backend.User().find_by_name("m")
#     newUser = sample_backend.User(user[0])
#     sample_backend.User.addShow(newUser, addedShow)

#     # Checks to see if the show was added to the correct user and nowhere else
#     assert sample_backend.User().find_all() == expected


# def test_find_all_success():
#     expected = [
#         {
#             "_id": "61a7ff342e46075d9b1c78ec",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "1",
#                     "genre": "w",
#                     "name": "s",
#                     "rating": "1",
#                     "status": "C",
#                     "user": "Spencer"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "Spencer"
#                 }
#             ]
#         },
#         {
#             "_id": "61a8024865b8bd9a71da15e7",
#             "confirm_password": "e",
#             "name": "m",
#             "password": "e",
#             "shows": [
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "m"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "m"
#                 },
#                 {
#                     "episode": "done",
#                     "genre": "with",
#                     "name": "this",
#                     "rating": "5",
#                     "status": "Ongoing",
#                     "user": "m"
#                 }
#             ]
#         }
#     ]
#     assert sample_backend.User().find_all() == expected
