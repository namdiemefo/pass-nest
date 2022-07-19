import { Post } from "src/models/post.model";
import { User } from "src/models/user.model";

export const posts: Post[] = [
    { 
        title: 'Patrick' ,
        id: 1,
        body: 'dear',
        user_id: new User(),
        categories: []
    },
  ];