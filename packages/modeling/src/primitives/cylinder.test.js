import test from 'ava'

import { geom3 } from '../geometries/index.js'

import { cylinder } from './index.js'

import { comparePolygonsAsPoints } from '../../test/helpers/index.js'

test('cylinder (defaults)', (t) => {
  const obs = cylinder()
  const pts = geom3.toPoints(obs)

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 96)
})

test('cylinder (zero height)', (t) => {
  const obs = cylinder({ height: 0 })
  const pts = geom3.toPoints(obs)
  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 0)
})

test('cylinder (zero radius)', (t) => {
  const obs = cylinder({ radius: 0 })
  const pts = geom3.toPoints(obs)
  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 0)
})

test('cylinder (options)', (t) => {
  let obs = cylinder({ height: 10, radius: 4, segments: 5 })
  let pts = geom3.toPoints(obs)
  let exp = [
    [[0, 0, -5], [1.2360679774997898, 3.804226065180614, -5], [4, 0, -5]],
    [[1.2360679774997898, 3.804226065180614, -5], [1.2360679774997898, 3.804226065180614, 5],
      [4, 0, 5], [4, 0, -5]],
    [[0, 0, 5], [4, 0, 5], [1.2360679774997898, 3.804226065180614, 5]],
    [[0, 0, -5], [-3.2360679774997894, 2.351141009169893, -5], [1.2360679774997898, 3.804226065180614, -5]],
    [[-3.2360679774997894, 2.351141009169893, -5], [-3.2360679774997894, 2.351141009169893, 5],
      [1.2360679774997898, 3.804226065180614, 5], [1.2360679774997898, 3.804226065180614, -5]],
    [[0, 0, 5], [1.2360679774997898, 3.804226065180614, 5], [-3.2360679774997894, 2.351141009169893, 5]],
    [[0, 0, -5], [-3.23606797749979, -2.351141009169892, -5], [-3.2360679774997894, 2.351141009169893, -5]],
    [[-3.23606797749979, -2.351141009169892, -5], [-3.23606797749979, -2.351141009169892, 5],
      [-3.2360679774997894, 2.351141009169893, 5], [-3.2360679774997894, 2.351141009169893, -5]],
    [[0, 0, 5], [-3.2360679774997894, 2.351141009169893, 5], [-3.23606797749979, -2.351141009169892, 5]],
    [[0, 0, -5], [1.236067977499789, -3.8042260651806146, -5], [-3.23606797749979, -2.351141009169892, -5]],
    [[1.236067977499789, -3.8042260651806146, -5], [1.236067977499789, -3.8042260651806146, 5],
      [-3.23606797749979, -2.351141009169892, 5], [-3.23606797749979, -2.351141009169892, -5]],
    [[0, 0, 5], [-3.23606797749979, -2.351141009169892, 5], [1.236067977499789, -3.8042260651806146, 5]],
    [[0, 0, -5], [4, 0, -5], [1.236067977499789, -3.8042260651806146, -5]],
    [[4, 0, -5], [4, 0, 5], [1.236067977499789, -3.8042260651806146, 5],
      [1.236067977499789, -3.8042260651806146, -5]],
    [[0, 0, 5], [1.236067977499789, -3.8042260651806146, 5], [4, 0, 5]]
  ]

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 15)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test center
  obs = cylinder({ center: [-5, -5, -5], segments: 5 })
  pts = geom3.toPoints(obs)
  exp = [
    [[-5, -5, -6], [-4.6909830056250525, -4.048943483704846, -6], [-4, -5, -6]],
    [[-4.6909830056250525, -4.048943483704846, -6], [-4.6909830056250525, -4.048943483704846, -4],
      [-4, -5, -4], [-4, -5, -6]],
    [[-5, -5, -4], [-4, -5, -4], [-4.6909830056250525, -4.048943483704846, -4]],
    [[-5, -5, -6], [-5.8090169943749475, -4.412214747707527, -6], [-4.6909830056250525, -4.048943483704846, -6]],
    [[-5.8090169943749475, -4.412214747707527, -6], [-5.8090169943749475, -4.412214747707527, -4],
      [-4.6909830056250525, -4.048943483704846, -4], [-4.6909830056250525, -4.048943483704846, -6]],
    [[-5, -5, -4], [-4.6909830056250525, -4.048943483704846, -4], [-5.8090169943749475, -4.412214747707527, -4]],
    [[-5, -5, -6], [-5.8090169943749475, -5.587785252292473, -6], [-5.8090169943749475, -4.412214747707527, -6]],
    [[-5.8090169943749475, -5.587785252292473, -6], [-5.8090169943749475, -5.587785252292473, -4],
      [-5.8090169943749475, -4.412214747707527, -4], [-5.8090169943749475, -4.412214747707527, -6]],
    [[-5, -5, -4], [-5.8090169943749475, -4.412214747707527, -4], [-5.8090169943749475, -5.587785252292473, -4]],
    [[-5, -5, -6], [-4.6909830056250525, -5.951056516295154, -6], [-5.8090169943749475, -5.587785252292473, -6]],
    [[-4.6909830056250525, -5.951056516295154, -6], [-4.6909830056250525, -5.951056516295154, -4],
      [-5.8090169943749475, -5.587785252292473, -4], [-5.8090169943749475, -5.587785252292473, -6]],
    [[-5, -5, -4], [-5.8090169943749475, -5.587785252292473, -4], [-4.6909830056250525, -5.951056516295154, -4]],
    [[-5, -5, -6], [-4, -5, -6], [-4.6909830056250525, -5.951056516295154, -6]],
    [[-4, -5, -6], [-4, -5, -4],
      [-4.6909830056250525, -5.951056516295154, -4], [-4.6909830056250525, -5.951056516295154, -6]],
    [[-5, -5, -4], [-4.6909830056250525, -5.951056516295154, -4], [-4, -5, -4]]
  ]

  t.notThrows(() => geom3.validate(obs))
  t.is(pts.length, 15)
  t.true(comparePolygonsAsPoints(pts, exp))
})
