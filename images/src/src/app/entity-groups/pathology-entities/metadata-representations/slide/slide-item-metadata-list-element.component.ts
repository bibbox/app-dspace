import { Component } from '@angular/core';
import { metadataRepresentationComponent } from '../../../../shared/metadata-representation/metadata-representation.decorator';
import { MetadataRepresentationType } from '../../../../core/shared/metadata-representation/metadata-representation.model';
import { ItemMetadataRepresentationListElementComponent } from '../../../../shared/object-list/metadata-representation-list-element/item/item-metadata-representation-list-element.component';

@metadataRepresentationComponent('Slide', MetadataRepresentationType.Item)
@Component({
  selector: 'ds-slide-item-metadata-list-element',
  templateUrl: './slide-item-metadata-list-element.component.html'
})
/**
 * The component for displaying an item of the type Slide as a metadata field
 */
export class SlideItemMetadataListElementComponent extends ItemMetadataRepresentationListElementComponent {
}
