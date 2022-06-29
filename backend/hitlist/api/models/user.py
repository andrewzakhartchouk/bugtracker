from django import db, contrib
from django.utils.translation import gettext_lazy as _

from .. import mixins, managers

class User(mixins.HasTimestamps, contrib.auth.models.AbstractUser):
    """
    User model with username field replaced with email
    """
    username = None
    email = db.models.EmailField(_('email address'), unique=True)
    name = db.models.CharField(max_length=24)
    projects = db.models.ManyToManyField("Project", through="ProjectMember")
    teams = db.models.ManyToManyField("Team", through="TeamMember")
    tasks = db.models.ManyToManyField("Task", through="AssignedMember")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = managers.UserManager()

    def __str__(self): 
        return f"<{self.name}>"