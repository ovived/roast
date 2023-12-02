// pages/api/saveAudio.js
import { supabase } from '../../utils/initSupabase'; // Import your Supabase client

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data, error } = await supabase.storage.from('roasts').upload('roast.mp3', req.body);
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ data });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}