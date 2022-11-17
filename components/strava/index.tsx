import { useState, useEffect } from "react";
import { strava, callRefresh } from "./utils";

export function Strava() {
  const [activities, setActivities] = useState({});

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, [callRefresh]);

  // use current access token to call all activities
  function getActivities(access) {
    // console.log(callActivities + access)
    fetch(strava.callActivities + access)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((e) => console.log(e));
  }

  function showActivities() {
    console.log(activities);
    return activities.length;
  }
  return <div>{showActivities()}</div>;
}
