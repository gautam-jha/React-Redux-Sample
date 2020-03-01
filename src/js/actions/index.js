import { EMPLOYEES } from "../constants/action-types";

export function employees(payload) {
  return { type: EMPLOYEES, payload };
}

