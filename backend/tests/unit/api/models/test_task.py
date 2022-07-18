from django import utils
from rest_framework import test
import time, datetime

from api import models

class TaskTestCase(test.APITestCase):
    def setUp(self):
        self.user_1 = models.User(
            name="Test1",
            email="testcase1@test.com",
            password="12345678",
        )
        self.user_1.save()
        
        self.user_2 = models.User(
            name="Test2",
            email="testcase2@test.com",
            password="12345678",
        )
        self.user_2.save()

        self.team = models.Team(
            name="Test Team",
        )
        self.team.save()

        self.project = models.Project(
            team=self.team,
            name="Test Project",
        )
        self.project.save()

        self.stage = models.Stage(
            project=self.project,
            name="Test Stage",
        )
        self.stage.save()


    def test_task_create(self):
        task = models.Task(
            project = self.project,
            stage = self.stage,
            name = "Test Task",
            priority = 0,
            tags = "Test",
            start_at = utils.timezone.make_aware(datetime.datetime.now()),
            end_at = utils.timezone.make_aware(datetime.datetime.now()),
            description = "Test description",
            submitted_by = self.user_1,
            checked = False,
        )
        task.save()

        self.assertEqual(task.created_at, task.updated_at)
        task_number = models.Task.objects.all().count()
        self.assertEqual(task_number, 1)

    def test_task_update(self):
        task = models.Task(
            project = self.project,
            stage = self.stage,
            name = "Test Task",
            priority = 0,
            tags = "Test",
            start_at = utils.timezone.make_aware(datetime.datetime.now()),
            end_at = utils.timezone.make_aware(datetime.datetime.now()),
            description = "Test description",
            submitted_by = self.user_1,
            checked = False,
        )
        task.save()
        time.sleep(0.001)

        task.name = "Test Task 2"
        task.save()

        self.assertNotEqual(task.created_at, task.updated_at)
        task_number = models.Task.objects.all().count()
        self.assertEqual(task_number, 1)

    def test_task_delete(self):
        task = models.Task(
            project = self.project,
            stage = self.stage,
            name = "Test Task",
            priority = 0,
            tags = "Test",
            start_at = utils.timezone.make_aware(datetime.datetime.now()),
            end_at = utils.timezone.make_aware(datetime.datetime.now()),
            description = "Test description",
            submitted_by = self.user_1,
            checked = False,
        )
        task.save()
        task_number = models.Task.objects.all().count()
        self.assertEqual(task_number, 1)

        task.delete()
        task_number = models.Task.objects.all().count()
        self.assertEqual(task_number, 0)

    def test_task_member_assignment(self):
        task = models.Task(
            project = self.project,
            stage = self.stage,
            name = "Test Task",
            priority = 0,
            tags = "Test",
            start_at = utils.timezone.make_aware(datetime.datetime.now()),
            end_at = utils.timezone.make_aware(datetime.datetime.now()),
            description = "Test description",
            submitted_by = self.user_1,
            checked = False,
        )
        task.save()

        task.assigned_members.add(self.user_1.id)
        task.assigned_members.add(self.user_2.id)

        member_number = models.AssignedMember.objects.all().count()
        self.assertEqual(member_number, 2)



        
