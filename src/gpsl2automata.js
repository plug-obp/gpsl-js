import fetch from 'node-fetch';
import { GPSLToAbstractText } from './gpsl2AbstractText.js';
import { GPSLAutomaton, GPSLAutomatonSemanticsKind, GPSLTransition } from './gpslSyntaxModel.js';
import { readExpression, link } from './gpslReader.js';

async function fetchAutomaton(formula) {
    const encFormula = encodeURIComponent(`!${formula}`);
    const url = `http://localhost:3000/ltl3ba/${encFormula}`;
    console.log(`Fetching automaton for [LTL| ${formula}] from ${url}`);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.automata;
    } catch (error) {
        console.error(`problem with request: ${error.message}`);
    }
}

function ltl3baToGPSLAutomaton(automatonText) {
    let lines = automatonText.split('\n');
    lines = lines.slice(1, lines.length - 1);
    const states = new Set();
    const initialStates = new Set();
    const acceptStates = new Set();
    const transitions = lines.map(line => {
        let parts = line.split(',').map(part => part.replace(/"/g, '').trim());
        parts.splice(3);
        const source = parts[0];
        const target = parts[1];
        states.add(source);
        states.add(target);

        if (source.includes('init')) {
            initialStates.add(source);
        }
        if (target.includes('init')) {
            initialStates.add(target);
        }
        if (source.includes('accept')) {
            acceptStates.add(source);
        }
        if (target.includes('accept')) {
            acceptStates.add(target);
        }
        const guard = readExpression(parts[2]);
        const transition = new GPSLTransition(source, 0, guard, target);
        return transition;
    });
    const automaton = new GPSLAutomaton(
          GPSLAutomatonSemanticsKind.BUCHI
        , Array.from(states)
        , Array.from(initialStates)
        , Array.from(acceptStates)
        , transitions
    );
    return automaton;
}
async function ltlToAutomaton(gpslExpression) {
    //convert GPSL to AbstractText
    const gpslToAbstracTextConverter = new GPSLToAbstractText();
    const text = gpslExpression.accept(gpslToAbstracTextConverter, null);
    //convert ltl text to automaton
    const ltl3baAutomaton = await fetchAutomaton(text);
    //build a GPSLAutomaton with the result
    const automaton = ltl3baToGPSLAutomaton(ltl3baAutomaton);
    //bind the automaton to the atoms of the LTL expression
    link(automaton, gpslToAbstracTextConverter.name2atom);
    return automaton;
}

export {ltlToAutomaton};