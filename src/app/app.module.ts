import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteRoutingModule } from './route/route-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
import { GridselectionComponent } from './gridselection/gridselection.component';
import { DashboardeditorComponent,gridselectionDialog,SnackBarComponent,ProgressSpinner,DialogCommon } from './dashboardeditor/dashboardeditor.component';
import { CommonDirective } from './common.directive';
import { BackendService } from './backend.service';
import { DatastoreService } from './datastore.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  //MatCoreModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import 'hammerjs';
import {DndModule} from 'ng2-dnd';
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
   // MatCoreModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})

export class DBMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    DashboardlistComponent,
    GridselectionComponent,
    DashboardeditorComponent,
    CommonDirective,
    PagenotfoundComponent,
    gridselectionDialog,
    SnackBarComponent,
    ProgressSpinner,
    DialogCommon      
  ],
   entryComponents: [gridselectionDialog,SnackBarComponent,ProgressSpinner,DialogCommon],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
   // MaterialModule,
    DBMaterialModule,
    DndModule.forRoot()
  ],
  providers: [BackendService,DatastoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
