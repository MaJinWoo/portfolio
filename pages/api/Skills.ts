import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch("http://localhost:4000/skills");
  const skills = await response.json();
  res.status(200).json(skills);
}
