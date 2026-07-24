from django.db import models

# Create your models here.
class ShortURL(models.Model):
    original_url = models.URLField(unique=True)
    shorten_code = models.CharField(max_length=10, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.shorten_code

