/*
 module:
    utils index.ts
  author:
    lose_kl<https://github.com/NeverMore-KL>
  summary:
    2018-7-11 add some func
 */
export function getAppVersion(): string {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return "ios";
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return "android";
  } else {
    return "pc";
  }
}
export function sleep(time: number): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
