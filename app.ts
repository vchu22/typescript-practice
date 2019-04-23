// ES6 computed props
const prefix = 'os_';
var support = {
  [`${prefix}Windows`]: isSupported('Windows'),
  [`${prefix}Mac`]: isSupported('Mac'),
  [`${prefix}Linux`]: isSupported('Linux'),
};
function isSupported(os) {
  return Math.random() >= 0.5;
}

/* enforce params type */
// these two will enforce the consistency fo both arguments
function totalLength(x: string, y: string);
function totalLength(x: any[], y: any[]);
// the actual function definition
function totalLength(x: string | any[], y: string | any[]): number {
  // when calling a method on passed in vars, the method has to exist on both data types
  return x.length + y.length;
}
console.log(totalLength([3], 'uuu')); // should hightlight an error at the second arg
