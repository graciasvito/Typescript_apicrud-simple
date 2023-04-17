import express, { Express, Request, Response } from "express";
import { store } from "./models/user.model";

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.send("<h1>SUCCESS</h1>");
});

app.post("/user", async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, name } = req.body;
    const result = await store({ email, name });
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// app.get("/", (req: Request, res: Response): Promise<Response> => {
//     try {
//         const result = await getAll()

//      } catch (error) {
//   });

const PORT: number = 3000;

app.listen(PORT, (): void => {
  console.log(`Service running at PORT: ${PORT}`);
});
