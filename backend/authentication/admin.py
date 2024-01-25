from django.contrib import admin

from social_django.models import Association, Nonce, UserSocialAuth
from oauth2_provider.models import AccessToken, Grant, RefreshToken, IDToken
from django.contrib.auth.models import Group

from django.contrib.auth import get_user_model
User = get_user_model()


admin.site.unregister(Group)
admin.site.unregister(AccessToken)
admin.site.unregister(RefreshToken)
admin.site.unregister(Grant)
admin.site.unregister(IDToken)
admin.site.unregister(Association)
admin.site.unregister(Nonce)
# admin.site.unregister(UserSocialAuth)


admin.site.register(User)