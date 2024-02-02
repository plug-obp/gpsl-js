import antlr4 from 'antlr4';
import gpslLexer from '../generated/grammar/gpslLexer.js';
import gpslParser from '../generated/grammar/gpslParser.js';
import {Context, GPSLSymbolResolver, GPSLSyntaxTreeMaker} from './gpslSyntaxTreeMaker.js';


export function readExpression(input) {
	const chars = new antlr4.InputStream(input);
	const lexer = new gpslLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new gpslParser(tokens);
	const tree = parser.formula();

	const syntaxTreeMaker = new GPSLSyntaxTreeMaker();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(syntaxTreeMaker, tree);
	return syntaxTreeMaker.map.get(tree);
}

export function readBlock(input) {
	const chars = new antlr4.InputStream(input);
	const lexer = new gpslLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new gpslParser(tokens);
	const tree = parser.block();

	const syntaxTreeMaker = new GPSLSyntaxTreeMaker();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(syntaxTreeMaker, tree);
	return syntaxTreeMaker.tree;
}

export function link(tree, context = new Map()) {
	tree.accept(new GPSLSymbolResolver(), new Context(context));
	tree;
}