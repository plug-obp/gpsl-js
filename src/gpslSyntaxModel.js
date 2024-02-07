
class GPSLSyntaxTreeElement {
    accept(visitor, input) {
        return visitor.visitSyntaxTreeElement(this, input);
    }
}
export class GPSLDeclarations extends GPSLSyntaxTreeElement {
    declarations;
    constructor(declarations) {
        super();
        this.declarations = declarations;
    }
    accept(visitor, input) {
        return visitor.visitDeclarations(this, input);
    }
}

class GPSLExpression extends GPSLSyntaxTreeElement {
    accept(visitor, input) {
        return visitor.visitExpression(this, input);
    }
}

export class GPSLTrue extends GPSLExpression {
    accept(visitor, input) {
        return visitor.visitTrue(this, input);
    }
}
export class GPSLFalse extends GPSLExpression {
    accept(visitor, input) {
        return visitor.visitFalse(this, input);
    }
}

export class GPSLAtom extends GPSLExpression {
    value;
    delimiter;
    constructor(value, delimiter) {
        super();
        this.value = value;
        this.delimiter = delimiter;
    }
    accept(visitor, input) {
        return visitor.visitAtom(this, input);
    }
}
export class GPSLReference extends GPSLExpression {
    name;
    expression = null;
    constructor(name) {
        super();
        this.name = name;
    }
    setExpression(expression) {
        this.expression = expression;
    }
    accept(visitor, input) {
        return visitor.visitReference(this, input);
    }
}
class GPSLUnaryExpression extends GPSLExpression {
    operator;
    expression;
    constructor(operator, expression) {
        super();
        this.operator = operator;
        this.expression = expression;
    }
    accept(visitor, input) {
        return visitor.visitUnaryExpression(this, input);
    }
}
export class GPSLNegation extends GPSLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitNegation(this, input);
    }
}
export class GPSLNext extends GPSLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitNext(this, input);
    }
}
export class GPSLEventually extends GPSLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitEventually(this, input);
    }
}
export class GPSLGlobally extends GPSLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitGlobally(this, input);
    }
}

class GPSLBinaryExpression extends GPSLExpression {
    operator;
    left; 
    right;
    constructor(operator, left, right) {
        super();
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
    accept(visitor, input) {
        return visitor.visitBinaryExpression(this, input);
    }
}
export class GPSLConjunction extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitConjunction(this, input);
    }
}
export class GPSLDisjunction extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitDisjunction(this, input);
    }
}
export class GPSLExclusiveDisjunction extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitExclusiveDisjunction(this, input);
    }
}
export class GPSLImplication extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitImplication(this, input);
    }
}
export class GPSLEquivalence extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitEquivalence(this, input);
    }
}
export class GPSLStrongUntil extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitStrongUntil(this, input);
    }
}
export class GPSLWeakUntil extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitWeakUntil(this, input);
    }
}
export class GPSLStrongRelease extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitStrongRelease(this, input);
    }
}
export class GPSLWeakRelease extends GPSLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitWeakRelease(this, input);
    }
}

export class GPSLExpressionDeclaration extends GPSLSyntaxTreeElement {
    name;
    expression;
    isInternal;
    constructor(name, expression, isInternal = true) {
        super();
        this.name = name;
        this.expression = expression;
        this.isInternal = isInternal;
    }
    accept(visitor, input) {
        return visitor.visitExpressionDeclaration(this, input);
    }
}

export class GPSLLetExpression extends GPSLExpression {
    declarations;
    expression;
    constructor(declarations, expression) {
        super();
        this.declarations = declarations == null ? new GPSLDeclarations([]) : declarations;
        this.expression = expression;
    }
    accept(visitor, input) {
        return visitor.visitLetExpression(this, input);
    }
}

export class GPSLState extends GPSLSyntaxTreeElement {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
    accept(visitor, input) {
        return visitor.visitState(this, input);
    }
    hashCode() {
        let hash = 0;
        for (let i = 0; i < this.name.length; i++) {
            const char = this.name.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
    equals(other) {
        return this.name === other.name;
    }
}

export class GPSLTransition extends GPSLSyntaxTreeElement {
    source;
    priority;
    guard;
    target;
    constructor(source, priority, guard, target) {
        super();
        this.source = source;
        this.priority = priority;
        this.guard = guard;
        this.target = target;
    }
    accept(visitor, input) {
        return visitor.visitTransition(this, input);
    }
}

export const GPSLAutomatonSemanticsKind = Object.freeze({
    NFA: Symbol("NFA"),
    BUCHI: Symbol("BUCHI"),
})

export class GPSLAutomaton extends GPSLSyntaxTreeElement {
    semanticsKind;
    states;
    initialStates;
    acceptStates;
    transitions;
    constructor(semanticsKind, states, initial, accept, transitions) {
        super();
        this.semanticsKind = semanticsKind;
        this.states = states;
        this.initialStates = initial;
        this.acceptStates = accept;
        this.transitions = transitions;
    }
    accept(visitor, input) {
        return visitor.visitAutomaton(this, input);
    }
}

export class GPSLVisitor {
    //add methods for each class in the syntax tree
    visitSyntaxTreeElement(element, input) {}
    visitDeclarations(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitExpression(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitTrue(element, input) {
        this.visitExpression(element, input);
    }
    visitFalse(element, input) {
        this.visitExpression(element, input);
    }
    visitAtom(element, input) {
        this.visitExpression(element, input);
    }
    visitReference(element, input) {
        this.visitExpression(element, input);
    }
    visitUnaryExpression(element, input) {
        this.visitExpression(element, input);
    }
    visitNegation(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitNext(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitEventually(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitGlobally(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitBinaryExpression(element, input) {
        this.visitExpression(element, input);
    }
    visitConjunction(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitDisjunction(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitExclusiveDisjunction(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitImplication(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitEquivalence(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitStrongUntil(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitWeakUntil(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitStrongRelease(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitWeakRelease(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitExpressionDeclaration(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitLetExpression(element, input) {
        this.visitExpression(element, input);
    }
    visitState(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitTransition(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitAutomaton(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
}
