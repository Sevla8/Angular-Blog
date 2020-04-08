import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim sapien facilisis, pretium metus id, efficitur orci. Pellentesque pharetra lacinia augue id consequat. Etiam accumsan congue libero, quis dapibus est efficitur non. Proin vitae nunc mauris. Morbi quis consequat orci, sed facilisis ante. Nullam fermentum enim eget velit efficitur, id luctus erat elementum. Donec id est dui. Maecenas iaculis ultrices dignissim. Donec a ante condimentum, vehicula mauris vel, cursus dolor. Donec vestibulum, diam et tempor tincidunt, erat quam viverra massa, ut placerat nisl dolor non ligula. ',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: ' Duis congue neque non quam consectetur hendrerit. Aenean in efficitur metus. Vestibulum at leo nec ipsum volutpat venenatis id a urna. Duis quis dui erat. Aenean ut luctus arcu. Integer mattis accumsan accumsan. Cras imperdiet venenatis sapien vitae suscipit. Donec euismod cursus facilisis. Nam sem eros, luctus eu nisl sit amet, blandit ullamcorper leo. Aenean faucibus nisl a quam imperdiet sagittis. Mauris sit amet elit sed odio blandit dignissim. Donec semper magna augue, nec interdum ligula pharetra ac. ',
      loveIts: -5,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'In aliquet erat ipsum, ut ullamcorper neque placerat a. Phasellus tincidunt sodales ante imperdiet aliquam. Morbi ac magna non est bibendum ullamcorper et id orci. Nullam sed sagittis massa, quis pretium risus. Nullam id viverra nibh, et eleifend mauris. Nulla auctor, massa id molestie luctus, felis ante commodo metus, in auctor nulla lacus at lacus. Nulla venenatis, quam eget feugiat aliquet, metus magna vulputate sem, id interdum arcu elit quis neque. Aenean quis tortor molestie, efficitur arcu et, convallis diam. In eu sem consequat, volutpat leo vitae, pretium dui. Aenean diam ante, fermentum eu tristique non, congue in libero. Fusce sapien orci, vestibulum at cursus a, dapibus imperdiet eros. Aliquam sagittis commodo porta. Proin imperdiet ut justo at mollis. Cras commodo quam eget eleifend faucibus. Aliquam accumsan augue ut risus dictum ultrices.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
