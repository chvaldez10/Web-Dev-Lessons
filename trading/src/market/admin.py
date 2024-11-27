from django.contrib import admin

from .models import Company, StockQuote

admin.site.register(Company)
admin.site.register(StockQuote)
