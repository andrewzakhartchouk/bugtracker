import { Priority } from "utils";

export default function handler(req, res) {
  res.status(200).json({
    projects: [
      {
        id: 1,
        name: "Albanese",
        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 1, name: "Backlog", count: 3, color: "22f55e" },
          { id: 2, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 3, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 2,
        name: "Morisson",
        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 4, name: "Backlog", count: 3, color: "22f55e" },
          { id: 5, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 6, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 3,
        name: "Turnbull",
        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 7, name: "Backlog", count: 3, color: "22f55e" },
          { id: 8, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 9, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 4,
        name: "Abbott",

        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 10, name: "Backlog", count: 3, color: "22f55e" },
          { id: 11, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 12, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 5,
        name: "Rudd",

        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 13, name: "Backlog", count: 3, color: "22f55e" },
          { id: 14, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 15, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 6,
        name: "Gillard",

        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 16, name: "Backlog", count: 3, color: "22f55e" },
          { id: 17, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 18, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 7,
        name: "Howard",

        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 19, name: "Backlog", count: 3, color: "22f55e" },
          { id: 20, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 21, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 8,
        name: "Keating",

        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 22, name: "Backlog", count: 3, color: "22f55e" },
          { id: 23, name: "Reviewing", count: 7, color: "22f55e" },
          { id: 24, name: "Finished", count: 1, color: "22f55e" },
        ],
      },
      {
        id: 9,
        name: "Hawke",

        team: "Team A",
        members: [
          { id: 1, name: "Darius" },
          { id: 2, name: "Andrew" },
          { id: 3, name: "Jason" },
          { id: 4, name: "Daniel" },
          { id: 5, name: "James" },
        ],
        tasks: [
          {
            id: 1,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/03",
            description: "Make the backend",
            comment_number: 10,
          },
          {
            id: 2,
            project: { id: 1, name: "Morrison" },
            stage: { name: "In Progress", color: "3bf2f6" },
            priority: Priority.Medium,
            tags: "Tag2 Tag3",
            end_date: "2022/06/04",
            description: "Learn graphene, build the GraphQL API",
            comment_number: 3,
          },
          {
            id: 3,
            project: { id: 2, name: "Abbott" },
            stage: { name: "Backlog", color: "ef44ee" },
            priority: Priority.Low,
            tags: "Tag3",
            end_date: "2022/06/10",
            description:
              "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
            comment_number: 1,
          },
          {
            id: 4,
            project: { id: 1, name: "Morrison" },
            stage: { name: "Review", color: "22f55e" },
            priority: Priority.High,
            tags: "Tag1",
            end_date: "2022/06/12",
            description: "Make the backend",
            comment_number: 10,
          },
        ],
        stages: [
          { id: 25, name: "Backlog", count: 3 },
          { id: 26, name: "Reviewing", count: 7 },
          { id: 27, name: "Finished", count: 1 },
        ],
      },
    ],
  });
}
