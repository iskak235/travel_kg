import requests
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Tour

# 1. Башкы бет
def index(request):
    tours = Tour.objects.all()
    return render(request, 'main/index.html', {'tours': tours})

# 2. Биз жөнүндө
def about(request):
    return render(request, 'main/about.html')

# 3. Байланыш
def contact(request):
    return render(request, 'main/contact.html')

# 4. Турлардын тизмеси
def tours_list(request):
    tours = Tour.objects.all()
    return render(request, 'main/tours.html', {'tours': tours})

# 5. Турдун толук маалыматы
def tour_detail(request, pk):
    tour = get_object_or_404(Tour, pk=pk)
    return render(request, 'main/tour_detail.html', {'tour': tour})

# 6. "Заказать звонок" формасын иштетүү (Telegram'га жөнөтүү)
def callback_request(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')

        # Сиздин такталган маалыматтарыңыз
        token = "8632706293:AAGUFr-eBHri8U9BLUZ_5j19g9flYnmngqw"
        chat_id = "6365816184" # Боштук алынды
        message = f"🚀 ЖАҢЫ ЗАКАЗ!\n\n👤 Аты: {name}\n📞 Тел: {phone}"

        url = f"https://api.telegram.org/bot{token}/sendMessage?chat_id={chat_id}&text={message}"

        try:
            requests.get(url)
            print(f"Жаңы билдирүү терминалга түштү: {name}, {phone}")
            messages.success(request, "Биз сиздин билдирүүнү алдык! Тез арада байланышабыз.")
        except Exception as e:
            print(f"Ката кетти: {e}")
            messages.error(request, "Байланышта ката кетти, кайра аракет кылыңыз.")

    return redirect('index')