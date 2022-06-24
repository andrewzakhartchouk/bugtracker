export default function handler(req, res) {
  res.status(200).json({
    projects: [
      {
        id: 1,
        name: "Albanese",
        team: "Team A",
        stages: [
          { id: 1, name: "Backlog" },
          { id: 2, name: "Reviewing" },
          { id: 3, name: "Finished" },
        ],
      },
      {
        id: 2,
        name: "Morisson",
        team: "Team A",
        stages: [
          { id: 4, name: "Backlog" },
          { id: 5, name: "Reviewing" },
          { id: 6, name: "Finished" },
        ],
      },
      {
        id: 3,
        name: "Turnbull",
        team: "Team A",
        stages: [
          { id: 7, name: "Backlog" },
          { id: 8, name: "Reviewing" },
          { id: 9, name: "Finished" },
        ],
      },
      {
        id: 4,
        name: "Abbott",
        team: "Team A",
        stages: [
          { id: 10, name: "Backlog" },
          { id: 11, name: "Reviewing" },
          { id: 12, name: "Finished" },
        ],
      },
      {
        id: 5,
        name: "Rudd",

        team: "Team A",
        stages: [
          { id: 13, name: "Backlog" },
          { id: 14, name: "Reviewing" },
          { id: 15, name: "Finished" },
        ],
      },
      {
        id: 6,
        name: "Gillard",

        team: "Team A",
        stages: [
          { id: 16, name: "Backlog" },
          { id: 17, name: "Reviewing" },
          { id: 18, name: "Finished" },
        ],
      },
      {
        id: 7,
        name: "Howard",

        team: "Team A",
        stages: [
          { id: 19, name: "Backlog" },
          { id: 20, name: "Reviewing" },
          { id: 21, name: "Finished" },
        ],
      },
      {
        id: 8,
        name: "Keating",

        team: "Team A",
        stages: [
          { id: 22, name: "Backlog" },
          { id: 23, name: "Reviewing" },
          { id: 24, name: "Finished" },
        ],
      },
      {
        id: 9,
        name: "Hawke",

        team: "Team A",
        stages: [
          { id: 25, name: "Backlog" },
          { id: 26, name: "Reviewing" },
          { id: 27, name: "Finished" },
        ],
      },
    ],
  });
}
