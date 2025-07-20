from django.db import models
from login.models import LoginTable  # Assuming LoginTable is the customer model

class Orders(models.Model):
    customer = models.ForeignKey(
        LoginTable,
        on_delete=models.CASCADE,
        related_name='orders'
    )
    product_name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order: {self.product_name} x{self.quantity} for {self.customer.customerName}"
