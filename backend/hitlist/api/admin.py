from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from . import models

admin.site.register(models.Activity)
admin.site.register(models.AssignedMember)
admin.site.register(models.Attachment)
admin.site.register(models.Comment)
admin.site.register(models.File)
admin.site.register(models.Invite)
admin.site.register(models.ProfilePicture)
admin.site.register(models.ProjectMember)
admin.site.register(models.Project)
admin.site.register(models.Stage)
admin.site.register(models.Task)
admin.site.register(models.TeamMember)
admin.site.register(models.Team)
        
@admin.register(models.User)
class UserAdmin(UserAdmin):
    list_display = ('email', 'name', 'is_staff', 'is_active', 'created_at', 'updated_at',)
    list_filter = ('email', 'name', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'name', 'password',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active',)}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

    class Meta:
            model = models.User
