from rest_framework import serializers
from .models import ToolBox, Tool


class ToolSerializer(serializers.ModelSerializer):
    toolbox = serializers.PrimaryKeyRelatedField

    class Meta:
        model = Tool
        fields = (
            "id",
            "toolbox",
            "title",
            "tool_type",
            "content",
        )


class ToolBoxSerializer(serializers.ModelSerializer):
    tools = ToolSerializer(many=True, read_only=True)

    class Meta:
        model = ToolBox
        fields = (
            "id",
            "name",
            "tools",
        )
