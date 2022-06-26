from django_fake_model import models as f
from api.mixins import HasTimestamps

class FakeUser(f.FakeModel, HasTimestamps):
    pass