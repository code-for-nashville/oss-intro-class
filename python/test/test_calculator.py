import calculator


def test_add():
    assert calculator.add(1, 1) == 2

def test_multiply():
    assert calculator.multiply(2, 2) == 4

def test_subtraction():
    assert calculator.subtraction(5, 3) == 2
