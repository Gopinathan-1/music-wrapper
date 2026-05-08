const LASTFM_API_URL = "http://ws.audioscrobbler.com/2.0/";

async function fetchFromLastfm(method: string, params: Record<string, string>) {
  const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
  if (!apiKey) {
    throw new Error("Last.fm API key is missing. Please add NEXT_PUBLIC_LASTFM_API_KEY to your .env.local");
  }

  const queryParams = new URLSearchParams({
    method,
    api_key: apiKey,
    format: "json",
    ...params,
  });

  const response = await fetch(`${LASTFM_API_URL}?${queryParams.toString()}`);
  if (!response.ok) {
    throw new Error(`Last.fm API error: ${response.statusText}`);
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(`Last.fm API error: ${data.message}`);
  }

  return data;
}

export const lastfmApi = {
  getUserInfo: (user: string) => fetchFromLastfm("user.getinfo", { user }),
  getTopArtists: (user: string, limit = 50) => fetchFromLastfm("user.gettopartists", { user, limit: limit.toString(), period: "12month" }),
  getTopTracks: (user: string, limit = 50) => fetchFromLastfm("user.gettoptracks", { user, limit: limit.toString(), period: "12month" }),
  getArtistTopTags: (artist: string) => fetchFromLastfm("artist.gettoptags", { artist, autocorrect: "1" }),
};
