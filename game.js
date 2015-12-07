// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');
//
// function Box(x, y) {
//   this.x = x;
//   this.y = y;
//   this.width = 10;
//   this.height = 10;
// }
//
// Box.prototype.draw = function() {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// };
//
// Box.prototype.move = function() {
//   if(this.y <= canvas.height - this.height) {
//     this.y++;
//   }
//   return this;
// };
//
// var boxes = [new Box(50, 50), new Box(70, 50), new Box(90,50), new Box(110, 50)]
//
// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   boxes.forEach(function (box) {
//     box.draw().move();
//   });
//   requestAnimationFrame(gameLoop);
// });
