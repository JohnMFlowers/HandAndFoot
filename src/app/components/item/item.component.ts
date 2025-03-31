import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { ItemBase } from '../../models/item-base.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  imports: [FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() item!: ItemBase;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onInput(event: Event) {
    console.log('onInput', event);
    const input = event.target as HTMLInputElement;
    this.item.value = Number(input.value);
    this.changeDetectorRef.detectChanges();
  }

  onCheck(event: Event) {
    console.log('onCheck', event);
    const input = event.target as HTMLInputElement;
    this.item.value = input.checked ? 1 : 0;
    this.changeDetectorRef.detectChanges();
  }
}
