/*
 module:
    main.ts
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11 add polyfill
 */
Promise.prototype.finally = function(callback: any): Promise<any> {
  "use strict";
  let P = this.constructor;
  return this.then(
    //@ts-ignore
    value => P.resolve(callback(value)),
    //@ts-ignore
    err => P.resolve(callback(err))
  );
};
