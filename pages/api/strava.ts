import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const activitiesEndpoint = `https://www.strava.com/api/v3/athlete/activities?access_token=`;

  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: "refresh_token",
  });

  const reauthorizeResponse = await fetch(
    "https://www.strava.com/oauth/token",
    {
      method: "post",
      headers: headers,
      body: body,
    }
  ).then((res) => res.json());

  const response = await fetch(
    `${activitiesEndpoint}${reauthorizeResponse.access_token}&after=1641013200&per_page=200`
  ).then((res) => res.json());

  console.log(response.length);

  return res.status(200).json({ response });
}
