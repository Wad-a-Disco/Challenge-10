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
      const centerX = 150;  // X-coordinate of the circle's center
      const centerY = 100;  // Y-coordinate of the circle's center
  
      // Calculate the text position based on the circle's radius
      const textX = centerX;
      const textY = centerY;
  
      const circle = `<circle cx="${centerX}" cy="${centerY}" r="${this.radius}" fill="${this.color}" />
        <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" font-size="20" fill="black">${this.characters}</text>`;
      return circle;
    }
  }
  
  
  class Triangle extends Shape {
    render() {
      const triangle = `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
      return triangle;
    }
  }
  
  class Square extends Shape {
    render() {
      const square = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
      return square;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };
  