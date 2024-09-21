/* eslint-disable import/prefer-default-export */

import { ErrorMessages } from "./consts";

const ZERO_CODE = 48;
const NINE_CODE = ZERO_CODE + 9;

const isCharNumeric = (char: string) =>
  char.charCodeAt(0) >= ZERO_CODE && char.charCodeAt(0) <= NINE_CODE;

export const isNumeric = (str: string) =>
  [...str].every((char) => isCharNumeric(char));

export const nonEmptyRefine = (message = ErrorMessages.EMPTY_OBJECT) =>
  [
    (someObject: any) => Object.keys(someObject).length > 0,
    { message },
  ] as const;

// Can be used for "casting" an array literal to a mutable tuple type. Practically the same as "[...] as const", but without making the type "readonly"
export function toTupleType<T extends [any, ...any]>(v: T) {
  return v;
}

export function isoDatetimeStringRefine() {
  return [
    (str: string) => new Date(str).toISOString() === str,
    {
      message: "Requirement createdAt should be a valid ISO datetime Sstring",
    },
  ] as const;
}

export function transformToDate(dateInput: string | number | Date) {
  return new Date(dateInput);
}
