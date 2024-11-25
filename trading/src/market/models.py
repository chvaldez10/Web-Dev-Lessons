from django.db import models

from timescale.db.models.fields import TimescaleDateTimeField
from timescale.db.models.managers import TimescaleManager

class Company(models.Model):
    name = models.CharField(max_length=120)
    ticker = models.CharField(max_length=20, unique=True, db_index=True)
    description = models.TextField(blank=True, null=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
class StockQuote(models.Model):
    """
    {'open_price': Decimal('184.8648'),
    'close_price': Decimal('184.7753'),
    'high_price': Decimal('184.8648'),
    'low_price': Decimal('184.7454'),
    'number_of_trades': None,
    'volume': 2358,
    'volume_weighted_average': None,
    'time': datetime.datetime(2024, 2, 1, 0, 59, tzinfo=<UTC>)}
    """
    
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE,
                                related_name='stock_quotes')
    open_price = models.DecimalField(max_digits=10, decimal_places=4)
    close_price = models.DecimalField(max_digits=10, decimal_places=4)
    high_price = models.DecimalField(max_digits=10, decimal_places=4)
    low_price = models.DecimalField(max_digits=10, decimal_places=4)
    number_of_trades = models.BigIntegerField(null=True, blank=True)
    volume = models.BigIntegerField()
    volume_weighted_average = models.DecimalField(max_digits=10, decimal_places=4)
    raw_timestamp = models.BigIntegerField(null=True, blank=True)
    time = TimescaleDateTimeField(interval='1 week')

    objects = models.Manager()
    timescale = TimescaleManager()
    
    class Meta:
        unique_together = ('company', 'time')
