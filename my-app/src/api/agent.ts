import axios, { AxiosError, AxiosResponse as AxiosRealResponse, AxiosResponse } from "axios";
import { Course, UserCourse } from "./models/course";
import { LoginInfo, RegisterInfo, User } from "./models/user";
import { store } from "../stores/store";
import toast from "react-hot-toast";
import { router } from "../routes/Routes";
import { ContactToUs } from "./models/contactus";


axios.defaults.baseURL = "http://localhost:5000/api";

const sleep = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  })
};

const responseBody = <T>(response: AxiosRealResponse<T>) => response.data;

axios.interceptors.request.use(config => {
  const token = store.userStore.token;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

axios.interceptors.response.use(async response => {
  await sleep();
  return response;
}, (error: AxiosError) => {
  const { status } = error.response as AxiosResponse;
  switch (status) {
    case 400:
      toast.error('درخواست ناشناخته');
      break
    case 401:
      toast.error('کاربر ناشناخته')
      break;
    case 403:
      toast.error('غیر مجاز')
      break;
    case 404:
      router.navigate('/not-found');
      break;
    case 500:
      toast.error('خطای سرور');
      break;
  }
  return Promise.reject("rejected");
})

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Courses = {
  list: () => requests.get<Course[]>('/courses'),
  details: (id: string) => requests.get<Course>(`/courses/${id}`),
  add: (course: Course) => requests.post<Course>(`/courses`, course),
  addUserCourse: (id: string) => requests.post(`/courses/addUserCourse/${id}`, {}),
  getUserCourses: () => requests.get<UserCourse[]>(`/courses/userCourses`),
  removeUserCourse: (id: string) => requests.del<boolean>(`/courses/userCourses/remove/${id}`),
  search: (predicate: string) => requests.get<Course[]>(`/courses/search/${predicate}`),
}

const Account = {
  login: (loginInfo: LoginInfo) => requests.post<User>('account/login', loginInfo),
  register: (registerInfo: RegisterInfo) => requests.post<User>("account/register", registerInfo),
  current: () => requests.get<User>('account/'),
}

const ContactUs = {
  add: (contactUs: ContactToUs) => requests.post<ContactToUs>(`/contact`, contactUs),
  list: () => requests.get<ContactToUs[]>(`/contact`),
}

const agent = {
  Courses,
  Account,
  ContactUs,
};
export default agent;