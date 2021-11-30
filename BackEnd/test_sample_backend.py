import pytest
import sample_backend


def test_find_users_by_name_success():
    expected = [
        {
            "_id": "61a6b201b8a9ab0fa24e8874",
            "confirm_password": "test",
            "name": "pytest",
            "password": "test",
            "shows": [
                {
                    "episode": "12",
                    "genre": "Superhero",
                    "name": "The Flash",
                    "rating": "4/10",
                    "status": "Completed",
                    "user": "pytest"
                }
            ]
        }
    ]

    assert sample_backend.User().find_by_name("pytest") == expected


def test_find_by_name_fail():
    expected = []
    assert sample_backend.User().find_by_name("BobbyShmurda") == expected


def test_find_by_password_success():
    expected = [
        {
            "_id": "6192ce36ef1f4a250f2a1497",
            "confirm_password": "123",
            "name": "kevin",
            "password": "123",
            "shows": []
        }
    ]
    assert sample_backend.User().find_by_name_password("kevin", "123") == expected

def test_find_by_password_fail():
    expected = []
    assert sample_backend.User().find_by_name_password("BobbyShmurda", "Huh") == expected

# def test_find_all_success():
#     expected = []
#     assert sample_backend.User().find_all() == expected
