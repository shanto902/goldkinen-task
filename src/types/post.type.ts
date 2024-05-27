import { TComment } from "./comment.type";
import { TUser } from "./user.type";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: TUser;
  comments: TComment[];
};
