export interface IReducer {
  state: string | object | number | Array<string | object> | any,
  action: any,
  todos?: Array<object | string>,

}