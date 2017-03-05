import { Action, Reducer, createStore, Store, combineReducers, ReducersMapObject } from 'redux';

enum actionTypes {
    ADD,
    SUBTRACT
}

interface CalcAction extends  Action {
    value: number
}

const createAddAction: (value: number) => CalcAction = (value) => ({
    type: actionTypes.ADD,
    value
}); //by doing this ({ }), it returns object? 

const createSubtractAction: (value: number) => CalcAction = (value) => ({
    type: actionTypes.SUBTRACT,
    value
});

interface AppState {
    sum: number,
    history: string[]
}

const sumReducer: Reducer<number> = (state: number, action: CalcAction) => {
     switch(action.type){
         case actionTypes.ADD:
            return state + action.value;
        case actionTypes.SUBTRACT:
            return state - action.value;
        default: 
            return state;
     }
}

const historyReducer: Reducer<string[]> = (state: string[] = [], action: CalcAction) => {
     switch(action.type){
         case actionTypes.ADD:
            return state.concat(`op: add, value: ${action.value}`);
        case actionTypes.SUBTRACT:
            return state.concat(`op: subtract, value: ${action.value}`);
        default: 
            return state;
     }
}

const reducerMap: ReducersMapObject = {
    sum: sumReducer,
    history: historyReducer
};

const appStore: Store<AppState> = createStore<AppState>(combineReducers<AppState>(reducerMap));

appStore.subscribe(()=>{
    console.log('Action was dispatched, state was reduced');
    console.log(appStore.getState());
});

appStore.dispatch(createAddAction(2));
appStore.dispatch(createSubtractAction(4));
appStore.dispatch(createAddAction(3));
appStore.dispatch(createSubtractAction(7));
appStore.dispatch(createAddAction(1));




//-------------------- Basic Info about State -------------------//
//reducer function
// const actions = [1,2,3,4,5];


// const actions = [
//     {type: 'add', val: 1},
//     {type: 'subtract', val: 2},
//     {type: 'add', val: 3},
//     {type: 'subtract', val: 4},
//     {type: 'add', val: 5}
// ];

// const finalState = actions.reduce((state, action) => {
//      console.log(state, action);
//      switch(action.type){
//          case 'add':
//             return state + action.val;
//         case 'subtract':
//             return state - action.val;
//         default: 
//             return state;
//      }
// }, 0); //0 is the initial value
// // const sum = nums.reduce((prev,cur) => {
// //      return prev+cur;
// // });
// console.log(finalState);

// //it gets tricky if we want to work with an object since when modifying object, it mutates the object
// //so prevent that issue needs to use Object.assign
// console.log('---------------');
// const objFinalState = actions.reduce((state, action) => {
//      console.log(state, action);
//      switch(action.type){
//          case 'add':
//             return Object.assign({}, state, {sum: state.sum + action.val});
//         case 'subtract':
//             return Object.assign({}, state, {sum: state.sum - action.val});
//         default: 
//             return state;
//      }
// }, {sum: 0});
// console.log(objFinalState.sum);

//import * as React from 'react'; 
//react is an old library so {crateElement} from 'react' won't recognize
//however we can do import {createStore} from 'redux'; redux support three shaking


// import * as mod from './mod'; //not the best practice - think about tree shaking
// //import {newVal, newVal2} from './mod'; 

// console.log(mod.newVal);
// console.log(mod.newVal2);