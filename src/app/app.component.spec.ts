//Test cases for app component
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { //It uses the describe function provided by Jasmine to group the test cases related to the AppComponent.
  beforeEach(() => TestBed.configureTestingModule({ //Configure the test module and you can specify various options, such as imports, declarations, providers, etc., that are necessary for the component being tested
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); //This line creates an instance of the AppComponent
    const app = fixture.componentInstance; //This line retrieves the component instance from the fixture
    expect(app).toBeTruthy();  //This checks whether the component instance exists or not.
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('app app is running!');
  });
});
