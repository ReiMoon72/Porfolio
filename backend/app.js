import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`The Server is Running at Port ${PORT}`);
});
