from rest_framework import routers
from .api import ToolBoxViewSet, ToolViewSet

router = routers.DefaultRouter()
router.register('api/toolboxes', ToolBoxViewSet, 'toolboxes')
router.register('api/tools', ToolViewSet, 'tools')

urlpatterns = router.urls