const FREESOUND_API_KEY = 'eh3xuoTAmLExFgb4uWxFMGiFrnH7A78jvQYGKzAB';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { q = 'vocal', sort = 'score', page_size = 15 } = req.query;
  try {
    const url = `https://freesound.org/apiv2/search/text/?query=${encodeURIComponent(q)}&filter=tag:vocal&fields=id,name,username,duration,previews,license,tags,download_number,created&page_size=${page_size}&sort=${sort}&token=${FREESOUND_API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Freesound error: ${response.status}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
