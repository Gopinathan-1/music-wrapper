"use server";

import { cookies } from "next/headers";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("spotify_access_token")?.value;
  return token;
}

export async function getTopTracks(limit = 10, timeRange = "short_term") {
  const token = await getAccessToken();
  if (!token) return null;

  const res = await fetch(`${SPOTIFY_API_URL}/me/top/tracks?limit=${limit}&time_range=${timeRange}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Spotify API Error (Top Tracks): ${res.status}`, errorText);
    return null;
  }
  return res.json();
}

export async function getTopArtists(limit = 10, timeRange = "short_term") {
  const token = await getAccessToken();
  if (!token) return null;

  const res = await fetch(`${SPOTIFY_API_URL}/me/top/artists?limit=${limit}&time_range=${timeRange}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return null;
  return res.json();
}

export async function getRecentlyPlayed(limit = 10) {
  const token = await getAccessToken();
  if (!token) return null;

  const res = await fetch(`${SPOTIFY_API_URL}/me/player/recently-played?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return null;
  return res.json();
}

export async function getCurrentlyPlaying() {
  const token = await getAccessToken();
  if (!token) return null;

  const res = await fetch(`${SPOTIFY_API_URL}/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 204 || res.status > 400) return null; // 204 means nothing is playing
  return res.json();
}
