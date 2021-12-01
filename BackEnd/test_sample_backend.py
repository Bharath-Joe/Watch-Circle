import pytest
import sample_backend


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
