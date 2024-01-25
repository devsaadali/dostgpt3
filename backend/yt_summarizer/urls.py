from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = (
    [
        path("admin/", admin.site.urls),
        path("api/auth/", include("drf_social_oauth2.urls", namespace="drf")),
        path("api/auth/", include("authentication.urls")),
        path("api/subscription/", include("subscription.urls", namespace="subscription")),
        path('api/', include('pdf_chat.urls')),
    
    ]
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
)

urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
