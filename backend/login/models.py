from django.db import models
import random,uuid
# Create your models here.
class LoginTable(models.Model):
    CustomerName = models.TextField(max_length=255)
    customerId = models.CharField(
        max_length=255,
        unique=True,
        editable=False,
        default=uuid.uuid4,
    )
    password = models.CharField(max_length=255);

def __str__(self):
    return f"{self.customerName} ({self.customerId})"


