import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { refresh_token } = await request.json();

    if (!refresh_token) {
      return NextResponse.json({ error: 'Missing refresh token' }, { status: 400 });
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      const res = NextResponse.json({ success: true });
      
      res.cookies.set('spotify_access_token', data.access_token, {
        path: '/',
        maxAge: 3600,
        secure: false,
        sameSite: 'lax',
      });

      // Sometimes Spotify returns a new refresh token
      if (data.refresh_token) {
        res.cookies.set('spotify_refresh_token', data.refresh_token, {
          path: '/',
          maxAge: 30 * 24 * 60 * 60,
          secure: false,
          sameSite: 'lax',
        });
      }

      return res;
    }

    return NextResponse.json({ error: 'Failed to refresh' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
