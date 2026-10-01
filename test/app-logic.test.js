import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateClockRotations, getNextMessageIndex } from '../app-logic.js';

test('advances the message index', () => {
  assert.equal(getNextMessageIndex(0, 3), 1);
});

test('wraps the message index to the beginning', () => {
  assert.equal(getNextMessageIndex(2, 3), 0);
});

test('calculates clock hand rotations at noon', () => {
  assert.deepEqual(calculateClockRotations(12, 0, 0), {
    hours: 0,
    minutes: 0,
    seconds: 0
  });
});

test('includes minutes and seconds in clock hand rotations', () => {
  assert.deepEqual(calculateClockRotations(3, 30, 30), {
    hours: 105.25,
    minutes: 183,
    seconds: 180
  });
});