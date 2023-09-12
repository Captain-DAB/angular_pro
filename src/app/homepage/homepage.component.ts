import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { CartService } from '../service/cart.service';
interface Product {
  title1: string;
  title2: string;
  cardImage: string;
  discountedPrice: string;
  normalPrice: string;
  bgColor: string;
  category: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  isSticky = false;
  isMenuOpen = false;
  searchKey: string = '';
  searchTerm: string = '';

  cart = 'Add to Cart';
  opt = '--Please Select--';
  opt1 = 'Blue(+$1.2)';
  opt2 = 'Green(+$1.5)';
  opt3 = 'Yellow(+$1.7)';
  opt4 = 'Purple(+$2.5)';

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }
  // to filter my products based on list
  selectedCategory: string = 'ALL';
  filterProducts(category: string) {
    this.selectedCategory = category;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.scrollY > 0;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private renderer: Renderer2, private cartService: CartService) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.menuIcon.nativeElement.classList.remove('bi-x');
      this.isMenuOpen = false;
      this.navbar.nativeElement.classList.remove('open');
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  categories: { name: string; icon: string }[] = [
    { name: 'ALL', icon: '' },
    { name: 'Bicycle', icon: 'assets/icons8-bicycle-24.png' },
    { name: 'Motorcycle', icon: 'assets/icons8-motorcycle-24.png' },
    { name: 'Car', icon: 'assets/icons8-car-24.png' },
    { name: 'Truck', icon: 'assets/icons8-truck-24.png' },
    { name: 'Trailer', icon: 'assets/icons8-trailer-unloading-24.png' },
    { name: 'Lorry', icon: 'assets/icons8-lorry-24.png' },
  ];

  products: Product[] = [
    {
      title1: 'Motorcycle',
      title2: 'Bajaj',
      cardImage: 'assets/motorcycle.png',
      discountedPrice: '$20.00',
      normalPrice: '$30.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'ChingChung',
      cardImage: 'assets/bicycle.png',
      discountedPrice: '$10.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Honda',
      cardImage: 'assets/car1.png',
      discountedPrice: '$25.00',
      normalPrice: '$30.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Laomi',
      cardImage: 'assets/truck1.png',
      discountedPrice: '$20.00',
      normalPrice: '$30.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Suzuki',
      cardImage: 'assets/bike.png',
      discountedPrice: '$20.00',
      normalPrice: '$30.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Taktoe',
      cardImage: 'assets/bicycle1.png',
      discountedPrice: '$10.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Camry',
      cardImage: 'assets/car2.png',
      discountedPrice: '$25.00',
      normalPrice: '$30.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Cacara',
      cardImage: 'assets/truck2.png',
      discountedPrice: '$20.00',
      normalPrice: '$30.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Cycle-Ping',
      cardImage: 'assets/cycle2.png',
      discountedPrice: '$10.00',
      normalPrice: '$15.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Bianan',
      cardImage: 'assets/bicycle2.png',
      discountedPrice: '$10.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Milkose',
      cardImage: 'assets/car3.png',
      discountedPrice: '$35.00',
      normalPrice: '$45.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'PamCas',
      cardImage: 'assets/truck3.png',
      discountedPrice: '$40.00',
      normalPrice: '$50.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Ping Pong',
      cardImage: 'assets/cycle3.png',
      discountedPrice: '$10.00',
      normalPrice: '$15.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Kismal',
      cardImage: 'assets/bicycle3.png',
      discountedPrice: '$10.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Toyota',
      cardImage: 'assets/car4.png',
      discountedPrice: '$35.00',
      normalPrice: '$45.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Isuzu',
      cardImage: 'assets/truck4.png',
      discountedPrice: '$65.00',
      normalPrice: '$67.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Ping Pong',
      cardImage: 'assets/cycle3.png',
      discountedPrice: '$10.00',
      normalPrice: '$15.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Kismal',
      cardImage: 'assets/bicycle3.png',
      discountedPrice: '$10.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Toyota',
      cardImage: 'assets/car4.png',
      discountedPrice: '$35.00',
      normalPrice: '$45.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Isuzu',
      cardImage: 'assets/truck4.png',
      discountedPrice: '$65.00',
      normalPrice: '$67.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Ade-Plug',
      cardImage: 'assets/bike.png',
      discountedPrice: '$15.00',
      normalPrice: '$25.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Matade',
      cardImage: 'assets/bicycle4.png',
      discountedPrice: '$5.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Benz',
      cardImage: 'assets/car5.png',
      discountedPrice: '$35.00',
      normalPrice: '$45.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Iveko',
      cardImage: 'assets/truck1.png',
      discountedPrice: '$65.00',
      normalPrice: '$67.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Vehicle-Loggers',
      cardImage: 'assets/motorcycle.png',
      discountedPrice: '$15.00',
      normalPrice: '$25.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Kd-Cycle',
      cardImage: 'assets/bicycle5.png',
      discountedPrice: '$5.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Benz',
      cardImage: 'assets/car6.png',
      discountedPrice: '$55.00',
      normalPrice: '$65.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Mitsubushi',
      cardImage: 'assets/truck2.png',
      discountedPrice: '$450.00',
      normalPrice: '$470.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
    {
      title1: 'Motorcycle',
      title2: 'Vehicle-Loggers',
      cardImage: 'assets/cycle3.png',
      discountedPrice: '$15.00',
      normalPrice: '$25.00',
      bgColor: '#7894aa',
      category: 'Motorcycle',
    },
    {
      title1: 'Bicycle',
      title2: 'Dab-Cycle',
      cardImage: 'assets/bicycle3.png',
      discountedPrice: '$5.00',
      normalPrice: '$20.00',
      bgColor: '#fcedcf',
      category: 'Bicycle',
    },
    {
      title1: 'Car',
      title2: 'Pickup',
      cardImage: 'assets/car3.png',
      discountedPrice: '$55.00',
      normalPrice: '$65.00',
      bgColor: '#7894aa',
      category: 'Car',
    },
    {
      title1: 'Truck',
      title2: 'Pempeko',
      cardImage: 'assets/truck2.png',
      discountedPrice: '$450.00',
      normalPrice: '$470.00',
      bgColor: '#fcedcf',
      category: 'Truck',
    },
  ];
}
