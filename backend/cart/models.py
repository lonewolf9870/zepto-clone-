from django.db import models
from login.models import LoginTable

class Cart(models.Model):
    customer = models.ForeignKey(
        LoginTable,
        on_delete=models.CASCADE,
        related_name='cart',
    )
    item_name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customerId} - {self.item_name} x{self.quantity}"