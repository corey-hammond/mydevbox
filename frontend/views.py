from django.shortcuts import render

from toolbox.models import ToolBox, Tool


def index(request):
    return render(request, "frontend/index.html")


# Test these routes later, I don't think that I need the queries as I am pulling data from the redux axios call
def toolbox_list(request):
    toolbox = ToolBox.objects.all()
    return render(request, "frontend/index.html", {"toolbox": toolbox})


def toolbox_detail(request, pk):
    toolbox = ToolBox.objects.get(id=pk)
    return render(request, "frontend/index.html", {"toolbox": toolbox})

def tool_detail(request, pk): 
    tool = Tool.objects.get(id=pk)
    return render(request, "frontend/index.html", {"tool": tool})
