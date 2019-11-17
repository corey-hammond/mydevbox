from rest_framework import viewsets, permissions
from toolbox.models import ToolBox, Tool
from .serializers import ToolBoxSerializer, ToolSerializer


class ToolBoxViewSet(viewsets.ModelViewSet):
    queryset = ToolBox.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ToolBoxSerializer


class ToolViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ToolSerializer
