import pytest
import sample_backend

def test_find_users_by_name_success():  
    expected = [              
        {
            '_id': '618563ffc1e3c558c47666e3', 
            'confirm_password': 'test', 
            'name': 'test', 
            'password': 'test'
        },
    ]
    
    assert sample_backend.User().find_by_name("test") == expected

def test_find_by_name_fail():  
    expected = []
    assert sample_backend.User().find_by_name("BobbyShmurda") == expected