import { spotifyApi } from "./index";

export type GenreData = {
  [key: string]: number;
};

export type MoodData = {
  energy: number;
  valence: number;
  danceability: number;
  acousticness: number;
  instrumentalness: number;
  tempo: number;
};

export interface AnalysisResults {
  genres: GenreData;
  mood: MoodData;
  archetype: {
    name: string;
    description: string;
  };
}

export async function analyzeSpotifyData(accessToken: string): Promise<AnalysisResults> {
  const topArtists = await spotifyApi.getTopArtists(accessToken, 50);
  const topTracks = await spotifyApi.getTopTracks(accessToken, 50);
  
  // 1. Process Genre DNA
  const genres: GenreData = {};
  topArtists.items.forEach((artist: any) => {
    artist.genres.forEach((genre: string) => {
      genres[genre] = (genres[genre] || 0) + 1;
    });
  });

  // Convert to percentages and take top 5
  const totalGenreCount = Object.values(genres).reduce((a, b) => a + b, 0);
  const sortedGenres = Object.entries(genres)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .reduce((obj, [key, val]) => {
      obj[key] = Math.round((val / totalGenreCount) * 100);
      return obj;
    }, {} as GenreData);

  // 2. Process Mood Spectrum
  const trackIds = topTracks.items.slice(0, 50).map((t: any) => t.id);
  const audioFeaturesResponse = await spotifyApi.getAudioFeatures(accessToken, trackIds);
  const audioFeatures = audioFeaturesResponse.audio_features;

  const avgMood: MoodData = audioFeatures.reduce(
    (acc: MoodData, feature: any) => {
      if (!feature) return acc;
      return {
        energy: acc.energy + feature.energy,
        valence: acc.valence + feature.valence,
        danceability: acc.danceability + feature.danceability,
        acousticness: acc.acousticness + feature.acousticness,
        instrumentalness: acc.instrumentalness + feature.instrumentalness,
        tempo: acc.tempo + feature.tempo,
      };
    },
    { energy: 0, valence: 0, danceability: 0, acousticness: 0, instrumentalness: 0, tempo: 0 }
  );

  const moodCount = audioFeatures.filter(Boolean).length;
  const mood: MoodData = {
    energy: Math.round((avgMood.energy / moodCount) * 100),
    valence: Math.round((avgMood.valence / moodCount) * 100),
    danceability: Math.round((avgMood.danceability / moodCount) * 100),
    acousticness: Math.round((avgMood.acousticness / moodCount) * 100),
    instrumentalness: Math.round((avgMood.instrumentalness / moodCount) * 100),
    tempo: Math.round(avgMood.tempo / moodCount),
  };

  // 3. Personality Archetype Engine (Starter Logic)
  const archetype = calculateArchetype(mood, sortedGenres);

  return {
    genres: sortedGenres,
    mood,
    archetype,
  };
}

function calculateArchetype(mood: MoodData, genres: GenreData) {
  const primaryGenre = Object.keys(genres)[0] || "";
  
  if (mood.energy < 40 && mood.valence < 40) {
    return {
      name: "Midnight Dreamer",
      description: "You gravitate towards ambient textures and lo-fi beats that define your nocturnal introspection.",
    };
  }
  
  if (mood.danceability > 70 && mood.energy > 70) {
    return {
      name: "Neon Rebel",
      description: "A high-energy frequency of pulsating rhythms and electric confidence defines your sonic presence.",
    };
  }

  if (mood.valence > 60 && mood.danceability > 60) {
    return {
      name: "Chaos Romantic",
      description: "Your music is a vibrant mix of emotional highs and danceable energy. You live in the technicolor present.",
    };
  }

  if (mood.instrumentalness > 40) {
    return {
      name: "Cosmic Introvert",
      description: "You find depth in complex instrumentals and vast soundscapes that go beyond traditional song structures.",
    };
  }

  return {
    name: "Velvet Intellectual",
    description: "Curated, sophisticated, and nuanced. Your taste reflects a deep appreciation for musical history and editorial polish.",
  };
}
