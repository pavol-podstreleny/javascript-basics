function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipcode;
}

const address1 = createAdress("a", "b", "c");
const address2 = Address("a", "b", "c");

function areEqual(address1, address2) {
  let areEqual = true;
  for (key in address1) {
    if (address1[key] !== address2[key]) {
      areEqual = false;
      break;
    }
  }
  return areEqual;
}

function areSame(address1, address2) {
  return address1 === address2;
}
