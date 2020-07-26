// Speed limit = 70 km
// under 70 => Ok
// every 5 km above speed limit 1 point
// 75 km -> 1point
// Math.floor(1.3) => 1
// 180 -> if driver gets more 12 points license suspended

function checkSpeed(speed) {
  const MAX_SPEED = 70;
  const MAX_POINTS = 12;
  const KM_PER_POINTS = 5;

  if (speed < MAX_SPEED) {
    return "Ok";
  }

  let points = 0;
  const roundedSpeed = Math.floor(speed);

  points = Math.floor((roundedSpeed - MAX_SPEED) / KM_PER_POINTS);
  if (points >= MAX_POINTS) {
    return "suspended";
  }
  return points;
}

console.log(checkSpeed(72));
