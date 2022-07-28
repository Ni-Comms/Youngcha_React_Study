import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `JIMMY (${userId})`,
      })
    );
    //return res(ctx.status(400));
  }),

  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id");
    return res(
      ctx.json({
        name: id === "1" ? "the one" : "the others",
      })
    );
  }),

  rest.get("http://localhost:3000/todo", async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: "todo from server",
        },
      })
    );
  }),
  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
];
