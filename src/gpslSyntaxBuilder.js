import gpslParser from '../generated/grammar/gpslParser.js';
import gpslListener from '../generated/grammar/gpslListener.js';
import * as stx from './gpslSyntaxModel.js';

export class GPSLSyntaxBuilder extends gpslListener {
    constructor() {
        super();
        this.map = new Map();
        this.tree = null;
    }

    setValue(key, value) {
        this.map.set(key, value);
    }

    getValue(key) {
        return this.map.get(key);
    }

    exitLiteral(ctx) {
        this.setValue(ctx, ctx.TRUE() == null ? new stx.GPSLFalse() : new stx.GPSLTrue());
    }

    exitAtom(ctx) {
        const value = ctx.ATOMINLINE().getText();
        const delimiter = value.substring(0, 1);
        this.setValue(ctx, new stx.GPSLAtom(value.substring(1, value.length - 1), delimiter));
    }

    exitLiteralExp(ctx) {
        this.setValue(ctx, this.getValue(ctx.literal()));
    }

    exitUnaryExp(ctx) {
        const operator = ctx.operator.text;
        const expression = this.getValue(ctx.formula());
        let unaryExpression = null;
        switch (ctx.operator.type) {
            case gpslParser.NEGATION:
                unaryExpression = new stx.GPSLNegation(operator, expression);
                break;
            case gpslParser.NEXT:
                unaryExpression = new stx.GPSLNext(operator, expression);
                break;
            case gpslParser.EVENTUALLY:
                unaryExpression = new stx.GPSLEventually(operator, expression);
                break;
            case gpslParser.GLOBALLY:
                unaryExpression = new stx.GPSLGlobally(operator, expression);
                break;
        }
        this.setValue(ctx, unaryExpression);
    }

    exitBinaryExp(ctx) {
        const operator = ctx.operator.text;
        const left = this.getValue(ctx.formula(0));
        const right = this.getValue(ctx.formula(1));
        let binaryExpression = null;
        switch (ctx.operator.type) {
            case gpslParser.CONJUNCTION:
                binaryExpression = new stx.GPSLConjunction(operator, left, right);
                break;
            case gpslParser.DISJUNCTION:
                binaryExpression = new stx.GPSLDisjunction(operator, left, right);
                break;
            case gpslParser.XOR:
                binaryExpression = new stx.GPSLExclusiveDisjunction(operator, left, right);
                break;
            case gpslParser.IMPLICATION:
                binaryExpression = new stx.GPSLImplication(operator, left, right);
                break;
            case gpslParser.EQUIVALENCE:
                binaryExpression = new stx.GPSLEquivalence(operator, left, right);
                break;
            case gpslParser.SUNTIL:
                binaryExpression = new stx.GPSLStrongUntil(operator, left, right);
                break;
            case gpslParser.WUNTIL:
                binaryExpression = new stx.GPSLWeakUntil(operator, left, right);
                break;
            case gpslParser.SRELEASE:
                binaryExpression = new stx.GPSLStrongRelease(operator, left, right);
                break;
            case gpslParser.WRELEASE:
                binaryExpression = new stx.GPSLWeakRelease(operator, left, right);
                break;
        }
        this.setValue(ctx, binaryExpression);
    }

    exitAtomExp(ctx) {
        this.setValue(ctx, this.getValue(ctx.atom()));
    }

    exitParenExp(ctx) {
        this.setValue(ctx, this.getValue(ctx.formula()));
    }

    exitReferenceExp(ctx) {
        const reference = new stx.GPSLReference(ctx.IDENTIFIER().getText());
        this.setValue(ctx, reference);
    }

    exitFormulaDeclaration(ctx) {
        const name = ctx.IDENTIFIER().getText();
        let expression = null;

        if (ctx.formula() != null) {
            expression = this.getValue(ctx.formula());
        }
        if (ctx.automaton() != null) {
            expression = this.getValue(ctx.automaton());
        }
        const formula = new stx.GPSLExpressionDeclaration(name, expression, ctx.SEQ() != null ? false : true);
        this.setValue(ctx, formula);
    }

    exitFormulaDeclarationList(ctx) {
        const declarations = [];
        for (let i = 0; i < ctx.formulaDeclaration().length; i++) {
            declarations.push(this.getValue(ctx.formulaDeclaration(i)));
        }
        const declarationNode = new stx.GPSLDeclarations(declarations);
        this.setValue(ctx, declarationNode);
    }

    exitLetDecl(ctx) {
        const declarations = this.getValue(ctx.formulaDeclarationList());
        this.setValue(ctx, declarations);
    }

    exitLetExp(ctx) {
        const declarations = this.getValue(ctx.letDecl());
        const expression = this.getValue(ctx.formula());
        const letExpression = new stx.GPSLLetExpression(declarations, expression);
        this.setValue(ctx, letExpression);
    }

    exitBlock(ctx) {
        const declarations = [];
        for (let i = 0; i < ctx.formulaDeclaration().length; i++) {
            const formulaDeclaration = ctx.formulaDeclaration(i);
            const formula = this.getValue(formulaDeclaration);
            declarations.push(formula);
        }
        this.tree = new stx.GPSLDeclarations(declarations);
        this.setValue(ctx, this.tree);
    }

    exitStateDecl(ctx) {
        const states = [];
        for (let i = 0; i < ctx.IDENTIFIER().length; i++) {
            states.push(ctx.IDENTIFIER(i).getText());
        }
        this.setValue(ctx, states);
    }

    exitInitialDecl(ctx) {
        const initial = [];
        for (let i = 0; i < ctx.IDENTIFIER().length; i++) {
            initial.push(ctx.IDENTIFIER(i).getText());
        }
        this.setValue(ctx, initial);
    }

    exitAcceptDecl(ctx) {
        const accept = [];
        for (let i = 0; i < ctx.IDENTIFIER().length; i++) {
            accept.push(ctx.IDENTIFIER(i).getText());
        }
        this.setValue(ctx, accept);
    }

    exitTransitionDecl(ctx) {
        //The source of the transition
        const source = ctx.IDENTIFIER(0).getText();
        
        //The priority of the transition
        let priority = Number.MIN_VALUE;
        if (ctx.priority != null) {
            priority = Number(ctx.priority.text);
        }
        priority = priority || Number.MIN_VALUE;

        //The target of the transition
        const target = ctx.IDENTIFIER(1).getText();

        //The guard of the transition
        const guard = this.getValue(ctx.formula());

        const transition = new stx.GPSLTransition(source, priority, guard, target);
        this.setValue(ctx, transition);
    }

    // Automaton
    exitAutomatonDecl(ctx) {
        let semantics = ctx.NFA() != null ? stx.GPSLAutomatonSemanticsKind.NFA : stx.GPSLAutomatonSemanticsKind.BUCHI;
        
        const states = this.getValue(ctx.stateDecl());
        const initial = this.getValue(ctx.initialDecl());
        const accept = this.getValue(ctx.acceptDecl());
        
        let transitions = [];
        for (let i = 0; i < ctx.transitionDecl().length; i++) {
            const transition = this.getValue(ctx.transitionDecl(i));
            transitions.push(transition);
        }
        transitions.sort((a, b) => {
            if (a.priority > b.priority) {
                return -1;
            }
            if (a.priority < b.priority) {
                return 1;
            }
            return 0;
        });
        const automaton = new stx.GPSLAutomaton(semantics, states, initial, accept, transitions);
        this.setValue(ctx, automaton);
    }

    exitAutomaton(ctx) {
        const declarations = this.getValue(ctx.letDecl());
        const automaton = this.getValue(ctx.automatonDecl());
        const letExpression = new stx.GPSLLetExpression(declarations, automaton);
        this.setValue(ctx, letExpression);
    }
}

export class Context {
    constructor(scope = new Map()) {
        this.context = new Array();
        //The first context is the global context
        this.context.push(scope);
    }
    currentContext() {
        return this.context[this.context.length - 1];
    }

    pushContext(context) { 
        if (context == null) {
            context = new Map();
        }
        this.context.push(context); 
    }
    popContext() { this.context.pop(); }

    symbolMissingError(symbol) {
        return new Error(`Symbol ${symbol} is not defined in the current scope`);
    }

    symbolAlreadyDefinedError(symbol) {
        return new Error(`Symbol ${symbol} is already defined in the current scope`);
    }

    lookup(symbol) {
        for (let i = this.context.length - 1; i >= 0; i--) {
            if (this.context[i].has(symbol)) {
                return this.context[i].get(symbol);
            }
        }
        throw new this.symbolMissingError(symbol);
    }

    define(symbol, value) {
        if (this.currentContext().has(symbol)) {
            throw this.symbolAlreadyDefinedError(symbol);
        }
        this.currentContext().set(symbol, value);
    }
}

export class GPSLSymbolResolver extends stx.GPSLVisitor {
    visitLetExpression(letExpression, environment) {
        environment.pushContext();
        letExpression.declarations.accept(this, environment);
        letExpression.expression.accept(this, environment);
        environment.popContext();
    }

    visitDeclarations(declarations, environment) {
        for (let i = 0; i < declarations.declarations.length; i++) {
            declarations.declarations[i].accept(this, environment);
        }
    }

    visitExpressionDeclaration(expressionDeclaration, environment) {
        expressionDeclaration.expression.accept(this, environment);
        environment.define(expressionDeclaration.name, expressionDeclaration.expression);
    }

    visitReference(reference, environment) {
        if (reference.expression == null)
            try {
                reference.setExpression(environment.lookup(reference.name));
            } catch (error) {
                throw environment.symbolMissingError(reference.name);
            }
    }

    visitTransition(transition, environment) {
        if (typeof transition.source === 'string') {
            transition.source = environment.lookup(transition.source);
        }
        if (typeof transition.target === 'string') {
            transition.target = environment.lookup(transition.target);
        }
        transition.guard.accept(this, environment);
    }

    visitAutomaton(automaton, environment) {
        if (automaton.states instanceof Map) {
            environment.pushContext(automaton.states);
        } else {
            environment.pushContext();
            automaton.states.forEach(state => {
                environment.define(state, new stx.GPSLState(state));
            });
            automaton.states = environment.currentContext();
        }

        for (let i = 0; i < automaton.initialStates.length; i++) {
            automaton.initialStates[i] = environment.lookup(automaton.initialStates[i]);
        }

        for (let i = 0; i < automaton.acceptStates.length; i++) {
            automaton.acceptStates[i] = environment.lookup(automaton.acceptStates[i]);
        }

        automaton.transitions.forEach(transition => {
            transition.accept(this, environment);
        });
        environment.popContext();
    }

    visitUnaryExpression(unaryExpression, environment) {
        unaryExpression.expression.accept(this, environment);
    }

    visitBinaryExpression(binaryExpression, environment) {
        binaryExpression.left.accept(this, environment);
        binaryExpression.right.accept(this, environment);
    }
}