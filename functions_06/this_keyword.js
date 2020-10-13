// This reference to object executing current function

// If function if part of object => method
// this reference object it self

// Regular function => global object which is window object in browser and global in node

/**
 * Example of first rule
 */
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.stop();

/***
 * Example of the second rule
 */
// Reference to window / global
function playVideo() {
  console.log(this);
}

playVideo();

// Reference to object
function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("a");

const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this);
  },
};

video2.showTags();
