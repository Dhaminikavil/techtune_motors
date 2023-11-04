from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    # Add more fields as needed

    def __str__(self):
        return f'{self.year} {self.make} {self.model}'
