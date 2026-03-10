from django.db import models


class Tour(models.Model):
    title = models.CharField(max_length=200, verbose_name="Турдун аталышы")
    # Slug издөө системалары (SEO) үчүн керек: /tours/kol-suu-trip/
    slug = models.SlugField(unique=True, null=True, blank=True)
    location = models.CharField(max_length=100, verbose_name="Жайгашкан жери")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Баасы")
    description = models.TextField(verbose_name="Толук маалымат")

    # Сүрөттү түздөн-түз серверге жүктөө (бул үчүн 'Pillow' китепканасы керек)
    image = models.ImageField(upload_to='tours/', verbose_name="Сүрөт", null=True, blank=True)

    duration = models.CharField(max_length=50, verbose_name="Узактыгы", default="1 күн")
    is_active = models.BooleanField(default=True, verbose_name="Активдүүбү?")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Тур"
        verbose_name_plural = "Турлар"
        ordering = ['-created_at']  # Жаңы кошулган турлар биринчи көрүнөт

    # Бул жерде кичинекей катаңыз бар эле: __clstr__ эмес, __str__ болушу керек
    def __str__(self):
        return self.title