// import { PostService } from "src/services/post.service";
// import { PostRepository } from "src/repository/post.repository";
// import { Post } from "src/models/post.model";
// import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
// import { Test } from "@nestjs/testing";

// const moduleMocker = new ModuleMocker(global);


// describe('unit tests for post service', () => {

//     let postService: PostService;

//     let postRepositoryMock = {
//         savePost: jest.fn()
//     }

//     const post = {
//         title: "nna",
//         body: "here",
//         id: 1
//       } as Post

//     beforeEach(async () => {
//         postService = new PostService(postRepositoryMock as any, postRepositoryMock as any, postRepositoryMock as any)
//         const moduleRef = await Test.createTestingModule({
//             providers: [PostService, PostRepository]
//           })
//           .useMocker((token) => {
//             if (token === PostService) {
//                 return { savePost: jest.fn() }
//             }
//           })
//           .compile();
//     })

//     test('save post',  async () => {

//         await postService.savePost(post, 1);
//         expect(postRepositoryMock.savePost).toBeCalled()

//     })

// })