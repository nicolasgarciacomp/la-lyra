import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { DiscografiaComponent } from './components/discografia/discografia.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SlideshowComponent,
    NoticiasComponent,
    BiografiaComponent,
    DiscografiaComponent,
    FotosComponent,
    VideosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
