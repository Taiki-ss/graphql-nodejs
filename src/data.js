/* data.js */

const Users = [
  {
    id: 1,
    name: "Nasu Kinoko",
    email: "kinoko@gmail.com",
    posts: [
      {
        id: 1,
        title: "まほよの主役は有朱",
        published: true,
        author: 1,
      },
      {
        id: 2,
        title: "月姫リメイク続編はいつになるのか",
        published: true,
        author: 1,
      },
      {
        id: 3,
        title: "Fateもいい",
        published: true,
        author: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Takeuchi Takashi",
    email: "takeuchi@gmail.com",
    posts: [],
  },
];

module.exports = {
  Users,
};
