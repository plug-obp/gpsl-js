import antlr4 from 'antlr4';
import gpslLexer from '../generated/grammar/gpslLexer.js';
import gpslParser from '../generated/grammar/gpslParser.js';
import {Context, GPSLSymbolResolver, GPSLSyntaxBuilder} from './gpslSyntaxBuilder.js';
import { ltlToAutomaton } from './gpsl2automata.js';


// const input = "x = true y = false z = x and y"

const input = `
aliceCS			= |{Alice}1@CS|
bobCS 			= |{Bob}1@CS|
fairness 	   *= 
	let
		aliceFlagUP=|{sys}1:flags[0] = true|,
		bobFlagUP=|{sys}1:flags[1] = true|
	in 
		 ([]  (  (aliceFlagUP -> (<> aliceCS) )
		      && (bobFlagUP -> (<> bobCS)))) 
`;

const chars = new antlr4.InputStream(input);
const lexer = new gpslLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new gpslParser(tokens);
const tree = parser.block();

console.log(tree.toStringTree(parser.ruleNames));

const syntaxTreeMaker = new GPSLSyntaxBuilder();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(syntaxTreeMaker, tree);
let syntaxTree = syntaxTreeMaker.tree;
syntaxTree.accept(new GPSLSymbolResolver(), new Context());

const buchiAutomaton = await ltlToAutomaton(syntaxTree.declarations[2]);

console.log(buchiAutomaton);

