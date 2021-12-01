import pytest
import sample_backend


def test_find_users_by_name_success():
    expected = [
        {
            "_id": "61a6d4e02e4ccc8ab20f5929",
            "confirm_password": "me",
            "name": "Spencer",
            "password": "me",
            "shows": [
                {
                    "episode": "me",
                    "genre": "ness",
                    "name": "sad",
                    "rating": "is",
                    "status": "sad",
                    "user": "Spencer"
                }
            ]
        }
    ]

    assert sample_backend.User().find_by_name("Spencer") == expected


def test_find_by_name_fail():
    expected = []
    assert sample_backend.User().find_by_name("BobbyShmurda") == expected


def test_find_by_password_success():
    expected = [
        {
            "_id": "61a6d4e02e4ccc8ab20f5929",
            "confirm_password": "me",
            "name": "Spencer",
            "password": "me",
            "shows": [
                {
                    "episode": "me",
                    "genre": "ness",
                    "name": "sad",
                    "rating": "is",
                    "status": "sad",
                    "user": "Spencer"
                }
            ]
        }
    ]
    assert sample_backend.User().find_by_name_password("Spencer", "me") == expected


def test_find_by_password_fail():
    expected = []
    assert sample_backend.User().find_by_name_password(
        "BobbyShmurda", "Huh") == expected


def test_find_all_success():
    expected = [
        {
            "_id": "61a6d4e02e4ccc8ab20f5929",
            "confirm_password": "me",
            "name": "Spencer",
            "password": "me",
            "shows": [
                {
                    "episode": "me",
                    "genre": "ness",
                    "name": "sad",
                    "rating": "is",
                    "status": "sad",
                    "user": "Spencer"
                }
            ]
        }
    ]
    assert sample_backend.User().find_all() == expected

# def test_reload():
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
