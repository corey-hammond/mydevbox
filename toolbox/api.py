from rest_framework import viewsets

from toolbox.models import ToolBox, Tool
from .serializers import ToolBoxSerializer, ToolSerializer


class ToolBoxViewSet(viewsets.ModelViewSet):
    serializer_class = ToolBoxSerializer
    queryset = ToolBox.objects.all()


class ToolViewSet(viewsets.ModelViewSet):
    serializer_class = ToolSerializer
    queryset = Tool.objects.all()
