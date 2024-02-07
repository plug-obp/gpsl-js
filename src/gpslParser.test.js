import {antlr4Parser} from './gpslReader.js';

function parseExpression(input) {
    const parser = antlr4Parser(input);
    const tree = parser.formula();
    console.log(tree.toStringTree(parser));
    return tree;
}

test('next', () => {
    parseExpression('true');
});