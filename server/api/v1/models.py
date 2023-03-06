from django.db import models;

class Foods(models.Model):
    RATING_STARS = (
        (1,'1 stars'),
        (2,'2 stars'),
        (3,'3 stars'),
        (4,'4 stars'),
        (5,'5 stars')
    )
    title = models.CharField(max_length=100)
    price = models.CharField(max_length=10)
    rating = models.CharField(max_length=1, choices=RATING_STARS)
    description = models.CharField(max_length=300)
    add_at = models.DateField()