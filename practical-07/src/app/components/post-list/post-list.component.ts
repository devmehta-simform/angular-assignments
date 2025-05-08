import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Post } from '../../types/post';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, PostListItemComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts: Post[] = [
    {
      id: '1',
      title: 'Wubba Lubba Dub Dub!',
      body: 'Just invented a portal gun... again. Let’s hope I don’t accidentally create another Cronenberg world.',
      userId: '3',
    },
    {
      id: '2',
      title: 'Pickle Rick Returns',
      body: 'I turned myself into a pickle to skip therapy. Again. Morty, you gotta respect the commitment.',
      userId: '3',
    },
    {
      id: '3',
      title: 'Council of Ricks Meeting',
      body: 'Big brain talk with 500 alternate versions of myself. Spoiler: I still win.',
      userId: '3',
    },
    {
      id: '4',
      title: 'Morty Screwed Up',
      body: 'Morty dropped the neutrino bomb... again. Universe #749 is toast. Classic Morty move.',
      userId: '3',
    },
    {
      id: '5',
      title: 'Summer’s New Side Hustle',
      body: 'Summer started selling interdimensional crystals. I give it two weeks before the Galactic Federation notices.',
      userId: '3',
    },
  ];
}
