import pytest
import sample_backend


def test_find_users_by_name_success():
    expected = [
        {
            "_id": "61a7ed87a6575a9ed552d2bb",
            "confirm_password": "test",
            "name": "test",
            "password": "test",
            "shows": [
                {
                    "episode": "70",
                    "genre": "Superhero",
                    "name": "The Flash",
                    "rating": "2",
                    "status": "Ongoing",
                    "user": "test"
                }
            ]
        }
    ]

    assert sample_backend.User().find_by_name("test") == expected


def test_find_by_name_fail():
    expected = []
    assert sample_backend.User().find_by_name("BobbyShmurda") == expected


def test_find_by_password_success():
    expected = [
        {
            "_id": "61a7ed87a6575a9ed552d2bb",
            "confirm_password": "test",
            "name": "test",
            "password": "test",
            "shows": [
                {
                    "episode": "70",
                    "genre": "Superhero",
                    "name": "The Flash",
                    "rating": "2",
                    "status": "Ongoing",
                    "user": "test"
                }
            ]
        }
    ]
    assert sample_backend.User().find_by_name_password("test", "test") == expected


def test_find_by_password_fail():
    expected = []
    assert sample_backend.User().find_by_name_password(
        "BobbyShmurda", "Huh") == expected


def test_find_all_success():
    expected = [
        {
            "_id": "61a7ed87a6575a9ed552d2bb",
            "confirm_password": "test",
            "name": "test",
            "password": "test",
            "shows": [
                {
                    "episode": "70",
                    "genre": "Superhero",
                    "name": "The Flash",
                    "rating": "2",
                    "status": "Ongoing",
                    "user": "test"
                }
            ]
        }
    ]
    assert sample_backend.User().find_all() == expected
