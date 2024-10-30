import { makeAutoObservable, runInAction } from "mobx";
import { Course, UserCourse } from "../api/models/course";
import agent from "../api/agent";


export class CourseStore {
  courses: Course[] = [];
  selectedCourse: Course | undefined = undefined;
  loadingCourses = false;
  loadingCourse = false;
  adding = false;
  addingUserCourse = false;

  userCourses: UserCourse[] = [];
  gettingUserCourses = false;
  removing = false;

  searching = false;
  searchResult: Course[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get top6courses() {
    return this.courses.slice(0, 6);
  }

  getCourses = async () => {
    this.loadingCourses = true;
    try {
      const courses = await agent.Courses.list();
      runInAction(() => {
        this.courses = courses;
        this.loadingCourses = false
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.loadingCourses = false)
    }
  }

  getCourse = async (courseId: string) => {
    this.loadingCourse = true;
    try {
      const course = await agent.Courses.details(courseId);
      runInAction(() => {
        this.selectedCourse = course;
        this.loadingCourse = false
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.loadingCourse = false)
    }
  }

  addCourse = async (course: Course) => {
    this.adding = true;
    try {
      const addedCourse = await agent.Courses.add(course);
      runInAction(() => {
        this.selectedCourse = addedCourse;
        this.adding = false
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.adding = false)
    }
  }

  addUserCourse = async (courseId: string) => {
    this.addingUserCourse = true;
    try {
      await agent.Courses.addUserCourse(courseId);
      runInAction(() => {
        this.addingUserCourse = false;
        if (this.selectedCourse)
          this.selectedCourse.isAdded = true;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.addingUserCourse = false)
    }
  }

  getUserCourses = async () => {
    this.gettingUserCourses = true;
    try {
      var userCourses = await agent.Courses.getUserCourses();
      runInAction(() => {
        this.userCourses = userCourses;
        this.gettingUserCourses = false;
      })
      return this.userCourses;
    } catch (error) {
      console.log(error);
      runInAction(() => this.gettingUserCourses = false)
    }
  }

  removeUserCourses = async (courseId: string) => {
    this.removing = true;
    try {
      await agent.Courses.removeUserCourse(courseId);
      runInAction(() => {
        this.userCourses = this.userCourses.filter(x => x.courseId !== courseId);
        this.removing = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.removing = false)
    }
  }

  searchCourse = async (predicate: string) => {
    this.searching = true;
    try {
      const result = await agent.Courses.search(predicate);
      runInAction(() => {
        this.searchResult = result;
        this.searching = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => this.searching = false)
    }
  }

  clearSearchResult = () => {
    this.searchResult = [];
  }

  clearSelectedCourse = () => {
    this.selectedCourse = undefined;
  }
}