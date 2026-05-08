const BASE_URL = "https://api.spotify.com/v1";

async function fetchFromSpotify(endpoint: string, accessToken: string) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error("Failed to fetch from Spotify");
  }

  return response.json();
}

export const spotifyApi = {
  getUserProfile: (accessToken: string) => 
    fetchFromSpotify("/me", accessToken),
  
  getTopArtists: (accessToken: string, limit = 20, timeRange = "medium_term") => 
    fetchFromSpotify(`/me/top/artists?limit=${limit}&time_range=${timeRange}`, accessToken),
  
  getTopTracks: (accessToken: string, limit = 20, timeRange = "medium_term") => 
    fetchFromSpotify(`/me/top/tracks?limit=${limit}&time_range=${timeRange}`, accessToken),
  
  getRecentlyPlayed: (accessToken: string, limit = 20) => 
    fetchFromSpotify(`/me/player/recently-played?limit=${limit}`, accessToken),
  
  getAudioFeatures: (accessToken: string, ids: string[]) => 
    fetchFromSpotify(`/audio-features?ids=${ids.join(",")}`, accessToken),
};
