from django.contrib import admin
from .models import ToolBox, Tool

admin.site.site_header = "MyDevBox Admin"
admin.site.site_title = "MyDevBox Admin Area"
admin.site.index_title = "Welcome to the MyDevBox Admin Area"


class ToolInLine(admin.TabularInline):
    model = Tool
    extra = 3


class ToolBoxAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["language"]}),
    ]
    inlines = [ToolInLine]

    list_display = ("language",)

    list_filter = ["language"]

    search_fields = ["language"]


admin.site.register(ToolBox, ToolBoxAdmin)
admin.site.register(Tool)
