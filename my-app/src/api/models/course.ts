import { User } from "./user";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  teacherName: string;
  creationDate: Date;
  lastModified: Date;
  isAdded?: boolean;
}


export interface UserCourse {
  user: User
  appUserId: string
  course: Course
  courseId: string
}