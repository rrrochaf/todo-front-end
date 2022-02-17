import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoDataService]
    });
    service = TestBed.inject(TodoDataService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
