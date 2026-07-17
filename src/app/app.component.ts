import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [HeaderComponent, ProfileComponent, MainContentComponent, NavComponent, FooterComponent],
})
export class AppComponent implements OnInit {

  title = 'iportfolio';
  isDarkMode = true;
  currentLang = 'es';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    translate.addLangs(['es', 'en']);
    translate.setFallbackLang('es');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isDarkMode = false;
        document.body.setAttribute('data-theme', 'light');
      }

      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.currentLang = savedLang;
        this.translate.use(this.currentLang);
      } else {
        const browserLang = this.translate.getBrowserLang();
        this.currentLang = browserLang?.match(/es|en/) ? browserLang : 'es';
        this.translate.use(this.currentLang);
      }
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.currentLang);
    }
  }
}
