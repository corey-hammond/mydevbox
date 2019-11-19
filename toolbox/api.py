from rest_framework import viewsets, permissions
from toolbox.models import ToolBox, Tool
from .serializers import ToolBoxSerializer, ToolSerializer


class ToolBoxViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = ToolBoxSerializer

    def get_queryset(self):
        return self.request.user.toolbox.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ToolViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Tool.objects.all()
    
    serializer_class = ToolSerializer
