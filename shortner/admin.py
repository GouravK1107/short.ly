from django.contrib import admin
from .models import ShortURL

# Register your models here.
@admin.register(ShortURL)
class ShortURLAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'shorten_code',
        'original_url',
        'created_at',
    )

    search_fields = (
        'shorten_code',
        'original_url',
    )

    ordering = ('-created_at',)