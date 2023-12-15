import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './home-restaurants.component.html',
  styleUrls: ['./home-restaurants.component.scss']
})
export class HomeRestaurantsComponent {
 public restaurants = [
  {
    img: 'assets/restaurants/rest.png',
    title: 'Royal Sushi House',
    time: '30-40 min',
    price: '$32 min sum',
    cart: 0,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.png'
      },
      {
        title: 'Burger',
        img: 'assets/restaurants/burger.png'
      }
    ]
  },
  {
    img: 'assets/restaurants/rest.png',
    title: 'Royal Sushi House',
    time: '30-40 min',
    price: '$32 min sum',
    cart: 1,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.png'
      },
      {
        title: 'Burger',
        img: 'assets/restaurants/burger.png'
      }
    ]
  },
  {
    img: 'assets/restaurants/rest.png',
    title: 'Royal Sushi House',
    time: '30-40 min',
    price: '$32 min sum',
    cart: 2,
    tags: [
      {
        title: 'Sushi',
        img: 'assets/restaurants/sushi.png'
      },
      {
        title: 'Burger',
        img: 'assets/restaurants/burger.png'
      }
    ]
  },
 ]
}
