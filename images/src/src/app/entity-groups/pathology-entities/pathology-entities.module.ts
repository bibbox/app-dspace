import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ItemPageModule } from '../../+item-page/item-page.module';
import { SlideComponent } from './item-pages/slide/slide.component';
import { ScanComponent } from './item-pages/scan/scan.component';
import { WsiComponent } from './item-pages/wsi/wsi.component';
import { SlideListElementComponent } from './item-list-elements/slide/slide-list-element.component';
import { ScanListElementComponent } from './item-list-elements/scan/scan-list-element.component';
import { WsiListElementComponent } from './item-list-elements/wsi/wsi-list-element.component';
import { TooltipModule } from 'ngx-bootstrap';
import { ScanGridElementComponent } from './item-grid-elements/scan/scan-grid-element.component';
import { SlideGridElementComponent } from './item-grid-elements/slide/slide-grid-element.component';
import { WsiGridElementComponent } from './item-grid-elements/wsi/wsi-grid-element.component';
import { SlideSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/slide/slide-search-result-list-element.component';
import { ScanSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/scan/scan-search-result-list-element.component';
import { WsiSearchResultListElementComponent } from './item-list-elements/search-result-list-elements/wsi/wsi-search-result-list-element.component';
import { ScanSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/scan/scan-search-result-grid-element.component';
import { SlideSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/slide/slide-search-result-grid-element.component';
import { WsiSearchResultGridElementComponent } from './item-grid-elements/search-result-grid-elements/wsi/wsi-search-result-grid-element.component';
import { ScanItemMetadataListElementComponent } from './metadata-representations/scan/scan-item-metadata-list-element.component';
import { SlideItemMetadataListElementComponent } from './metadata-representations/slide/slide-item-metadata-list-element.component';
import { ScanSearchResultListSubmissionElementComponent } from './submission/item-list-elements/scan/scan-search-result-list-submission-element.component';
import { ScanInputSuggestionsComponent } from './submission/item-list-elements/scan/scan-suggestions/scan-input-suggestions.component';
import { NameVariantModalComponent } from './submission/name-variant-modal/name-variant-modal.component';
import { SlideInputSuggestionsComponent } from './submission/item-list-elements/slide/slide-suggestions/slide-input-suggestions.component';
import { SlideSearchResultListSubmissionElementComponent } from './submission/item-list-elements/slide/slide-search-result-list-submission-element.component';
import { ExternalSourceEntryListSubmissionElementComponent } from './submission/item-list-elements/external-source-entry/external-source-entry-list-submission-element.component';

const ENTRY_COMPONENTS = [
  SlideComponent,
  ScanComponent,
  WsiComponent,
  SlideListElementComponent,
  SlideItemMetadataListElementComponent,
  ScanListElementComponent,
  ScanItemMetadataListElementComponent,
  WsiListElementComponent,
  ScanGridElementComponent,
  SlideGridElementComponent,
  WsiGridElementComponent,
  SlideSearchResultListElementComponent,
  ScanSearchResultListElementComponent,
  WsiSearchResultListElementComponent,
  ScanSearchResultGridElementComponent,
  SlideSearchResultGridElementComponent,
  WsiSearchResultGridElementComponent,
  ScanSearchResultListSubmissionElementComponent,
  ScanInputSuggestionsComponent,
  NameVariantModalComponent,
  SlideSearchResultListSubmissionElementComponent,
  SlideInputSuggestionsComponent,
  ExternalSourceEntryListSubmissionElementComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TooltipModule.forRoot(),
    ItemPageModule
  ],
  declarations: [
    ...ENTRY_COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class PathologyEntitiesModule {

}
