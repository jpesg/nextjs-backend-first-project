// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//filename: if it has [...id] -> handle more segmenst you might have /api/some-value/more-segments
import { buildPath, extractFeebackData } from "./feedback";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    //....
  }
  const id = req.query.feedbackId;
  const _path = buildPath();
  const data = extractFeebackData(_path);
  res.status(200).json({ feedback: data.find((i) => i.id === id) });
}
