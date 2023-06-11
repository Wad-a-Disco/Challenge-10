class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return "";
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
      this.radius = 50;
      this.characters = "";
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    setCharacters(characters) {
      this.characters = characters;
    }
  
    render() {
      const circle = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
      const textX = 150;
      const textY = 100;
      const textAnchor = "middle";
      const alignmentBaseline = "middle";
      const fontSize = "24px";
      const characters = `<text x="${textX}" y="${textY}" text-anchor="${textAnchor}" alignment-baseline="${alignmentBaseline}" fill="#ffffff" font-size="${fontSize}">${this.characters}</text>`;
      return circle + characters;
    }
  }
  
  class Triangle extends Shape {
    render() {
      const triangle = '<polygon points="150,20 280,180 20,180" fill="' + this.color + '" />';
      return triangle;
    }
  }
  
  class Square extends Shape {
    render() {
      const square = '<rect x="50" y="50" width="200" height="200" fill="' + this.color + '" />';
      return square;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  
  