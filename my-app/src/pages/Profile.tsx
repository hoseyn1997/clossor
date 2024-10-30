import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import { router } from "../routes/Routes";
import AdminDash from "../components/pages/Profile/AdminDash";
import UserDash from "../components/pages/Profile/UserDash";

export default observer(function Profile() {
  const {
    userStore: { user, isLogedIn },
  } = useStore();

  if (!isLogedIn) router.navigate("/");
  return user?.username === "admin" ? <AdminDash /> : <UserDash />;
});
