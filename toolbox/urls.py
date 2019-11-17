from rest_framework import routers
from .api import ToolBoxViewSet, ToolViewSet

router = routers.DefaultRouter()
router.register('toolboxes', ToolBoxViewSet, 'toolboxes')
router.register('tools', ToolViewSet, 'tools')

urlpatterns = router.urls