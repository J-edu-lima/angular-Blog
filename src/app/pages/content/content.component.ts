import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/07/The-Bear-on-FX-Hulu.jpg';
  contentTitle: string = 'Restaurante abre com dificuldades finaceiras';
  contentDescription: string =
    'O estabelecimento "The Beef" passa por dificuldades financeiras após mudança de dono. Carmy Bearzzato assume os négocios da familía em meio a cénario conturbado';

  constructor() {}

  ngOnInit(): void {}
}
