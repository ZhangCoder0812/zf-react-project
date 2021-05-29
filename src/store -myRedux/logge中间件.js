export default function logger({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      console.log("老数据-", getState());
      let res = next(action);
      console.log("新数据-", getState());
      return res;
    };
  };
}
