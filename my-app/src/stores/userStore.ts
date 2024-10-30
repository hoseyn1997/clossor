import { makeAutoObservable, reaction, runInAction } from "mobx";
import { LoginInfo, RegisterInfo, User } from "../api/models/user";
import agent from "../api/agent";
import { router } from "../routes/Routes";
import toast from "react-hot-toast";


export default class UserStore {
  user: User | null = null;
  token: string | null = localStorage.getItem('jwt');
  authorizing = false;
  loadingUser = false;


  constructor() {
    makeAutoObservable(this);
    reaction(() => this.token, token => {
      if (token) {
        localStorage.setItem('jwt', token);
      } else {
        localStorage.removeItem('jwt');
      }
    })
  }

  get isLogedIn() {
    return !!this.user;
  }

  setToken = async (token: string | null) => {
    this.token = token;
  }

  login = async (loginInfo: LoginInfo) => {
    this.authorizing = true;
    try {
      const user = await agent.Account.login(loginInfo);
      localStorage.setItem("jwt", user.token);
      runInAction(() => {
        this.user = user;
        this.authorizing = false;
      })
      return this.user;
    } catch (error) {
      console.log('error authorizing...: ', error);
      runInAction(() => this.authorizing = false)
    }
  }

  logOut = async () => {
    this.setToken(null);
    this.user = null;
    router.navigate('/')
    toast.success("You have Just Logged Out...")
  }

  register = async (registerInfo: RegisterInfo) => {
    this.authorizing = true;
    try {
      const user = await agent.Account.register(registerInfo);
      localStorage.setItem("jwt", user.token);
      runInAction(() => {
        this.user = user;
        this.authorizing = false;
      })
    } catch (error) {
      console.log('error authorizing...: ', error);
      runInAction(() => this.authorizing = false)
    }
  }

  getUser = async () => {
    this.loadingUser = true;
    try {
      const user = await agent.Account.current();
      runInAction(() => { this.user = user; this.loadingUser = false });
    } catch (error) {
      console.log(error);
      runInAction(() => this.loadingUser = false)
    }
  }

}