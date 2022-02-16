/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as E from './expressions';
import { typeIsArray } from '../util/util';

export function build(json: any): any {
  if (json == null) {
    return json;
  }

  if (typeIsArray(json)) {
    return (json as any[]).map(child => build(child));
  }

  if (json.type === 'FunctionRef') {
    return new E.FunctionRef(json);
  } else if (json.type === 'Literal') {
    return E.Literal.from(json);
  } else if (functionExists(json.type)) {
    return constructByName(json.type, json);
  } else {
    return null;
  }
}

function functionExists(name: string) {
  // @ts-ignore
  return typeof E[name] === 'function';
}

function constructByName(name: string, json: any) {
  // @ts-ignore
  return new E[name](json);
}
