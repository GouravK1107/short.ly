from django.shortcuts import render, redirect, get_object_or_404
from .models import ShortURL
from .utils import generate_short_code

# Create your views here.
def home(request):
    short_url = None

    if request.method == "POST":
        original_url = request.POST.get('original_url')
        short, created = ShortURL.objects.get_or_create(
            original_url=original_url,
            defaults= {
                "shorten_code":generate_short_code(),
            },
        )

        short_url = request.build_absolute_uri(
            f"/{short.shorten_code}"
        )

    return render(request, "shortner/index.html", {"short_url": short_url})

def redirect_url(request, shorten_code):
    url = get_object_or_404(
        ShortURL, 
        shorten_code = shorten_code,
    )

    return redirect(url.original_url)