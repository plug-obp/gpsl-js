import {antlr4Parser, readExpression} from './gpslReader.js';

function parseExpression(input) {
    const parser = antlr4Parser(input);
    const tree = parser.formula();
    console.log(tree.toStringTree());
    return tree;
}
readExpression('|to\\|to|');

test('literal', () => {
    expect(readExpression('|to\\|to|').toStringTree()).toBe('([] ([51] true))');
});

test('next', () => {
    expect(parseExpression('N true').toStringTree()).toBe('([] N ([61] ([51 61] true)))');
});