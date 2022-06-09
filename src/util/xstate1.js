import { Machine, interpret } from "xstate";
const lightMachine = Machine({
  initial: "red",
  states: {
    red: {
      on: {
        click: "green"
      }
    },
    green: {
      on: {
        press: "yellow"
      }
    },
    yellow: {
      on: {
        keyup: "red"
      }
    }
  }
});

export default lightMachine;
