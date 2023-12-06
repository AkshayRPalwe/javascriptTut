const accountId = 144; //We can't change values of const keyword
let accountEmail = "akshay@gmail.com"; //
var accountPassword = "12345";
accountCity = "Pune";

// accountId = 2; //TypeError: Assignment to constant variable.

accountEmail = "ap@ap.com";
accountPassword = "1111";
accountCity = "Shirur";

console.log(accountId);

console.table([accountEmail, accountPassword, accountId, accountCity]);
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │ 'ap@ap.com' │
// │    1    │   '1111'    │
// │    2    │     144     │
// │    3    │  'Shirur'   │
// └─────────┴─────────────┘
