import { readExpression } from "./gpslReader.js";
import * as stx from './gpslSyntaxModel.js';

test('literal', () => {
  expect(readExpression('true')).toEqual(new stx.GPSLTrue());
  expect(readExpression('false')).toEqual(new stx.GPSLFalse());
});

test('reference', () => {
  expect(readExpression('x')).toEqual(new stx.GPSLReference('x'));
  expect(readExpression('zm')).toEqual(new stx.GPSLReference('zm'));
});

test('paren', () => { 
  expect(readExpression('(true)')).toEqual(new stx.GPSLTrue());
  expect(readExpression('(zm)')).toEqual(new stx.GPSLReference('zm'));
});

test('atom', () => {
    expect(readExpression('|x|')).toEqual(new stx.GPSLAtom('x', '|'));
    expect(readExpression('|a-b|')).toEqual(new stx.GPSLAtom('a-b', '|'));
    expect(readExpression('"a>2"')).toEqual(new stx.GPSLAtom('a>2', '"'));
});

test('unary negation', () => {
    expect(readExpression('!true')).toEqual(new stx.GPSLNegation('!', new stx.GPSLTrue()));
    expect(readExpression('!false')).toEqual(new stx.GPSLNegation('!', new stx.GPSLFalse()));
    expect(readExpression('!x')).toEqual(new stx.GPSLNegation('!', new stx.GPSLReference('x')));
    expect(readExpression('!zm')).toEqual(new stx.GPSLNegation('!', new stx.GPSLReference('zm')));
    expect(readExpression('!!true')).toEqual(new stx.GPSLNegation('!', new stx.GPSLNegation('!', new stx.GPSLTrue())));
});

test('unary next', () => {
    expect(readExpression('X true')).toEqual(new stx.GPSLNext('X', new stx.GPSLTrue()));
    expect(readExpression('next false')).toEqual(new stx.GPSLNext('next', new stx.GPSLFalse()));
    expect(readExpression('N x')).toEqual(new stx.GPSLNext('N', new stx.GPSLReference('x')));
    expect(readExpression('◯ zm')).toEqual(new stx.GPSLNext('◯', new stx.GPSLReference('zm')));
    expect(readExpression('Xo true')).toEqual(new stx.GPSLNext('X', new stx.GPSLNext('o', new stx.GPSLTrue())));
});