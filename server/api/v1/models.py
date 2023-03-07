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
    category = models.CharField(max_length=30,default="something_to_eat")
    price = models.CharField(max_length=10)
    rating = models.IntegerField(choices=RATING_STARS, default=1)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='item_images',blank=False, null=True)
    add_at = models.DateField(auto_now_add=True)