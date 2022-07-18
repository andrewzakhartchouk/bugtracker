from django import urls
from rest_framework import test, status

from api import models

class TeamsIntegrationTestCase(test.APITestCase):
    def setUp(self):
        self.user = models.User(name='Testcase', email='testcase@test.com')
        self.user.set_password('t35tc453')
        self.user.save()

    def test_team_create(self):
        self.client.force_authenticate(user=self.user)

        url = urls.reverse("team-list")
        data = {"name": "Test Team"}

        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(models.Team.objects.count(), 1)
        self.assertEqual(models.TeamMember.objects.count(), 1)

        team = models.Team.objects.first()
        member = models.TeamMember.objects.first()
        self.assertEqual(member.user, self.user)
        self.assertEqual(member.team, team)

        data = {"name": ""}

        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("This field may not be blank.", response.data.get('name'))

        data = {"name": "Longer than 32 characters will result in error Team"}

        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("Ensure this field has no more than 32 characters.", response.data.get('name'))