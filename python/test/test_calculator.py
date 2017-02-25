import calculator


def test_add():
    assert calculator.add(3, 9) == 12
    assert calculator.add(1, 1) == 2
    assert calculator.add(10, 5) == 15


def test_multiply():
    assert calculator.multiply(2, 2) == 4

def test_divide():
    assert calculator.divide(10, 2) == 5
    assert calculator.divide(500, 10) == 50
    assert calculator.divide(2, 1) == 2
