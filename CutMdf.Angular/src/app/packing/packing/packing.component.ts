import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PackingService } from './paking.service';
import { finalize, pipe } from 'rxjs';
import { PackingMethod } from './model';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent implements OnInit {
  loading = true;
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  method = PackingMethod.RectBestAreaFit;
  allowFlip = true;
  constructor(
    private packingService: PackingService
  ) {

  }
  //https://www.cutlistoptimizer.com/
  //https://opcut.kopic.xyz/index.html
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.packingService.getData({
      method: this.method,
      allowFlip: this.allowFlip
    })
      .pipe(finalize(() => this.loading = false))
      .subscribe(rectangles => {
        const canvas = this.canvasRef.nativeElement;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
        }
        console.log(rectangles);
        setTimeout(() => {
          rectangles.forEach((rect: any) => {
            if (ctx) {
              ctx.rect(rect.x, rect.y, rect.width, rect.height);
              ctx.strokeStyle = '#039aad';
              ctx.fillText(rect.index, rect.x + 10, rect.y + 10);
              ctx.stroke();
            }
          });
        }, 1000);

      })
  }

  public get PackingMethod(): typeof PackingMethod {
    return PackingMethod;
  }
}
