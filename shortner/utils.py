import random
import string
from .models import ShortURL

def generate_short_code(length=5):
    characters = string.ascii_letters + string.digits
    while True:
        code = "".join(random.choice(characters) for _ in range(length))

        if not ShortURL.objects.filter(shorten_code=code).exists():
            return code