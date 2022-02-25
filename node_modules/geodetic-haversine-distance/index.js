'use strict';

const earthRadiusAtGeodeticLatitude = require('earth-radius-at-geodetic-latitude');

const toRadians = degrees => degrees * (Math.PI / 180);

function haversineDistance(start, end) {
  const r_meters = earthRadiusAtGeodeticLatitude(start.latitude);
  const d_lat = toRadians(end.latitude - start.latitude);
  const d_lon = toRadians(end.longitude - start.longitude);
  const start_lat = toRadians(start.latitude);
  const end_lat = toRadians(end.latitude);

  const a = Math.sin(d_lat / 2) * Math.sin(d_lat / 2) +
            Math.sin(d_lon / 2) * Math.sin(d_lon / 2) *
            Math.cos(start_lat) * Math.cos(end_lat);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return r_meters * c;
}

module.exports = haversineDistance;
