import { Component } from '@angular/core';
import { AbstractListableElementComponent } from '../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../core/shared/item.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../core/shared/view-mode.model';

@listableObjectComponent('Wsi', ViewMode.ListElement)
@Component({
  selector: 'ds-wsi-list-element',
  styleUrls: ['./wsi-list-element.component.scss'],
  templateUrl: './wsi-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Wsi
 */
export class WsiListElementComponent extends AbstractListableElementComponent<Item> {
}
