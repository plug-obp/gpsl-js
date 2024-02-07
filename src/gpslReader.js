import antlr4 from 'antlr4';
import gpslLexer from '../generated/grammar/gpslLexer.js';
import gpslParser from '../generated/grammar/gpslParser.js';
import {Context, GPSLSymbolResolver, GPSLSyntaxBuilder} from './gpslSyntaxBuilder.js';

export function antlr4Parser(input) {
	const chars = new antlr4.InputStream(input);
	const lexer = new gpslLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	return new gpslParser(tokens);
}

function buildSyntaxModel(antlr4Tree) {
	const syntaxBuilder = new GPSLSyntaxBuilder();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(syntaxBuilder, antlr4Tree);
	return syntaxBuilder.map.get(antlr4Tree);
}

export function readExpression(input) {
	const parser = antlr4Parser(input);
	const tree = parser.formula();
	return buildSyntaxModel(tree);
}

export function readDeclarations(input) {
	const parser = antlr4Parser(input);
	const tree = parser.block();
	return buildSyntaxModel(tree);
}

export function link(tree, context = new Map()) {
	tree.accept(new GPSLSymbolResolver(), new Context(context));
	tree;
}

export function readAndLinkDeclarations(input) {
	const declarations = readDeclarations(input);
	link(declarations);
	return declarations;
}