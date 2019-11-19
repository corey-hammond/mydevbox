import datetime
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User


class ToolBox(models.Model):
    name = models.CharField(max_length=100, unique=True)
    owner = models.ForeignKey(
        User, related_name="toolbox", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Tool Box"
        verbose_name_plural = "Tool Boxes"


class Tool(models.Model):
    toolbox = models.ForeignKey(ToolBox, on_delete=models.CASCADE, related_name="tools")
    title = models.CharField(max_length=100)
    tool_type = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return "%s: %s" % (self.title, self.tool_type)
