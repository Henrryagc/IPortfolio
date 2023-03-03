import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit, AfterViewInit {

  
  
  @ViewChild('clockCanvas')
  clockCanvas!: ElementRef<HTMLCanvasElement>;
  
  private selectedHour: number;
  private selectedMinute: number;
  private clockRadius: number;
  private hourHandLength: number;
  private minuteHandLength: number;
  private clockCentreX: number;
  private clockCentreY: number;
  
  constructor() {
    this.selectedHour = 12;
    this.selectedMinute = 0;
    this.clockRadius = 125;
    this.hourHandLength = this.clockRadius * 0.5;
    this.minuteHandLength = this.clockRadius * 0.8;
    this.clockCentreX = this.clockRadius + 25;
    this.clockCentreY = this.clockRadius + 25;
  }
  
  ngOnInit(): void {}
  
  ngAfterViewInit() {
    this.drawClock();
  }

  drawClock() {
    const canvas = this.clockCanvas.nativeElement;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock face
    ctx.beginPath();
    ctx.arc(this.clockCentreX, this.clockCentreY, this.clockRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    // Draw hour markers
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.translate(this.clockCentreX, this.clockCentreY);
      ctx.rotate(i * 30 * Math.PI / 180);
      ctx.beginPath();
      ctx.moveTo(this.clockRadius, 0);
      ctx.lineTo(this.clockRadius - 10, 0);
      ctx.stroke();
      ctx.restore();
    }

    // Draw hour hand
    ctx.save();
    ctx.translate(this.clockCentreX, this.clockCentreY);
    ctx.rotate((this.selectedHour + this.selectedMinute / 60) * 30 * Math.PI / 180);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -this.hourHandLength);    
  }
}
