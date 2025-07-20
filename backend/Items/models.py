from django.db import models
import uuid
# Create your models here.
class ItemsBuy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    ItemId = models.CharField(
        unique=True,
        default=uuid.uuid4,
        editable=False,
        max_length=12,
    )

    def __str__(self):
        return f"{self.name} (Id: {self.ItemId})"