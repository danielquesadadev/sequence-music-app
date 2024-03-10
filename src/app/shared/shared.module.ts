import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Error404Page } from './error404-page/error404-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { RouterModule } from '@angular/router';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    Error404Page,
    SidebarComponent,
    LayoutPageComponent,
    FloatingButtonComponent,
    SafeHtmlPipe,
    LoaderComponent,
    ModalComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, LayoutPageComponent, SafeHtmlPipe, LoaderComponent, ModalComponent],
})
export class SharedModule {}
