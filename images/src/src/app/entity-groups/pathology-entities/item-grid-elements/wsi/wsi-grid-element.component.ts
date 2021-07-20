import { Component } from '@angular/core';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../core/shared/item.model';

@listableObjectComponent('Wsi', ViewMode.GridElement)
@Component({
  selector: 'ds-wsi-grid-element',
  styleUrls: ['./wsi-grid-element.component.scss'],
  templateUrl: './wsi-grid-element.component.html',
})
/**
 * The component for displaying a grid element for an item of the type Wsi
 */
export class WsiGridElementComponent extends AbstractListableElementComponent<Item> {
}
