# geodetic-haversine-distance

[![Greenkeeper badge](https://badges.greenkeeper.io/dbrockman/geodetic-haversine-distance.svg)](https://greenkeeper.io/)

This function calculates the distance in meters between two latitude/longitude coordinates.
Instead of using a mean radius of Earth, the radius is estimated using the `latitude` of the first position.


## Install

```
$ npm install --save geodetic-haversine-distance
```


## Usage

```js
const haversineDistance = require('geodetic-haversine-distance');

const a = { latitude: 59.338746, longitude: 18.060683 };
const b = { latitude: 59.339042, longitude: 18.061779 };

haversineDistance(a, b);
//=> 70.37704048362993
```


## API

### haversineDistance(start, end)

Calculate the distance in meters between two positions.
The two positions must have the properties `latitude` and `longitude`.
