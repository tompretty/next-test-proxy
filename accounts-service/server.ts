import express, { Request, Response } from "express";

const app = express();
const port = 3001;

// --- Routes ---

app.get("/api/account", (req: Request, res: Response) => {
  console.log("[GET] /api/account");

  res.json({ firstName: "John", lastName: "Doe" });
});

// --- Server Startup ---

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
