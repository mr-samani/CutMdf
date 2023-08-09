import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PackingService } from './paking.service';
import { finalize, pipe } from 'rxjs';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent implements OnInit {
  loading = true;
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  constructor(
    private packingService: PackingService
  ) {

  }
//https://www.cutlistoptimizer.com/
  ngOnInit(): void {
    this.packingService.getData()
      .pipe(finalize(() => this.loading = false))
      .subscribe(rectangles => {
        const canvas = this.canvasRef.nativeElement;
        const ctx = canvas.getContext('2d');
        console.log(rectangles);
        rectangles.forEach((rect: any) => {
          if (ctx) {
            ctx.rect(rect.x, rect.y, rect.width, rect.height);
            ctx.strokeStyle = '#039aad';
            ctx.fillText(rect.index, rect.x + 10, rect.y + 10);
            ctx.stroke();
          
          }
        });
      })
  }
}
