function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]');function a(o,n){const t=Math.random()>.3;return new Promise(((e,r)=>{setTimeout((()=>{t?e({position:o,delay:n}):r({position:o,delay:n})}),n)})).then((({position:o,delay:n})=>{e(i).Notify.success(` Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(i).Notify.failure(` Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const o=parseInt(l.value),n=parseInt(u.value);parseInt(s.value);for(let e=0;e<s.value;e+=1){a(e+1,o+e*n)}}));
//# sourceMappingURL=03-promises.d602a070.js.map
