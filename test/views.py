import json
import os

from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django_reusable.logging.loggers import PrintLogger

from main.utils import get_base_template


def get_frontend_js_list():
    logger = PrintLogger("get_frontend_js_list", enabled=not settings.DEBUG)
    js_files = []
    try:
        files = json.loads(
            open(os.path.join(settings.BASE_DIR, 'frontend/static/frontend/asset-manifest.json')).read())['files']
        js_files = [files[file_name].lstrip(settings.STATIC_URL) for file_name in ['vendor.js', 'runtime.js', 'main.js']]
    except:
        pass
    logger.info(js_files)
    return js_files


FRONTEND_JS = get_frontend_js_list()


def get_frontend_js():
    return get_frontend_js_list() if settings.DEBUG else FRONTEND_JS


@method_decorator(csrf_exempt, name="dispatch")
class FrontEndView(TemplateView):
    template_name = 'frontend/index.pug'
    base_template = get_base_template()

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs) or {}
        context_data.update(dict(
            base_template=self.base_template
        ))
        return context_data


front_end_view = FrontEndView.as_view()

# TODO: this is broken. need to fix it as the js imports have been moved to base.pug
admin_front_end_view = FrontEndView.as_view(base_template='admin/base_site.html')
