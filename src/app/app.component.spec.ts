import { TestBed, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBarMock, SplashScreenMock } from 'ionic-mocks';

let fixture = null;
let app = null;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      declarations: [
        MyApp
      ],
      providers: [
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: StatusBar, useClass: StatusBarMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyApp);
    app = fixture.debugElement.componentInstance;

    console.log('app', app)

    app.nav = (<any>{});
    app.nav.setRoot = (<any>(() => true));
    spyOn(app.nav, 'setRoot');
  }));
  it('should create the app', async(() => {
    console.log(app)
    expect(app).toBeTruthy();
  }));

  it('initialises with a root page', () => {
    expect(app['rootPage']).not.toBe(null);
  });

});
