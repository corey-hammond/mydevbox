from rest_framework import routers
from .api import ToolBoxViewSet, ToolViewSet

router = routers.DefaultRouter()
router.register("api/toolbox", ToolBoxViewSet, "toolbox")
router.register("api/tools", ToolViewSet, "tools")
# router.register("toolbox/", ToolBoxViewSet, base_name="toolbox")
# router.register("tools/", ToolViewSet, base_name="tools")

urlpatterns = router.urls
