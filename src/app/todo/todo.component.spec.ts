import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { params: {} } });
    const todoDataServiceStub = () => ({
      retrieveTodo: (string, id) => ({ subscribe: f => f({}) }),
      updateTodo: (string, id, todo) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TodoComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: TodoDataService, useFactory: todoDataServiceStub }
      ]
    });
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const todoDataServiceStub: TodoDataService = fixture.debugElement.injector.get(
        TodoDataService
      );
      spyOn(todoDataServiceStub, 'retrieveTodo').and.callThrough();
      component.ngOnInit();
      expect(todoDataServiceStub.retrieveTodo).toHaveBeenCalled();
    });
  });

  describe('saveTodo', () => {
    it('makes expected calls', () => {
      const todoDataServiceStub: TodoDataService = fixture.debugElement.injector.get(
        TodoDataService
      );
      spyOn(todoDataServiceStub, 'updateTodo').and.callThrough();
      component.saveTodo();
      expect(todoDataServiceStub.updateTodo).toHaveBeenCalled();
    });
  });
});
