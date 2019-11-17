from rest_framework import viewsets, permissions
from toolbox.models import ToolBox, Tool
from .serializers import ToolBoxSerializer, ToolSerializer


class ToolBoxViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = ToolBoxSerializer
    queryset = ToolBox.objects.all()


class ToolViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = ToolSerializer
    queryset = Tool.objects.all()
