import { Component } from '@angular/core';
import { ItemComponent } from '../../../../+item-page/simple/item-types/shared/item.component';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';

@listableObjectComponent('Wsi', ViewMode.StandalonePage)
@Component({
  selector: 'ds-wsi',
  styleUrls: ['./wsi.component.scss'],
  templateUrl: './wsi.component.html'
})
/**
 * The component for displaying metadata and relations of an item of the type Wsi
 */
export class WsiComponent extends ItemComponent {
}
