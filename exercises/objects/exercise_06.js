function PriceRange(symbol, label, min, max) {
  this.symbol = symbol;
  this.label = label;
  this.min = min;
  this.max = max;
}

const prices = [
  new PriceRange("$", "low cost", 10, 100),
  new PriceRange("$$", "medium cost", 101, 200),
  new PriceRange("$$$", "high cost", 201, 300),
];
