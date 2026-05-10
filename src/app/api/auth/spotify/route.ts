import { NextResponse } from 'next/server';

export async function GET() {
  const scope = 'user-read-private user-read-email user-top-read user-read-recently-played user-read-currently-playing user-read-playback-state';
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const url = new URL('https://accounts.spotify.com/authorize');
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('client_id', clientId || '');
  url.searchParams.append('scope', scope);
  url.searchParams.append('redirect_uri', redirectUri || '');
  url.searchParams.append('show_dialog', 'true');

  return NextResponse.redirect(url.toString());
}
