import { EMPTY, of, throwError } from 'rxjs';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService(null);
    component = new PostsComponent(service);
  });
  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4];
    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();
    expect(component.posts.length).toBe(posts.length);
  });
  it('should add new post', () => {
    const post = { title: 'Test Title' };
    const spy = spyOn(service, 'create').and.returnValue(of(post));
    component.add(post.title);
    expect(spy).toHaveBeenCalled();
    expect(component.posts.includes(post)).toBeTruthy();
  });
  it('should set message to error message', () => {
    const error = 'Error message';
    spyOn(service, 'create').and.returnValue(throwError(error));
    component.add('Post title');
    expect(component.message).toBe(error);
  });
  it('should remove post if user confirms', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(true);
    component.delete(10);
    expect(spy).toHaveBeenCalledWith(10);
  });
  it('should NOT remove post if user does not confirm', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(false);
    component.delete(10);
    expect(spy).not.toHaveBeenCalledWith(10);
  });
});
