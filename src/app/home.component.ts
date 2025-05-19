import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-section">
      <div class="hero-carousel">
        <img
          *ngFor="let img of heroImages; let i = index"
          [src]="img"
          [class.active]="i === activeIndex"
          class="hero-img"
          alt="Signature photograph placeholder"
        />
        <div class="carousel-indicator">
          <span
            *ngFor="let img of heroImages; let i = index"
            [class.active]="i === activeIndex"
          ></span>
        </div>
      </div>
      <div class="hero-overlay">
        <h1 class="hero-title">Mfanaka Ka Maluleke</h1>
        <p class="hero-subtitle">South Africa's Boldest Fashion Photographer</p>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class HomeComponent implements OnInit {
  heroImages = [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80',
  ];
  activeIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.heroImages.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
