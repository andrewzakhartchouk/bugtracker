export default function handler(req, res) {
  res.status(200).json({
    users: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Darius" },
      { id: 3, name: "Jason" },
      { id: 4, name: "Matthew" },
      { id: 5, name: "James" },
      { id: 6, name: "Alvin" },
      { id: 7, name: "Kevin" },
      { id: 8, name: "Bill" },
      { id: 9, name: "Daniel" },
    ],
  });
}
