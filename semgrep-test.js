// semgrep-test.js

// ❌ 1. Hardcoded secret (security + code smell)
const password = "123456";

// ❌ 2. Console log (code smell)
console.log("Password is:", password);

// ❌ 3. Unused variable (code smell)
function unusedExample() {
  let unusedVar = 42;
  return true;
}

// ❌ 4. Duplicate condition (bug)
function checkValue(value) {
  if (value > 10) {
    return "Greater";
  } else if (value > 10) { // duplicate condition
    return "Still Greater";
  }
}

// ❌ 5. Always true condition (code smell)
if (true) {
  console.log("This always runs");
}

// ❌ 6. Empty catch block (bug)
try {
  riskyFunction();
} catch (e) {
  // ignoring error
}

// ❌ 7. Dangerous eval usage (bug/security)
eval("console.log('Unsafe execution')");

// ❌ 8. Null/undefined risk (bug)
let name;
if (name.toLowerCase() === "test") { // can crash
  console.log("Hello");
}

// Dummy function
function riskyFunction() {
  throw new Error("Test error");
}
