from random import choice
import string

size = 8
values = string.ascii_lowercase + string.ascii_letters + string.ascii_uppercase + string.digits + string.punctuation
password = ''
for i in range(size):
    password += choice(values)

print(password)