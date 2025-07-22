//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;

  angleMode(RADIANS);
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() {
  push();
  translate(100, 100); 

  let numPetals = 5;
  
  let angle = TWO_PI / numPetals;

  // 花瓣
  fill(255, 215, 0);// 黄色
  
  noStroke();
  for (let i = 0; i <= numPetals; i++) {
    push();
    rotate(i * angle);           // 每个花瓣旋转到不同角度
    ellipse(40, 0, 60, 28);      // 花瓣离花心40像素，横向椭圆
    pop();
  }


  // 花心
  fill(139, 69, 19);
  ellipse(0, 0, 32, 32); // 花心

  pop();
}
