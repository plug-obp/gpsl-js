import { GPSLVisitor } from "./gpslSyntaxModel.js";

//This class evaluates boolean GPSL expressions relying on an atomEvaluator for the atoms.
export class GPSLEvaluator extends GPSLVisitor {
    atomEvaluator;
    constructor(atomEvaluator) {
        super();
        this.atomEvaluator = atomEvaluator;
    }
    visitAtom(element, input) {
        return this.atomEvaluator(element.value, input);
    }
    visitTrue(element, input) {
        return true;
    }
    visitFalse(element, input) {
        return false;
    }
    visitReference(element, input) {
        return element.expression.accept(this, input);
    }
    visitExpression(element, input) {
        throw new Error(`The GPSL evaluator does not support ${element.constructor.name} expressions.`);
    }
    visitNegation(element, input) {
        return !element.expression.accept(this, input);
    }
    visitConjunction(element, input) {
        return element.left.accept(this, input) && element.right.accept(this, input);
    }
    visitDisjunction(element, input) {
        return element.left.accept(this, input) || element.right.accept(this, input);
    }
    visitExclusiveDisjunction(element, input) {
        return element.left.accept(this, input) !== element.right.accept(this, input);
    }
    visitImplication(element, input) {
        return !element.left.accept(this, input) || element.right.accept(this, input);
    }
    visitEquivalence(element, input) {
        return element.left.accept(this, input) === element.right.accept(this, input);
    }
    visitLetExpression(element, input) {
        return element.expression.accept(this, input);
    }
    visitExpressionDeclaration(element, input) {
        return element.expression.accept(this, input);
    }
}