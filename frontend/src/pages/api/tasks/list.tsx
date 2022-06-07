import { Priority } from "utils";

export default function handler(req, res) {
  res.status(200).json({
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
      {
        id: 5,
        project: { id: 1, name: "Morrison" },
        stage: { name: "In Progress", color: "3bf2f6" },
        priority: Priority.Medium,
        tags: "Tag2 Tag3",
        end_date: "2022/06/13",
        description: "Learn graphene, build the GraphQL API",
        comment_number: 3,
      },
      {
        id: 6,
        project: { id: 2, name: "Abbott" },
        stage: { name: "Backlog", color: "ef44ee" },
        priority: Priority.Low,
        tags: "Tag3",
        end_date: "2022/05/20",
        description:
          "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
        comment_number: 1,
      },
    ],
  });
}
