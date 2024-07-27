import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";
import { auth } from "./lib/firebase"; 
import { useChatStore } from "./lib/chatStore";

const App = () => {

  // const user = false;
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const {chatId} = useChatStore();

  useEffect(() =>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      // console.log(user.uid)
      fetchUserInfo(user?.uid);
      // fetchUserInfo(user ? user.uid : null);
    });

    return () =>{
      unSub();
    };
  }, [fetchUserInfo]);

  //console.log(currentUser);

  if (isLoading) return <div className="Loading">Loading...</div>

  return (
    <div className='container'>

      {currentUser ? (
        <>
        <List/>
        {chatId && <Chat/>}
        {chatId && <Detail/>}
      </>
      ) : (
        <Login/>
      )}

      <Notification/>
    </div>
  )
}

export default App