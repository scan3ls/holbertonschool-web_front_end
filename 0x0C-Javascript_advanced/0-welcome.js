/**
 * Welcome message
 * @param {string} firstName first name
 * @param {string} lastName last name
 */
function welcome(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  function displayFullName() {
      alert(`Welcome ${fullName}!`);
  }
  displayFullName();
}
