import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {CarouselItemDirective} from './carousel-item.directive';
import {CarouselItemElementDirective} from './carousel-item-element.directive';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  exportAs: 'carousel'
})
export class CarouselComponent implements OnInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, {read: ElementRef}) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '950ms ease-in';
  @Input() showControls = true;
  @Input() dotControls = true;
  @Input() auto = false;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  private currentEl: ElementRef;
  carouselWrapperStyle = {};
  carouselItemStyle = {};
  timerId;

  constructor(private builder: AnimationBuilder) {
  }

  ngOnInit() {
    this.startAutoMode();
  }

  anime() {
    this.itemsElements.forEach((el, index) => {
      /*console.log(this.currentSlide);
            console.log(index);*/
      const myAnimation: AnimationFactory = this.buildAnimation3();
      this.player = myAnimation.create(el.nativeElement);
      this.player.play();
//el.nativeElement.style.display = 'none';
      if (index === this.currentSlide) {
        this.currentEl = el;
      }


    });
console.log(this.currentEl);
    const myAnimation: AnimationFactory = this.buildAnimation2();
    this.player = myAnimation.create(this.currentEl.nativeElement);
    this.player.play();
    //this.currentEl.nativeElement.style.display = 'block';
  }

  next() {
    if (this.auto) clearInterval(this.timerId);
    //if( this.currentSlide + 1 === this.items.length ) return;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    /* const myAnimation: AnimationFactory = this.buildAnimation(offset);
     this.player = myAnimation.create(this.carousel.nativeElement);
     this.player.play();*/
    this.anime();
    if (this.auto) this.startAutoMode();
  }

  /*private buildAnimation( offset ) {
    return this.builder.build([
     animate(this.timing, style({ transform: `translateX(-${offset}px)` }))

    ]);
  }*/

  private buildAnimation2() {
    console.log('here');
    return this.builder.build([
      style({ width: '100%' }),
      animate(this.timing, style({opacity: 1}))
    ]);
  }

  private buildAnimation3() {
    return this.builder.build([

      animate(this.timing, style({opacity: 0})),
      style({ width: 0 })

    ]);
  }

  prev() {
    //if( this.currentSlide === 0 ) return;
    if (this.auto) clearInterval(this.timerId);
    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    this.anime();
    /* const myAnimation: AnimationFactory = this.buildAnimation(offset);
     this.player = myAnimation.create(this.carousel.nativeElement);
     this.player.play();*/
    if (this.auto) this.startAutoMode();
  }

  goTo(index) {
    if (this.auto) clearInterval(this.timerId);
    this.currentSlide = index;
    /*const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();*/
    this.anime();

    if (this.auto) this.startAutoMode();
  }

  startAutoMode() {
    if (this.auto) {
      const that = this;
      this.timerId = setInterval(function () {

        that.currentSlide = (that.currentSlide + 1) % that.items.length;

        that.anime.call(that);
        /*const offset = that.currentSlide * that.itemWidth;
        const myAnimation: AnimationFactory = that.buildAnimation(offset);
        that.player = myAnimation.create(that.carousel.nativeElement);
        that.player.play();*/

      }, 3000);
    }
  }


}
