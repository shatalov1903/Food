import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './home-restaurants.component.html',
  styleUrls: ['./home-restaurants.component.scss']
})
export class HomeRestaurantsComponent {
 public restaurants = [
  {
    img: 'assets/restaurants/royal.png',
    title: 'Royal Sushi House',
    cartImg: 'assets/restaurants/bag.svg',
    cartTitle: 'Bag',
    timeImg: 'assets/restaurants/clock.svg',
    timeTitle: 'Clock',
    time: '30-40 min',
    dotImg: 'assets/restaurants/dot.svg',
    dotTitle: 'Dot',
    price: '$32 min sum',
    // cart: 0,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.svg'
      },
    ]
  },
  {
    img: 'assets/restaurants/burgers.png',
    title: 'Burgers & Pizza',
    cartImg: 'assets/restaurants/bag.svg',
    cartTitle: 'Bag',
    timeImg: 'assets/restaurants/clock.svg',
    timeTitle: 'Clock',
    time: '40-60 min',
    dotImg: 'assets/restaurants/dot.svg',
    dotTitle: 'Dot',
    price: '$24 min sum',
    // cart: 0,
    tags: [
      {
        title: 'Burger',
        img: 'assets/restaurants/burger.svg'
      },
      {
        title: 'Pizza',
        img: 'assets/restaurants/pizza.svg'
      }
    ]
  },
  {
    img: 'assets/restaurants/ninja.png',
    title: 'Ninja sushi',
    cartImg: 'assets/restaurants/bag.svg',
    cartTitle: 'Bag',
    timeImg: 'assets/restaurants/clock.svg',
    timeTitle: 'Clock',
    time: '20-40 min',
    dotImg: 'assets/restaurants/dot.svg',
    dotTitle: 'Dot',
    price: '$40 min sum',
    // cart: 0,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.svg'
      },
    ]
  },
  {
    img: 'assets/restaurants/sushi.png',
    title: 'Sushi master',
    cartImg: 'assets/restaurants/bag.svg',
    cartTitle: 'Bag',
    timeImg: 'assets/restaurants/clock.svg',
    timeTitle: 'Clock',
    time: '60-70 min',
    dotImg: 'assets/restaurants/dot.svg',
    dotTitle: 'Dot',
    price: '$49 min sum',
    // cart: 0,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.svg'
      },
    ]
  },
  {
    img: 'assets/restaurants/japanese.png',
    title: 'Japanese sushi',
    cartImg: 'assets/restaurants/bag.svg',
    cartTitle: 'Bag',
    timeImg: 'assets/restaurants/clock.svg',
    timeTitle: 'Clock',
    time: '30-50 min',
    dotImg: 'assets/restaurants/dot.svg',
    dotTitle: 'Dot',
    price: '$104 min sum',
    // cart: 0,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.svg'
      },
    ]
  },
  {
    img: 'assets/restaurants/kobe.png',
    title: 'Kobe',
    cartImg: 'assets/restaurants/bag.svg',
    cartTitle: 'Bag',
    timeImg: 'assets/restaurants/clock.svg',
    timeTitle: 'Clock',
    time: '20-30 min',
    dotImg: 'assets/restaurants/dot.svg',
    dotTitle: 'Dot',
    price: '$57 min sum',
    // cart: 0,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.svg'
      },
    ]
  }
 ]
}
