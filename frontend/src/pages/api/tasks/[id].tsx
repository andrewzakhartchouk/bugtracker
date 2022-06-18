export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json({
    task: {
      id: id,
      name: "Error when entering a string into the phone number field. Error when entering a string into the phone number field",
      priority: 1,
      tags: [
        "Error",
        "Register",
        "Error",
        "Register",
        "Error",
        "Register",
        "Error",
        "Register",
        "Error",
        "Register",
      ],
      start_date: "2022-05-01",
      end_date: "2022-06-30",
      project: {
        id: 1,
        name: "Morrison",
        stages: [
          { id: 1, name: "Backlog" },
          { id: 2, name: "In Progress" },
          { id: 3, name: "Completed" },
        ],
      },
      stage: { id: 2, name: "In Progress" },
      assigned: { id: 1, name: "Darius", image: "" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit dolore accusamus magni, saepe natus doloremque sint repellendus fugit recusandae! Rerum tempore magnam exercitationem dolores consectetur deserunt aut vero rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quaerat cum pariatur at doloribus laboriosam rerum ex quidem explicabo quia ducimus, dolorum, incidunt vel dignissimos omnis porro nesciunt est voluptas! Explicabo sit veniam fugiat harum atque alias pariatur voluptates aliquid placeat quo doloribus dolorem voluptatum, voluptatibus, assumenda impedit blanditiis quas rem quod! Accusantium cumque adipisci eligendi quod praesentium, veritatis suscipit? Iusto mollitia quam a numquam minus vel vitae illum facere, quia ratione praesentium. Autem rerum ipsum ullam ducimus porro quisquam dolorum voluptas maiores architecto dolore! Velit laudantium magnam eveniet maiores! Voluptate facilis dolorem quisquam quidem magnam, repellendus eaque consequatur assumenda aliquid, odit doloremque totam ullam vitae explicabo quos nulla, consequuntur debitis corrupti quam rerum laboriosam nesciunt. Reprehenderit, atque temporibus. Vel! Molestias enim, dolore, cum unde labore aliquam asperiores quibusdam delectus suscipit quaerat facilis nostrum deleniti quasi corporis eius cumque? Laborum iure saepe illo magnam! Totam et blanditiis dolores? Dolorum, ea. Rerum adipisci debitis beatae cumque similique necessitatibus asperiores ratione possimus obcaecati error, aperiam, molestiae sint, illum consequatur incidunt. Quae soluta, omnis nostrum libero maxime velit minima asperiores laborum aut illo. Dignissimos voluptatibus consectetur nemo dolore maiores itaque eaque beatae a? Aspernatur porro sequi voluptatum ea ullam deleniti, necessitatibus sit quia dolor dolores ad quasi. Libero vel id dolorum harum velit? Provident, tempora dignissimos! Maxime, iste. Itaque animi et aut modi nulla quis consequuntur, incidunt ipsum qui architecto soluta eius in labore dolores suscipit doloribus accusamus perspiciatis voluptatum ab enim natus? Autem quis minus, repellendus quaerat dicta labore vel voluptatibus voluptatem voluptatum facere aspernatur assumenda quidem eum. Odit sit nulla eius obcaecati perferendis iste natus beatae doloribus ullam, corrupti odio soluta! Nostrum accusamus minus quasi excepturi, maiores quos necessitatibus reiciendis? Est fuga ex saepe at reiciendis dolores vel maxime velit odio ut nemo, nihil doloribus nisi, quas enim provident. Molestias, omnis.",
      submitted_by: { name: "Jason", image: "" },
      attachments: [],
      comments: [
        {
          id: 1,
          comment:
            "Could you let me know over Slack when you're finished with this. Could you let me know over Slack when you're finished with this. Could you let me know over Slack when you're finished with this",
          submitted_by: { name: "Jason", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 2,
          comment: "Was it just for the registration form?",
          submitted_by: { name: "Darius", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 3,
          comment: "Its only occurring on that page. Old implementation?",
          submitted_by: { name: "Jason", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 4,
          comment:
            "Could you let me know over Slack when you're finished with this",
          submitted_by: { name: "Jason", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 5,
          comment: "Was it just for the registration form?",
          submitted_by: { name: "Darius", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 6,
          comment: "Its only occurring on that page. Old implementation?",
          submitted_by: { name: "Jason", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 7,
          comment:
            "Could you let me know over Slack when you're finished with this",
          submitted_by: { name: "Jason", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 8,
          comment: "Was it just for the registration form?",
          submitted_by: { name: "Darius", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
        {
          id: 9,
          comment: "Its only occurring on that page. Old implementation?",
          submitted_by: { name: "Jason", image: "" },
          created_at: "2022/05/01 12:00:00",
        },
      ],
    },
  });
}
