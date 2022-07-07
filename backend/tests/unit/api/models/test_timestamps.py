from django import test
import time, models

@models.FakeUser.fake_me
class TimestampTestCase(test.TransactionTestCase):
    def test_created_at_set_on_create(self):
        user = models.FakeUser()
        self.assertIsNone(user.created_at)
        user.save()
        self.assertIsNotNone(user.created_at)

    def test_updated_at_set_on_create(self):
        user = models.FakeUser()
        self.assertIsNone(user.updated_at)
        user.save()
        self.assertIsNotNone(user.updated_at)

    def test_updated_at_set_on_update(self):
        user = models.FakeUser()
        user.save()
        initial_updated_at = user.updated_at
        time.sleep(0.001)
        user.save()
        self.assertNotEquals(initial_updated_at, user.updated_at)

    def test_created_at_not_set_on_update(self):
        user = models.FakeUser()
        user.save()
        initial_created_at = user.created_at
        time.sleep(0.001)
        user.save()
        self.assertEquals(initial_created_at, user.created_at)