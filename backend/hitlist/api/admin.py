from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, Task, AssignedMember, Project, ProjectMember, Stage, Team, TeamMember, Comment, Activity

admin.site.register(Task)
admin.site.register(AssignedMember)
admin.site.register(Project)
admin.site.register(ProjectMember)
admin.site.register(Stage)
admin.site.register(Team)
admin.site.register(TeamMember)
admin.site.register(Comment)
admin.site.register(Activity)
        
@admin.register(User)
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
            model = User
