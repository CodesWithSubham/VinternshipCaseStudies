// 04 - let & const
var score = 99;
if (true) {
    var score_1 = 78;
    console.log("The score inside if block is ".concat(score_1));
    var score_2 = 67; // index.ts:6:7 - error TS2451: Cannot redeclare block-scoped variable 'score'.
}
console.log("The score outside if block is ".concat(score));
var COUNTRY = "India";
console.log("The country is ".concat(COUNTRY));
COUNTRY = "USA"; // index.ts:12:1 - error TS2588: Cannot assign to 'COUNTRY' because it is a constant.
