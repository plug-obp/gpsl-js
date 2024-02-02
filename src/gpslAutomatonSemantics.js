export class GPSLAutomatonSemantics {
    automaton;
    inputEvaluator;
    constructor(automaton, evaluator) {
        this.automaton = automaton;
        this.inputEvaluator = evaluator;
    }
    initial() {
        return this.automaton.initialStates;
    }
    actions(input, configuration) {
        //keep only transitions that are in the source configuration
        const transitionsPresent = this.automaton.transitions.filter(t => t.source === configuration);
        //get the highest priority transition with a guard that accepts the input
        let enabledTransitions = []
        let currentPriority = Number.MIN_VALUE;
        let hasEnabledTransitionAtCurrentPriority = false;
        transitionsPresent.forEach(transition => {
            if (!hasEnabledTransitionAtCurrentPriority) {
                currentPriority = transition.priority;
            }
            if (transition.priority === currentPriority) {
                if (transition.guard.accept(this.inputEvaluator, input)) {
                    enabledTransitions.push(transition);
                    hasEnabledTransitionAtCurrentPriority = true;
                }
            }
            if (transition.priority < currentPriority) {
                throw new Error("The transitions should be sorted in increasing priority order in the automaton.");
            }
        })

        return enabledTransitions;
    }
    execute(action, input, configuration) {
        return [action.target];
    }
}