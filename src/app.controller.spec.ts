import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { PostService } from './services/post.service';
import { PostRepository } from './repository/post.repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

describe('unit tests for post service', () => {

  let postService: PostService;

  let postRepositoryMock = {
      savePost: jest.fn()
  }

  const post = {
      title: "nna",
      body: "here",
      id: 1
    }

  beforeEach(async () => {
      postService = new PostService(postRepositoryMock as any, postRepositoryMock as any, postRepositoryMock as any)
      const moduleRef = await Test.createTestingModule({
          imports: [PostRepository],
          providers: [PostService]
        })
        .useMocker((token) => {
          if (token === PostService) {
              return { savePost: jest.fn() }
          }
        })
        .compile();

        postService = moduleRef.get(PostService);
  })

  test('save post',  async () => {

      await postService.savePost(post, 1);
      expect(postRepositoryMock.savePost).toBeCalled()

  })

})
