import fs from "fs";
import path from "path";

export const buildPath = () =>
  path.join(process.cwd(), "data", "feedback.json");
export const extractFeebackData = (_path) => {
  const fileData = fs.readFileSync(_path);
  return JSON.parse(fileData);
};

export default function handler(req, res) {
  const _path = buildPath();
  if (req.method === "POST") {
    const { email, text } = req.body;
    const newData = {
      id: new Date().toISOString(),
      email,
      text,
    };
    const data = extractFeebackData(_path);
    data.push(newData);
    fs.writeFileSync(_path, JSON.stringify(data));
    return res.status(201).json({ message: "Success", feedback: newData });
  }
  const data = extractFeebackData(_path);
  res.status(200).json({ feedback: data });
}
