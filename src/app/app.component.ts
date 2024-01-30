import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cafe-app';

  items = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    // Add more items as needed
  ];
}
