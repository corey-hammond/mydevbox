from rest_framework import routers
from .api import ToolBoxViewSet, ToolViewSet

router = routers.DefaultRouter()
router.register('api/toolbox', ToolBoxViewSet, 'toolbox')
router.register('api/tools', ToolViewSet, 'tools')

urlpatterns = router.urls