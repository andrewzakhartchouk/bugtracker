import email
from django import urls
from rest_framework import test, status

from api import models
from api.views import dashboard

class UserTestCase(test.APITestCase):
    email = 'testcase@test.com'
    name = 'Testcase'
    password = 't35tc453'

    def test_user_registration(self):
        url = urls.reverse("user-register")
        data = {'email': self.email, 'name': self.name, 'password': self.password, 'password_confirmation': self.password}

        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertEqual(models.User.objects.count(), 1)
        self.assertEqual(models.User.objects.get().name, self.name)

    def test_user_login(self):
        user = models.User(name=self.name, email=self.email)
        user.set_password(self.password)
        user.save()
        self.assertEqual(models.User.objects.count(), 1)
        
        url = urls.reverse("token_obtain_pair")
        data = {'email': self.email, 'password': self.password}

        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

        access = response.data.get('access')
        url = urls.reverse('dashboard')
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access}')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    