import { Component } from '@angular/core';
import { ItemComponent } from '../../../../+item-page/simple/item-types/shared/item.component';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';

@listableObjectComponent('Slide', ViewMode.StandalonePage)
@Component({
  selector: 'ds-slide',
  styleUrls: ['./slide.component.scss'],
  templateUrl: './slide.component.html'
})
/**
 * The component for displaying metadata and relations of an item of the type Organisation Unit
 */
export class SlideComponent extends ItemComponent {
}
