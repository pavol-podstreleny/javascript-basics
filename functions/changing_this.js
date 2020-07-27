const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

function playVideo() {
  console.log(this);
}

// Changing this of function
playVideo.call({ name: "Mosh" });
playVideo.apply({ name: "mosh" });
playVideo.bind({ name: "Mosh" }); // set permanently

playVideo();

// Arrow function
// using bind method on function object

function skuska(array) {
  array.forEach((item) => console.log(this));
}

skuska([1, 2, 3]);
