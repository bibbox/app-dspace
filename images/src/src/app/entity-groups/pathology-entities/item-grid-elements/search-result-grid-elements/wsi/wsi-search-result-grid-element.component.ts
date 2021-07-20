import { Component } from '@angular/core';
import { SearchResultGridElementComponent } from '../../../../../shared/object-grid/search-result-grid-element/search-result-grid-element.component';
import { Item } from '../../../../../core/shared/item.model';
import { ItemSearchResult } from '../../../../../shared/object-collection/shared/item-search-result.model';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { focusShadow } from '../../../../../shared/animations/focus';

@listableObjectComponent('WsiSearchResult', ViewMode.GridElement)
@Component({
  selector: 'ds-wsi-search-result-grid-element',
  styleUrls: ['./wsi-search-result-grid-element.component.scss'],
  templateUrl: './wsi-search-result-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item search result of the type Wsi
 */
export class WsiSearchResultGridElementComponent extends SearchResultGridElementComponent<ItemSearchResult, Item> {
}
