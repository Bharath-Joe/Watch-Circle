import pytest
import sample_backend


# def test_find_users_by_name_success():
#     expected = [
#         {
#             "_id": "61a6d4e02e4ccc8ab20f5929",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "me",
#                     "genre": "ness",
#                     "name": "sad",
#                     "rating": "is",
#                     "status": "sad",
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
#             "_id": "61a6d4e02e4ccc8ab20f5929",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "me",
#                     "genre": "ness",
#                     "name": "sad",
#                     "rating": "is",
#                     "status": "sad",
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


# def test_find_all_success():
#     expected = [
#         {
#             "_id": "61a6d4e02e4ccc8ab20f5929",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": [
#                 {
#                     "episode": "me",
#                     "genre": "ness",
#                     "name": "sad",
#                     "rating": "is",
#                     "status": "sad",
#                     "user": "Spencer"
#                 }
#             ]
#         }
#     ]
#     assert sample_backend.User().find_all() == expected

# def test_addShow():
#     expected = [
#         {
#             "_id": "61a6d4e02e4ccc8ab20f5929",
#             "confirm_password": "me",
#             "name": "Spencer",
#             "password": "me",
#             "shows": []
#         }
#     ]
#     assert sample_backend.Model().reload() == expected

def test_find_users_by_name_success():
    expected = [
        {
            "_id": "61a6c067028d80828f5536a0",
            "confirm_password": "test2",
            "name": "test2",
            "password": "test2",
            "shows": []
        }
    ]

    assert sample_backend.User().find_by_name("test2") == expected


def test_find_by_name_fail():
    expected = []
    assert sample_backend.User().find_by_name("BobbyShmurda") == expected


def test_find_by_password_success():
    expected = [
        {
            "_id": "61a6c067028d80828f5536a0",
            "confirm_password": "test2",
            "name": "test2",
            "password": "test2",
            "shows": []
        }
    ]
    assert sample_backend.User().find_by_name_password("test2", "test2") == expected


def test_find_by_password_fail():
    expected = []
    assert sample_backend.User().find_by_name_password(
        "BobbyShmurda", "Huh") == expected


def test_find_all_success():
    expected = [
        {
            "_id": "61a6bfc3a567f06109cf232d",
            "confirm_password": "test",
            "name": "test",
            "password": "test",
            "shows": [
                {
                    "episode": "test",
                    "genre": "test",
                    "name": "test",
                    "rating": "test",
                    "status": "test",
                    "user": "test"
                }
            ]
        },
        {
            "_id": "61a6c067028d80828f5536a0",
            "confirm_password": "test2",
            "name": "test2",
            "password": "test2",
            "shows": []
        }
    ]
    assert sample_backend.User().find_all() == expected