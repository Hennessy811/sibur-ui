import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'Ngx-NgxPolygonDraw',
  template: `
    <div (load)="clear_canvas()">
      <canvas #polygon id="jPolygon" width="{{width || '640'}}" height="{{height || '480'}}" style="cursor:crosshair" (mousedown)="point_it($event)" oncontextmenu="return false;">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  `,
  styles: []
})

export class NgxPolygonDrawComponent implements OnInit {

  constructor(private rd: Renderer2) { }

  @Input() private height: string;
  @Input() private width: string;
  @Input() private src: string;
  @Output() private created = new EventEmitter();
  @ViewChild('polygon') private polygon:ElementRef;

  perimeter = [];
  complete = false;
  private canvas;
  private ctx;

  private static line_intersects(p0, p1, p2, p3) {
    let s1_x, s1_y, s2_x, s2_y;
    s1_x = p1['x'] - p0['x'];
    s1_y = p1['y'] - p0['y'];
    s2_x = p3['x'] - p2['x'];
    s2_y = p3['y'] - p2['y'];

    let s, t;
    s = (-s1_y * (p0['x'] - p2['x']) + s1_x * (p0['y'] - p2['y'])) / (-s2_x * s1_y + s1_x * s2_y);
    t = ( s2_x * (p0['y'] - p2['y']) - s2_y * (p0['x'] - p2['x'])) / (-s2_x * s1_y + s1_x * s2_y);

    return s >= 0 && s <= 1 && t >= 0 && t <= 1;
    // No collision
  }

  private point(x, y){
    this.ctx.fillStyle="white";
    this.ctx.strokeStyle = "white";
    this.ctx.fillRect(x-2,y-2,4,4);
    this.ctx.moveTo(x,y);
  }

  undo(){
    this.ctx = undefined;
    this.perimeter.pop();
    this.complete = false;
    this.start(true);
  }

  clear_canvas(){
    this.ctx = undefined;
    this.perimeter = [];
    this.complete = false;
    // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = '';
    this.start(false);
  }

  private draw(end){
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "white";
    this.ctx.lineCap = "square";
    this.ctx.beginPath();

    for(let i = 0; i < this.perimeter.length; i++){
      if( i == 0 ){
        this.ctx.moveTo(this.perimeter[i]['x'],this.perimeter[i]['y']);
        end || this.point(this.perimeter[i]['x'],this.perimeter[i]['y']);
      } else {
        this.ctx.lineTo(this.perimeter[i]['x'],this.perimeter[i]['y']);
        end || this.point(this.perimeter[i]['x'],this.perimeter[i]['y']);
      }
    }
    if(end){
      this.ctx.lineTo(this.perimeter[0]['x'],this.perimeter[0]['y']);
      this.ctx.closePath();
      this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
      this.ctx.fill();
      this.ctx.strokeStyle = 'blue';
      this.complete = true;
      this.created.emit(this.perimeter);
    }
    this.ctx.stroke();

    // print coordinates
    if(this.perimeter.length == 0){
      // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = '';
    } else {
      // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = JSON.stringify(this.perimeter);
    }
  }

  private check_intersect(x,y){
    if(this.perimeter.length < 4){
      return false;
    }
    let p0 = [];
    let p1 = [];
    let p2 = [];
    let p3 = [];

    p2['x'] = this.perimeter[this.perimeter.length-1]['x'];
    p2['y'] = this.perimeter[this.perimeter.length-1]['y'];
    p3['x'] = x;
    p3['y'] = y;

    for(let i=0; i<this.perimeter.length-1; i++){
      p0['x'] = this.perimeter[i]['x'];
      p0['y'] = this.perimeter[i]['y'];
      p1['x'] = this.perimeter[i+1]['x'];
      p1['y'] = this.perimeter[i+1]['y'];
      if(p1['x'] == p2['x'] && p1['y'] == p2['y']){ continue; }
      if(p0['x'] == p3['x'] && p0['y'] == p3['y']){ continue; }
      if(NgxPolygonDrawComponent.line_intersects(p0,p1,p2,p3)==true){
        return true;
      }
    }
    return false;
  }

  point_it(event) {
    if(this.complete){
      // alert('Разметка уже создана');
      this.created.emit('already created');
      return false;
    }
    let rect, x, y;

    if(event.ctrlKey || event.which === 3 || event.button === 2){
      if(this.perimeter.length == 2){
        // alert('Для создания разметки необходимо не менее 3-х точек');
        this.created.emit('at least 3 points required');
        return false;
      }
      x = this.perimeter[0]['x'];
      y = this.perimeter[0]['y'];
      if(this.check_intersect(x,y)){
        // alert('Эта линия пересекает другую');
        this.created.emit('line intersecrion');
        return false;
      }
      this.draw(true);
      // alert('Разметка завершена');
      event.preventDefault();
      return false;
    } else {
      rect = this.canvas.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      if (this.perimeter.length>0 && x == this.perimeter[this.perimeter.length-1]['x'] && y == this.perimeter[this.perimeter.length-1]['y']){
        // same point - double click
        return false;
      }
      if(this.check_intersect(x,y)){
        // alert('Эта линия пересекает другую');
        this.created.emit('line intersection');
        return false;
      }
      this.perimeter.push({'x':x,'y':y});
      this.draw(false);
      return false;
    }
  }

  private start(with_draw: boolean) {
    const img = new Image();
    img.src = this.src;
    img.onload = () => {
      this.ctx = this.canvas.getContext("2d");
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      if(with_draw == true){
        this.draw(false);
      }
    }
  }

  ngOnInit() {
    this.setBcg();
    this.start(false);
  }

  private setBcg() {
    this.canvas = this.rd.selectRootElement(this.polygon["nativeElement"]);
    this.ctx = this.canvas.getContext("2d");
    let bcg = new Image();

    bcg.src = this.src;
    bcg.onload = () => {
      this.ctx.drawImage(bcg, 0, 0)
    };
  }

}
