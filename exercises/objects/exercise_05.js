const blogPost = {
  title: "Title",
  body: "Body",
  author: "author",
  views: 123,
  comments: [{ author: "palo", body: "Fero" }],
  isLive: false,
};

function Post(title, body, author, views = 0, comments = [], isLive = false) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.isLive = isLive;
}
