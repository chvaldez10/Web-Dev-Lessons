import zoneinfo
from django.contrib import admin
from django.utils import timezone

from .models import Company, StockQuote

admin.site.register(Company)
admin.site.register(StockQuote)