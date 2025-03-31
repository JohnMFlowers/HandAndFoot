import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  imports: [FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item!: Item;
}
