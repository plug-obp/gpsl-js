// Generated from grammar/gpsl.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import gpslListener from './gpslListener.js';
const serializedATN = [4,1,38,158,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,3,1,38,8,1,1,2,1,2,
1,2,5,2,43,8,2,10,2,12,2,46,9,2,1,2,3,2,49,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,68,8,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,85,8,3,10,3,12,3,88,9,3,1,4,
1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,102,8,7,10,7,12,7,105,9,
7,1,8,1,8,1,8,1,8,5,8,111,8,8,10,8,12,8,114,9,8,1,9,1,9,1,9,1,9,5,9,120,
8,9,10,9,12,9,123,9,9,1,10,1,10,3,10,127,8,10,1,10,1,10,1,10,1,10,1,10,1,
11,3,11,135,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,146,8,
11,10,11,12,11,149,9,11,1,12,3,12,152,8,12,1,12,1,12,1,13,1,13,1,13,0,1,
6,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,8,1,0,30,31,2,0,6,6,8,8,1,0,
14,17,2,0,5,5,9,9,2,0,7,7,18,18,3,0,7,7,18,18,29,29,1,0,20,21,1,0,3,19,166,
0,29,1,0,0,0,2,33,1,0,0,0,4,39,1,0,0,0,6,67,1,0,0,0,8,89,1,0,0,0,10,91,1,
0,0,0,12,93,1,0,0,0,14,97,1,0,0,0,16,106,1,0,0,0,18,115,1,0,0,0,20,124,1,
0,0,0,22,134,1,0,0,0,24,151,1,0,0,0,26,155,1,0,0,0,28,30,3,2,1,0,29,28,1,
0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,28,
0,0,34,37,7,0,0,0,35,38,3,6,3,0,36,38,3,24,12,0,37,35,1,0,0,0,37,36,1,0,
0,0,38,3,1,0,0,0,39,44,3,2,1,0,40,41,5,32,0,0,41,43,3,2,1,0,42,40,1,0,0,
0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,
47,49,5,32,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,5,1,0,0,0,50,51,6,3,-1,0,51,
68,3,8,4,0,52,68,5,28,0,0,53,68,3,10,5,0,54,55,5,34,0,0,55,56,3,6,3,0,56,
57,5,35,0,0,57,68,1,0,0,0,58,59,5,12,0,0,59,68,3,6,3,9,60,61,5,13,0,0,61,
68,3,6,3,8,62,63,7,1,0,0,63,68,3,6,3,7,64,65,3,12,6,0,65,66,3,6,3,1,66,68,
1,0,0,0,67,50,1,0,0,0,67,52,1,0,0,0,67,53,1,0,0,0,67,54,1,0,0,0,67,58,1,
0,0,0,67,60,1,0,0,0,67,62,1,0,0,0,67,64,1,0,0,0,68,86,1,0,0,0,69,70,10,6,
0,0,70,71,7,2,0,0,71,85,3,6,3,6,72,73,10,5,0,0,73,74,5,3,0,0,74,85,3,6,3,
6,75,76,10,4,0,0,76,77,5,4,0,0,77,85,3,6,3,5,78,79,10,3,0,0,79,80,5,19,0,
0,80,85,3,6,3,4,81,82,10,2,0,0,82,83,7,3,0,0,83,85,3,6,3,2,84,69,1,0,0,0,
84,72,1,0,0,0,84,75,1,0,0,0,84,78,1,0,0,0,84,81,1,0,0,0,85,88,1,0,0,0,86,
84,1,0,0,0,86,87,1,0,0,0,87,7,1,0,0,0,88,86,1,0,0,0,89,90,7,4,0,0,90,9,1,
0,0,0,91,92,5,25,0,0,92,11,1,0,0,0,93,94,5,11,0,0,94,95,3,4,2,0,95,96,5,
10,0,0,96,13,1,0,0,0,97,98,5,22,0,0,98,103,5,28,0,0,99,100,5,32,0,0,100,
102,5,28,0,0,101,99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,
0,0,104,15,1,0,0,0,105,103,1,0,0,0,106,107,5,23,0,0,107,112,5,28,0,0,108,
109,5,32,0,0,109,111,5,28,0,0,110,108,1,0,0,0,111,114,1,0,0,0,112,110,1,
0,0,0,112,113,1,0,0,0,113,17,1,0,0,0,114,112,1,0,0,0,115,116,5,24,0,0,116,
121,5,28,0,0,117,118,5,32,0,0,118,120,5,28,0,0,119,117,1,0,0,0,120,123,1,
0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,19,1,0,0,0,123,121,1,0,0,0,124,
126,5,28,0,0,125,127,7,5,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,1,0,
0,0,128,129,5,1,0,0,129,130,3,6,3,0,130,131,5,2,0,0,131,132,5,28,0,0,132,
21,1,0,0,0,133,135,7,6,0,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,
0,136,137,3,14,7,0,137,138,5,33,0,0,138,139,3,16,8,0,139,140,5,33,0,0,140,
141,3,18,9,0,141,142,5,33,0,0,142,147,3,20,10,0,143,144,5,33,0,0,144,146,
3,20,10,0,145,143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,
0,148,23,1,0,0,0,149,147,1,0,0,0,150,152,3,12,6,0,151,150,1,0,0,0,151,152,
1,0,0,0,152,153,1,0,0,0,153,154,3,22,11,0,154,25,1,0,0,0,155,156,7,7,0,0,
156,27,1,0,0,0,14,31,37,44,48,67,84,86,103,112,121,126,134,147,151];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gpslParser extends antlr4.Parser {

    static grammarFileName = "gpsl.g4";
    static literalNames = [ null, "'['", "']'", null, null, null, null, 
                            null, null, null, "'in'", null, null, null, 
                            null, null, null, null, null, null, "'nfa'", 
                            "'buchi'", "'states'", "'initial'", "'accept'", 
                            null, null, null, null, null, "'='", "'*='", 
                            "','", "';'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, "CONJUNCTION", "DISJUNCTION", 
                             "EQUIVALENCE", "EVENTUALLY", "FALSE", "GLOBALLY", 
                             "IMPLICATION", "IN", "LET", "NEGATION", "NEXT", 
                             "SUNTIL", "WUNTIL", "SRELEASE", "WRELEASE", 
                             "TRUE", "XOR", "NFA", "BUCHI", "STATES", "INITIAL", 
                             "ACCEPT", "ATOMINLINE", "PIPEATOM", "QUOTEATOM", 
                             "IDENTIFIER", "NATURAL", "EQ", "SEQ", "COMMA", 
                             "SEMICOLON", "LPAREN", "RPAREN", "LINE_COMMENT", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "block", "formulaDeclaration", "formulaDeclarationList", 
                         "formula", "literal", "atom", "letDecl", "stateDecl", 
                         "initialDecl", "acceptDecl", "transitionDecl", 
                         "automatonDecl", "automaton", "reserved" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gpslParser.ruleNames;
        this.literalNames = gpslParser.literalNames;
        this.symbolicNames = gpslParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gpslParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.formulaDeclaration();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===28);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaDeclaration() {
	    let localctx = new FormulaDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gpslParser.RULE_formulaDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(gpslParser.IDENTIFIER);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 37;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 35;
	            this.formula(0);
	            break;

	        case 2:
	            this.state = 36;
	            this.automaton();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaDeclarationList() {
	    let localctx = new FormulaDeclarationListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gpslParser.RULE_formulaDeclarationList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.formulaDeclaration();
	        this.state = 44;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 40;
	                this.match(gpslParser.COMMA);
	                this.state = 41;
	                this.formulaDeclaration(); 
	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 47;
	            this.match(gpslParser.COMMA);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, gpslParser.RULE_formula, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 18:
	            localctx = new LiteralExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 51;
	            this.literal();
	            break;
	        case 28:
	            localctx = new ReferenceExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(gpslParser.IDENTIFIER);
	            break;
	        case 25:
	            localctx = new AtomExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.atom();
	            break;
	        case 34:
	            localctx = new ParenExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(gpslParser.LPAREN);
	            this.state = 55;
	            this.formula(0);
	            this.state = 56;
	            this.match(gpslParser.RPAREN);
	            break;
	        case 12:
	            localctx = new UnaryExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 58;
	            localctx.operator = this.match(gpslParser.NEGATION);
	            this.state = 59;
	            this.formula(9);
	            break;
	        case 13:
	            localctx = new UnaryExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 60;
	            localctx.operator = this.match(gpslParser.NEXT);
	            this.state = 61;
	            this.formula(8);
	            break;
	        case 6:
	        case 8:
	            localctx = new UnaryExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===8)) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 63;
	            this.formula(7);
	            break;
	        case 11:
	            localctx = new LetExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.letDecl();
	            this.state = 65;
	            this.formula(1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 84;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gpslParser.RULE_formula);
	                    this.state = 69;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 70;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 245760) !== 0))) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 71;
	                    this.formula(6);
	                    break;

	                case 2:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gpslParser.RULE_formula);
	                    this.state = 72;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 73;
	                    localctx.operator = this.match(gpslParser.CONJUNCTION);
	                    this.state = 74;
	                    this.formula(6);
	                    break;

	                case 3:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gpslParser.RULE_formula);
	                    this.state = 75;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 76;
	                    localctx.operator = this.match(gpslParser.DISJUNCTION);
	                    this.state = 77;
	                    this.formula(5);
	                    break;

	                case 4:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gpslParser.RULE_formula);
	                    this.state = 78;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 79;
	                    localctx.operator = this.match(gpslParser.XOR);
	                    this.state = 80;
	                    this.formula(4);
	                    break;

	                case 5:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gpslParser.RULE_formula);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 82;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===9)) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 83;
	                    this.formula(2);
	                    break;

	                } 
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gpslParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===18)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gpslParser.RULE_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(gpslParser.ATOMINLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letDecl() {
	    let localctx = new LetDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gpslParser.RULE_letDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(gpslParser.LET);
	        this.state = 94;
	        this.formulaDeclarationList();
	        this.state = 95;
	        this.match(gpslParser.IN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stateDecl() {
	    let localctx = new StateDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gpslParser.RULE_stateDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(gpslParser.STATES);
	        this.state = 98;
	        this.match(gpslParser.IDENTIFIER);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 99;
	            this.match(gpslParser.COMMA);
	            this.state = 100;
	            this.match(gpslParser.IDENTIFIER);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	initialDecl() {
	    let localctx = new InitialDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gpslParser.RULE_initialDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(gpslParser.INITIAL);
	        this.state = 107;
	        this.match(gpslParser.IDENTIFIER);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 108;
	            this.match(gpslParser.COMMA);
	            this.state = 109;
	            this.match(gpslParser.IDENTIFIER);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acceptDecl() {
	    let localctx = new AcceptDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gpslParser.RULE_acceptDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(gpslParser.ACCEPT);
	        this.state = 116;
	        this.match(gpslParser.IDENTIFIER);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 117;
	            this.match(gpslParser.COMMA);
	            this.state = 118;
	            this.match(gpslParser.IDENTIFIER);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transitionDecl() {
	    let localctx = new TransitionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gpslParser.RULE_transitionDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(gpslParser.IDENTIFIER);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 537133184) !== 0)) {
	            this.state = 125;
	            localctx.priority = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 537133184) !== 0))) {
	                localctx.priority = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 128;
	        this.match(gpslParser.T__0);
	        this.state = 129;
	        this.formula(0);
	        this.state = 130;
	        this.match(gpslParser.T__1);
	        this.state = 131;
	        this.match(gpslParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	automatonDecl() {
	    let localctx = new AutomatonDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gpslParser.RULE_automatonDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20 || _la===21) {
	            this.state = 133;
	            _la = this._input.LA(1);
	            if(!(_la===20 || _la===21)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 136;
	        this.stateDecl();
	        this.state = 137;
	        this.match(gpslParser.SEMICOLON);
	        this.state = 138;
	        this.initialDecl();
	        this.state = 139;
	        this.match(gpslParser.SEMICOLON);
	        this.state = 140;
	        this.acceptDecl();
	        this.state = 141;
	        this.match(gpslParser.SEMICOLON);
	        this.state = 142;
	        this.transitionDecl();
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33) {
	            this.state = 143;
	            this.match(gpslParser.SEMICOLON);
	            this.state = 144;
	            this.transitionDecl();
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	automaton() {
	    let localctx = new AutomatonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gpslParser.RULE_automaton);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 150;
	            this.letDecl();
	        }

	        this.state = 153;
	        this.automatonDecl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reserved() {
	    let localctx = new ReservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gpslParser.RULE_reserved);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1048568) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gpslParser.EOF = antlr4.Token.EOF;
gpslParser.T__0 = 1;
gpslParser.T__1 = 2;
gpslParser.CONJUNCTION = 3;
gpslParser.DISJUNCTION = 4;
gpslParser.EQUIVALENCE = 5;
gpslParser.EVENTUALLY = 6;
gpslParser.FALSE = 7;
gpslParser.GLOBALLY = 8;
gpslParser.IMPLICATION = 9;
gpslParser.IN = 10;
gpslParser.LET = 11;
gpslParser.NEGATION = 12;
gpslParser.NEXT = 13;
gpslParser.SUNTIL = 14;
gpslParser.WUNTIL = 15;
gpslParser.SRELEASE = 16;
gpslParser.WRELEASE = 17;
gpslParser.TRUE = 18;
gpslParser.XOR = 19;
gpslParser.NFA = 20;
gpslParser.BUCHI = 21;
gpslParser.STATES = 22;
gpslParser.INITIAL = 23;
gpslParser.ACCEPT = 24;
gpslParser.ATOMINLINE = 25;
gpslParser.PIPEATOM = 26;
gpslParser.QUOTEATOM = 27;
gpslParser.IDENTIFIER = 28;
gpslParser.NATURAL = 29;
gpslParser.EQ = 30;
gpslParser.SEQ = 31;
gpslParser.COMMA = 32;
gpslParser.SEMICOLON = 33;
gpslParser.LPAREN = 34;
gpslParser.RPAREN = 35;
gpslParser.LINE_COMMENT = 36;
gpslParser.COMMENT = 37;
gpslParser.WS = 38;

gpslParser.RULE_block = 0;
gpslParser.RULE_formulaDeclaration = 1;
gpslParser.RULE_formulaDeclarationList = 2;
gpslParser.RULE_formula = 3;
gpslParser.RULE_literal = 4;
gpslParser.RULE_atom = 5;
gpslParser.RULE_letDecl = 6;
gpslParser.RULE_stateDecl = 7;
gpslParser.RULE_initialDecl = 8;
gpslParser.RULE_acceptDecl = 9;
gpslParser.RULE_transitionDecl = 10;
gpslParser.RULE_automatonDecl = 11;
gpslParser.RULE_automaton = 12;
gpslParser.RULE_reserved = 13;

class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_block;
    }

	formulaDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FormulaDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitBlock(this);
		}
	}


}



class FormulaDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_formulaDeclaration;
    }

	IDENTIFIER() {
	    return this.getToken(gpslParser.IDENTIFIER, 0);
	};

	SEQ() {
	    return this.getToken(gpslParser.SEQ, 0);
	};

	EQ() {
	    return this.getToken(gpslParser.EQ, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	automaton() {
	    return this.getTypedRuleContext(AutomatonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterFormulaDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitFormulaDeclaration(this);
		}
	}


}



class FormulaDeclarationListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_formulaDeclarationList;
    }

	formulaDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FormulaDeclarationContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.COMMA);
	    } else {
	        return this.getToken(gpslParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterFormulaDeclarationList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitFormulaDeclarationList(this);
		}
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_formula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LiteralExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterLiteralExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitLiteralExp(this);
		}
	}


}

gpslParser.LiteralExpContext = LiteralExpContext;

class ReferenceExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(gpslParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterReferenceExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitReferenceExp(this);
		}
	}


}

gpslParser.ReferenceExpContext = ReferenceExpContext;

class ParenExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(gpslParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(gpslParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterParenExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitParenExp(this);
		}
	}


}

gpslParser.ParenExpContext = ParenExpContext;

class LetExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	letDecl() {
	    return this.getTypedRuleContext(LetDeclContext,0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterLetExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitLetExp(this);
		}
	}


}

gpslParser.LetExpContext = LetExpContext;

class AtomExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterAtomExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitAtomExp(this);
		}
	}


}

gpslParser.AtomExpContext = AtomExpContext;

class UnaryExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        super.copyFrom(ctx);
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	NEGATION() {
	    return this.getToken(gpslParser.NEGATION, 0);
	};

	NEXT() {
	    return this.getToken(gpslParser.NEXT, 0);
	};

	EVENTUALLY() {
	    return this.getToken(gpslParser.EVENTUALLY, 0);
	};

	GLOBALLY() {
	    return this.getToken(gpslParser.GLOBALLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterUnaryExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitUnaryExp(this);
		}
	}


}

gpslParser.UnaryExpContext = UnaryExpContext;

class BinaryExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        super.copyFrom(ctx);
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	SUNTIL() {
	    return this.getToken(gpslParser.SUNTIL, 0);
	};

	WUNTIL() {
	    return this.getToken(gpslParser.WUNTIL, 0);
	};

	SRELEASE() {
	    return this.getToken(gpslParser.SRELEASE, 0);
	};

	WRELEASE() {
	    return this.getToken(gpslParser.WRELEASE, 0);
	};

	CONJUNCTION() {
	    return this.getToken(gpslParser.CONJUNCTION, 0);
	};

	DISJUNCTION() {
	    return this.getToken(gpslParser.DISJUNCTION, 0);
	};

	XOR() {
	    return this.getToken(gpslParser.XOR, 0);
	};

	IMPLICATION() {
	    return this.getToken(gpslParser.IMPLICATION, 0);
	};

	EQUIVALENCE() {
	    return this.getToken(gpslParser.EQUIVALENCE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterBinaryExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitBinaryExp(this);
		}
	}


}

gpslParser.BinaryExpContext = BinaryExpContext;

class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_literal;
    }

	TRUE() {
	    return this.getToken(gpslParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(gpslParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_atom;
    }

	ATOMINLINE() {
	    return this.getToken(gpslParser.ATOMINLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitAtom(this);
		}
	}


}



class LetDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_letDecl;
    }

	LET() {
	    return this.getToken(gpslParser.LET, 0);
	};

	formulaDeclarationList() {
	    return this.getTypedRuleContext(FormulaDeclarationListContext,0);
	};

	IN() {
	    return this.getToken(gpslParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterLetDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitLetDecl(this);
		}
	}


}



class StateDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_stateDecl;
    }

	STATES() {
	    return this.getToken(gpslParser.STATES, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.IDENTIFIER);
	    } else {
	        return this.getToken(gpslParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.COMMA);
	    } else {
	        return this.getToken(gpslParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterStateDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitStateDecl(this);
		}
	}


}



class InitialDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_initialDecl;
    }

	INITIAL() {
	    return this.getToken(gpslParser.INITIAL, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.IDENTIFIER);
	    } else {
	        return this.getToken(gpslParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.COMMA);
	    } else {
	        return this.getToken(gpslParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterInitialDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitInitialDecl(this);
		}
	}


}



class AcceptDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_acceptDecl;
    }

	ACCEPT() {
	    return this.getToken(gpslParser.ACCEPT, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.IDENTIFIER);
	    } else {
	        return this.getToken(gpslParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.COMMA);
	    } else {
	        return this.getToken(gpslParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterAcceptDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitAcceptDecl(this);
		}
	}


}



class TransitionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_transitionDecl;
        this.priority = null;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.IDENTIFIER);
	    } else {
	        return this.getToken(gpslParser.IDENTIFIER, i);
	    }
	};


	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	FALSE() {
	    return this.getToken(gpslParser.FALSE, 0);
	};

	TRUE() {
	    return this.getToken(gpslParser.TRUE, 0);
	};

	NATURAL() {
	    return this.getToken(gpslParser.NATURAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterTransitionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitTransitionDecl(this);
		}
	}


}



class AutomatonDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_automatonDecl;
    }

	stateDecl() {
	    return this.getTypedRuleContext(StateDeclContext,0);
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gpslParser.SEMICOLON);
	    } else {
	        return this.getToken(gpslParser.SEMICOLON, i);
	    }
	};


	initialDecl() {
	    return this.getTypedRuleContext(InitialDeclContext,0);
	};

	acceptDecl() {
	    return this.getTypedRuleContext(AcceptDeclContext,0);
	};

	transitionDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TransitionDeclContext);
	    } else {
	        return this.getTypedRuleContext(TransitionDeclContext,i);
	    }
	};

	NFA() {
	    return this.getToken(gpslParser.NFA, 0);
	};

	BUCHI() {
	    return this.getToken(gpslParser.BUCHI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterAutomatonDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitAutomatonDecl(this);
		}
	}


}



class AutomatonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_automaton;
    }

	automatonDecl() {
	    return this.getTypedRuleContext(AutomatonDeclContext,0);
	};

	letDecl() {
	    return this.getTypedRuleContext(LetDeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterAutomaton(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitAutomaton(this);
		}
	}


}



class ReservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gpslParser.RULE_reserved;
    }

	CONJUNCTION() {
	    return this.getToken(gpslParser.CONJUNCTION, 0);
	};

	DISJUNCTION() {
	    return this.getToken(gpslParser.DISJUNCTION, 0);
	};

	EQUIVALENCE() {
	    return this.getToken(gpslParser.EQUIVALENCE, 0);
	};

	EVENTUALLY() {
	    return this.getToken(gpslParser.EVENTUALLY, 0);
	};

	FALSE() {
	    return this.getToken(gpslParser.FALSE, 0);
	};

	GLOBALLY() {
	    return this.getToken(gpslParser.GLOBALLY, 0);
	};

	IMPLICATION() {
	    return this.getToken(gpslParser.IMPLICATION, 0);
	};

	IN() {
	    return this.getToken(gpslParser.IN, 0);
	};

	LET() {
	    return this.getToken(gpslParser.LET, 0);
	};

	NEGATION() {
	    return this.getToken(gpslParser.NEGATION, 0);
	};

	NEXT() {
	    return this.getToken(gpslParser.NEXT, 0);
	};

	SUNTIL() {
	    return this.getToken(gpslParser.SUNTIL, 0);
	};

	WUNTIL() {
	    return this.getToken(gpslParser.WUNTIL, 0);
	};

	SRELEASE() {
	    return this.getToken(gpslParser.SRELEASE, 0);
	};

	WRELEASE() {
	    return this.getToken(gpslParser.WRELEASE, 0);
	};

	TRUE() {
	    return this.getToken(gpslParser.TRUE, 0);
	};

	XOR() {
	    return this.getToken(gpslParser.XOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.enterReserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gpslListener ) {
	        listener.exitReserved(this);
		}
	}


}




gpslParser.BlockContext = BlockContext; 
gpslParser.FormulaDeclarationContext = FormulaDeclarationContext; 
gpslParser.FormulaDeclarationListContext = FormulaDeclarationListContext; 
gpslParser.FormulaContext = FormulaContext; 
gpslParser.LiteralContext = LiteralContext; 
gpslParser.AtomContext = AtomContext; 
gpslParser.LetDeclContext = LetDeclContext; 
gpslParser.StateDeclContext = StateDeclContext; 
gpslParser.InitialDeclContext = InitialDeclContext; 
gpslParser.AcceptDeclContext = AcceptDeclContext; 
gpslParser.TransitionDeclContext = TransitionDeclContext; 
gpslParser.AutomatonDeclContext = AutomatonDeclContext; 
gpslParser.AutomatonContext = AutomatonContext; 
gpslParser.ReservedContext = ReservedContext; 
