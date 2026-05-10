import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri || '',
    }),
  });

  const data = await response.json();
  console.log("SPOTIFY TOKEN RESPONSE:", data);

  if (data.access_token) {
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const dashboardUrl = `${protocol}://${host}/dashboard`;
    
    // Return HTML meta-refresh to guarantee the browser processes the Set-Cookie headers on a 200 OK
    const res = new NextResponse(
      `<html><head><meta http-equiv="refresh" content="0;url=/dashboard"></head><body>Redirecting to dashboard...</body></html>`,
      {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
    
    res.cookies.set('spotify_access_token', data.access_token, {
      path: '/',
      maxAge: 3600,
      secure: false,
      sameSite: 'lax'
    });
    
    if (data.refresh_token) {
      res.cookies.set('spotify_refresh_token', data.refresh_token, {
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
        secure: false,
        sameSite: 'lax'
      });
    }

    return res;
  }

  return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
}
