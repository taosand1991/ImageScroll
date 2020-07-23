class Main:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_detail(self):
        return f' your name is {self.name} and age is {self.age}'


class Legacy(Main):
    def __init__(self, brand, address):
        self.brand = brand
        self.address = address
        super().__init__(name, age)

leg = Legacy('legacy graphics', 'Abu Dhabi')
print(leg.age)