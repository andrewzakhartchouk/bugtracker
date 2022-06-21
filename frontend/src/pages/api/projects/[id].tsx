export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json({
    project: {
      id: id,
      name: "Albanese",
      created_at: "2022-05-01",
      stages: [
        { id: 1, name: "Backlog", color: "22f55e", count: 3 },
        { id: 2, name: "In Progress", color: "3bf2f6", count: 10 },
        { id: 3, name: "Completed", color: "ef44ee", count: 1 },
      ],
      team: [
        { id: 1, name: "Darius", image: "", lead: true },
        { id: 2, name: "James", image: "", lead: false },
        { id: 3, name: "Jason", image: "", lead: false },
      ],
    },
  });
}
