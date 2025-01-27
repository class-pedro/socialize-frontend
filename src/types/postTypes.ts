export interface Author {
  id: string;
  name: string;
  username: string;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  postId: string;
  authorId: string;
  author: {
    name: string,
  }
}

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: Author;
  comments: Comment[];
}

export interface NewPost {
  title: string;
  content: string;
  authorId: string;
}
