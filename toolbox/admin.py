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
        (None, {"fields": ["name"]}),
    ]
    inlines = [ToolInLine]

    list_display = ("name",)

    list_filter = ["name"]

    search_fields = ["name"]


admin.site.register(ToolBox, ToolBoxAdmin)
admin.site.register(Tool)
