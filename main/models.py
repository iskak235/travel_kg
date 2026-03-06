from django.db import models

class Tour(models.Model):
    title = models.CharField(max_length=200, verbose_name="Турдун аталышы")
    location = models.CharField(max_length=100, verbose_name="Жайгашкан жери")
    price = models.IntegerField(verbose_name="Баасы")
    description = models.TextField(verbose_name="Кыскача маалымат")
    features = models.CharField(max_length=200, verbose_name="Өзгөчөлүктөрү (мис: Ат минүү, Кайык)")
    image_url = models.URLField(verbose_name="Сүрөттүн шилтемеси")

    def __clstr__(self):
        return self.title