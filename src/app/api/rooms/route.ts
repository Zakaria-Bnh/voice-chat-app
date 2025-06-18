import { NextApiRequest, NextApiResponse } from "next";
// import { dbConnect } from "@/lib/dbConnect";
// or using relative path:
import { dbConnect } from "../../../../lib/dbConnect";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET":
      await dbConnect();
      console.log("Successfully connected to MongoDB");
  }
}
