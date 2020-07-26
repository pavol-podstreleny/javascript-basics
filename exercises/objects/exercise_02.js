function createAdress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipcode;
}

const address1 = createAdress("a", "b", "c");
const address2 = Address("a", "b", "c");
