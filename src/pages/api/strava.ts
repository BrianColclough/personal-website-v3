export const prerender = false;

export async function GET() {
  const clientId = import.meta.env.STRAVA_CLIENT_ID;
  const clientSecret = import.meta.env.STRAVA_CLIENT_SECRET;
  const refreshToken = import.meta.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return new Response(JSON.stringify({ error: 'Missing Strava credentials in .env' }), { status: 500 });
  }

  try {
    // 1. Refresh the token
    const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    });

    if (!tokenResponse.ok) {
      console.error('Strava token refresh failed:', await tokenResponse.text());
      return new Response(JSON.stringify({ error: 'Failed to authenticate with Strava' }), { status: 500 });
    }

    const { access_token } = await tokenResponse.json();

    // 2. Fetch the recent activities
    // Fetch 15 so we have enough buffer if you recently did cross-training/walks
    const activitiesResponse = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=15', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!activitiesResponse.ok) {
      console.error('Strava activities fetch failed:', await activitiesResponse.text());
      return new Response(JSON.stringify({ error: 'Failed to fetch Strava activities' }), { status: 500 });
    }

    const activities = await activitiesResponse.json();
    
    // Filter out non-runs first, then take the top 3
    const runActivities = activities.filter((a: any) => a.type === 'Run' || a.type === 'VirtualRun').slice(0, 3);

    // 3. For each activity, fetch detailed data to get the description
    const detailedActivities = await Promise.all(
      runActivities.map(async (activity: any) => {
        // Fetch detailed stats
        const detailResponse = await fetch(`https://www.strava.com/api/v3/activities/${activity.id}`, {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        
        const detail = detailResponse.ok ? await detailResponse.json() : activity;
        
        return {
          id: activity.id,
          name: activity.name,
          type: activity.type, // 'Run', 'Ride', etc.
          distance: activity.distance, // meters
          time: activity.moving_time, // seconds
          pace: activity.moving_time / (activity.distance / 1000), // seconds per km
          date: activity.start_date_local,
          description: detail.description || '',
          polyline: detail.map?.summary_polyline || activity.map?.summary_polyline || ''
        };
      })
    );

    return new Response(JSON.stringify(detailedActivities), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache this response on Vercel's edge CDN for 4 hours (14400 seconds)
        // Serve stale data while revalidating for up to 24 hours (86400 seconds)
        'Cache-Control': 'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400',
      }
    });

  } catch (err) {
    console.error('Strava API Error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error fetching Strava data' }), { status: 500 });
  }
}
