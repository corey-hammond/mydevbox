from rest_framework import serializers
from .models import ToolBox, Tool


class ToolBoxSerializer(serializers.ModelSerializer):
    tools = serializers.StringRelatedField(many=True)

    class Meta:
        model = ToolBox
        fields = (
            "id",
            "language",
            "tools",
        )


class ToolSerializer(serializers.ModelSerializer):
    toolbox = serializers.StringRelatedField(many=False)

    class Meta:
        model = Tool
        fields = (
            "id",
            "toolbox",
            "title",
            "tool_type",
            "content",
        )

