import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPassageiroComponent } from './cadastro-passageiro.component';

describe('CadastroPassageiroComponent', () => {
  let component: CadastroPassageiroComponent;
  let fixture: ComponentFixture<CadastroPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPassageiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
