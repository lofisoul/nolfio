export interface IStrava {
  clientID: string;
  clientSecret: string;
  refreshToken: string;
  callActivities: string;
}
export const strava: IStrava = {
  clientID: "54083",
  clientSecret: "510b710a2d4601bd72776062e54fbad64429e1bf",
  refreshToken: "9c0c2a10754e5bf031ecc4beac2b68836155e6b2",
  callActivities: `https://www.strava.com/api/v3/athlete/activities?access_token=`,
};

export const callRefresh = `https://www.strava.com/oauth/token?client_id=${strava.clientID}&client_secret=${strava.clientSecret}&refresh_token=${strava.refreshToken}&grant_type=refresh_token`;
