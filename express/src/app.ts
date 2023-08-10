import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get(
  "/api/data/:bookId/:userId",
  (
    req: Request<{ bookId: string; userId: number }, {}, { name: string }, {}>,
    res: Response,
    next: NextFunction
  ) => {
    console.log(req.params);
  }
);

app.get("/api/data/:bookId", (req: Request, res: Response) => {
  console.log(req.params);
  return res.send(req.params);
});

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

// using wildcard
app.get("/ab*cd", (req: Request, res: Response) => {
  res.send("ab*bc");
});

// using regex
app.get(/abc/, (req: Request, res: Response) => {
  res.send("/abc/");
});

app
  .route("/")
  .get((req: Request, res: Response) => {
    return res.send("You make a GET request");
  })
  .post((req: Request, res: Response) => {
    return res.send("You make a POST request");
  })
  .put((req: Request, res: Response) => {
    return res.send("You make a PUT request");
  })
  .delete((req: Request, res: Response) => {
    return res.send("You make a DELETE request");
  });

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.json({
    success: true,
    name: "Moaaz",
  });
  /* res.redirect("https://www.google.com"); */
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.sendStatus(200);
});

app.listen(3000, () => console.log("Server is running"));
