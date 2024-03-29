import { GPSLEvaluator } from "./gpslEvaluator.js";

export class GPSLAutomatonSemantics {
    automaton;
    guardEvaluator;
    constructor(automaton, inputEvaluator) {
        this.automaton = automaton;
        this.guardEvaluator = new GPSLEvaluator(inputEvaluator);
    }
    initial() {
        return this.automaton.initialStates;
    }
    async actions(input, configuration) {
        //keep only transitions that are in the source configuration
        const transitionsPresent = this.automaton.transitions.filter(t => t.source === configuration);
        //get the highest priority transition with a guard that accepts the input
        let enabledTransitions = []
        let currentPriority = Number.MIN_VALUE;
        let hasEnabledTransitionAtCurrentPriority = false;
        for (const transition of transitionsPresent) {
            if (!hasEnabledTransitionAtCurrentPriority) {
                currentPriority = transition.priority;
            }
            if (transition.priority === currentPriority) {
                if (await transition.guard.accept(this.guardEvaluator, input)) {
                    enabledTransitions.push(transition);
                    hasEnabledTransitionAtCurrentPriority = true;
                }
            }
            if (transition.priority < currentPriority) {
                throw new Error("The transitions should be sorted in increasing priority order in the automaton.");
            }
        }

        return enabledTransitions;
    }
    execute(action, input, configuration) {
        return [action.target];
    }
    //instead of exposing it here, we should expose it through the evaluate function.
    isAccepting(configuration) {
        return this.automaton.acceptStates.includes(configuration);
    }
}