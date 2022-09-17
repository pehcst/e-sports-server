import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 1,
      title: "Ad 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Ad 2",
      description: "Description 3",
    },
  ]);
});

app.listen(3333);
