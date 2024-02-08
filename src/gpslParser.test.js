import { text } from 'express';
import {antlr4Parser, readExpression} from './gpslReader.js';

function parseExpression(input) {
    const parser = antlr4Parser(input);
    const tree = parser.formula();
    return tree.toStringTree(null, parser);
}
// readExpression('|to\\|to|');

test('literal', () => {
    expect(parseExpression('true')).toBe('(formula (literal true))');
    expect(parseExpression('false')).toBe('(formula (literal false))');
});

test('reference', () => {
    expect(parseExpression('x')).toBe('(formula x)');
    expect(parseExpression('zm')).toBe('(formula zm)');
    expect(parseExpression('x1')).toBe('(formula x1)');
    expect(parseExpression('N x')).toBe('(formula N (formula x))');
});

test('atom |', () => {
    expect(parseExpression('|x|')).toBe('(formula (atom |x|))');
    expect(parseExpression('|a-b|')).toBe('(formula (atom |a-b|))');
    expect(parseExpression('|a>2|')).toBe('(formula (atom |a>2|))');

    expect(parseExpression('|to\\|to|')).toBe('(formula (atom |to\\|to|))');
    expect(parseExpression('|to\\"to|')).toBe('(formula (atom |to\\"to|))');
});

test('atom "', () => {
    expect(parseExpression('"x"')).toBe('(formula (atom "x"))');
    expect(parseExpression('"a-b"')).toBe('(formula (atom "a-b"))');
    expect(parseExpression('"a>2"')).toBe('(formula (atom "a>2"))');

    expect(parseExpression('"to\\|to"')).toBe('(formula (atom "to\\|to"))');
    expect(parseExpression('"to\\"to"')).toBe('(formula (atom "to\\"to"))');
});

test('paren', () => {
    expect(parseExpression('(true)')).toBe('(formula ( (formula (literal true)) ))');
    expect(parseExpression('(zm)')).toBe('(formula ( (formula zm) ))');
    expect(parseExpression('(x)')).toBe('(formula ( (formula x) ))');
    expect(parseExpression('(N x)')).toBe('(formula ( (formula N (formula x)) ))');
});

test('unary negation !', () => {
    expect(parseExpression('!true')).toBe('(formula ! (formula (literal true)))');
    expect(parseExpression('!false')).toBe('(formula ! (formula (literal false)))');
    expect(parseExpression('!x')).toBe('(formula ! (formula x))');
    expect(parseExpression('!zm')).toBe('(formula ! (formula zm))');
    expect(parseExpression('!!true')).toBe('(formula ! (formula ! (formula (literal true))))');
});

test('unary negation ~', () => {
    expect(parseExpression('~true')).toBe('(formula ~ (formula (literal true)))');
    expect(parseExpression('~false')).toBe('(formula ~ (formula (literal false)))');
    expect(parseExpression('~x')).toBe('(formula ~ (formula x))');
    expect(parseExpression('~zm')).toBe('(formula ~ (formula zm))');
    expect(parseExpression('~~true')).toBe('(formula ~ (formula ~ (formula (literal true))))');
});

test('unary negation not', () => {
    expect(parseExpression('not true')).toBe('(formula not (formula (literal true)))');
    expect(parseExpression('not false')).toBe('(formula not (formula (literal false)))');
    expect(parseExpression('not x')).toBe('(formula not (formula x))');
    expect(parseExpression('not zm')).toBe('(formula not (formula zm))');
    expect(parseExpression('not not true')).toBe('(formula not (formula not (formula (literal true))))');
});

test('next', () => {
    expect(parseExpression('next true')).toBe('(formula next (formula (literal true)))');
    expect(parseExpression('N true')).toBe('(formula N (formula (literal true)))');
    expect(parseExpression('() true')).toBe('(formula () (formula (literal true)))');
    expect(parseExpression('◯ true')).toBe('(formula ◯ (formula (literal true)))');
    expect(parseExpression('o true')).toBe('(formula o (formula (literal true)))');
    expect(parseExpression('o(o x)')).toBe('(formula o (formula ( (formula o (formula x)) )))');
});

test('eventually', () => {
    expect(parseExpression('eventually true')).toBe('(formula eventually (formula (literal true)))');
    expect(parseExpression('F true')).toBe('(formula F (formula (literal true)))');
    expect(parseExpression('<> true')).toBe('(formula <> (formula (literal true)))');
    expect(parseExpression('◇ true')).toBe('(formula ◇ (formula (literal true)))');
});

test('always', () => {
    expect(parseExpression('globally true')).toBe('(formula globally (formula (literal true)))');
    expect(parseExpression('always true')).toBe('(formula always (formula (literal true)))');
    expect(parseExpression('G true')).toBe('(formula G (formula (literal true)))');
    expect(parseExpression('[] true')).toBe('(formula [] (formula (literal true)))');
    expect(parseExpression('☐ true')).toBe('(formula ☐ (formula (literal true)))');
});

test('strong until', () => {
    expect(parseExpression('true U false')).toBe('(formula (formula (literal true)) U (formula (literal false)))');
    expect(parseExpression('true SU false')).toBe('(formula (formula (literal true)) SU (formula (literal false)))');
    expect(parseExpression('true until false')).toBe('(formula (formula (literal true)) until (formula (literal false)))');
    expect(parseExpression('true strong-until false')).toBe('(formula (formula (literal true)) strong-until (formula (literal false)))');
});

test('weak until', () => {
    expect(parseExpression('true W false')).toBe('(formula (formula (literal true)) W (formula (literal false)))');
    expect(parseExpression('true WU false')).toBe('(formula (formula (literal true)) WU (formula (literal false)))');
    expect(parseExpression('true weak-until false')).toBe('(formula (formula (literal true)) weak-until (formula (literal false)))');
});

test('strong-release', () => {
    expect(parseExpression('true M false')).toBe('(formula (formula (literal true)) M (formula (literal false)))');
    expect(parseExpression('true SR false')).toBe('(formula (formula (literal true)) SR (formula (literal false)))');
    expect(parseExpression('true strong-release false')).toBe('(formula (formula (literal true)) strong-release (formula (literal false)))');
});

test('weak-release', () => {
    expect(parseExpression('true R false')).toBe('(formula (formula (literal true)) R (formula (literal false)))');
    expect(parseExpression('true WR false')).toBe('(formula (formula (literal true)) WR (formula (literal false)))');
    expect(parseExpression('true weak-release false')).toBe('(formula (formula (literal true)) weak-release (formula (literal false)))');
});