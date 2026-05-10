"use server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function generateListeningAnalysis(topArtists: any[], topTracks: any[]) {
  if (!GEMINI_API_KEY) {
    console.error("No Gemini API Key found");
    return null;
  }

  // Extract a summarized list to send to Gemini
  const artistNames = topArtists.map(a => a.name).join(", ");
  const trackDetails = topTracks.map(t => `${t.name} by ${t.artists[0].name}`).join(", ");

  const prompt = `
    Analyze this user's music taste based on their Spotify data.
    Top Artists: ${artistNames}
    Top Tracks: ${trackDetails}

    Return a JSON object with EXACTLY this structure (no markdown formatting, just raw JSON):
    {
      "archetype": "A catchy title for their music personality (e.g., The Midnight Wanderer)",
      "description": "A 2-3 sentence engaging description of their taste.",
      "genreDNA": [
        { "name": "Main Genre", "percentage": 45, "color": "#a855f7" },
        { "name": "Second Genre", "percentage": 35, "color": "#06b6d4" },
        { "name": "Third Genre", "percentage": 20, "color": "#ec4899" }
      ],
      "moodSpectrum": {
        "sad": 20,
        "happy": 60,
        "energetic": 80,
        "chill": 40
      },
      "sonicNeighbors": [
        { "name": "Artist Name", "match": "94%" },
        { "name": "Another Artist", "match": "88%" },
        { "name": "Third Artist", "match": "82%" }
      ],
      "stats": {
        "diversityScore": 8.5
      }
    }
  `;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7,
        }
      }),
    });

    const data = await res.json();
    let text = data.candidates[0].content.parts[0].text;
    
    // Strip markdown formatting if Gemini included it
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
}
