import requests
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Tour

# 1. Башкы бет (Бул жерде index функциясы сөзсүз болушу керек!)
def index(request):
    tours = Tour.objects.filter(is_active=True)[:6] # Эң акыркы 6 турду чыгаруу
    return render(request, 'main/index.html', {'tours': tours})

# 2. Биз жөнүндө
def about(request):
    return render(request, 'main/about.html')

# 3. Байланыш
def contact(request):
    return render(request, 'main/contact.html')

# 4. Турлардын тизмеси
def tours_list(request):
    tours = Tour.objects.filter(is_active=True)
    return render(request, 'main/tours.html', {'tours': tours})

# 5. Турдун толук маалыматы
def tour_detail(request, pk):
    tour = get_object_or_404(Tour, pk=pk)
    return render(request, 'main/tour_detail.html', {'tour': tour})

# 6. Telegram бот аркылуу заказ кабыл алуу
def callback_request(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')

        token = "8632706293:AAGUFr-eBHri8U9BLUZ_5j19g9flYnmngqw" # Бул жерге өз токениңизди коюңуз
        chat_id = "6365816184"
        text = f"🚀 *ЖАҢЫ ЗАКАЗ!*\n\n👤 *Аты:* {name}\n📞 *Тел:* {phone}"

        url = f"https://api.telegram.org/bot{token}/sendMessage"
        data = {"chat_id": chat_id, "text": text, "parse_mode": "Markdown"}

        try:
            response = requests.post(url, data=data, timeout=5)
            if response.status_code == 200:
                messages.success(request, "Биз сиздин билдирүүнү алдык! Тез арада байланышабыз.")
            else:
                messages.error(request, "Байланышта ката кетти (Telegram error).")
        except requests.exceptions.RequestException:
            messages.error(request, "Интернет байланышы үзүлдү.")

    return redirect('index')