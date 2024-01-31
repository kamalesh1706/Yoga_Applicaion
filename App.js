import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UserAuth from "./Pages/User/User";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
import UserDetails from "./Pages/UserDetails";
import LiveSessionPage from "./Components/Live/Livesession";
import HomePage from "./Components/Home/Home";
import ClassLibraryPage from "./Components/ClassLibrary/ClassLib";
import InstructionalVideosPage from "./Components/Instruction/Instruction";
import CustomizedProgramsPage from "./Components/Customize/Customize";
import ProgressTrackingPage from "./Components/Progress/Progress";
import ChallengesPage from "./Components/Challenge/Challenge";
import CommunityPage from "./Components/Community/Community";
import LiveSessions from "./Components/Livesession/Livesessn";
import LiveClassJoiningForm from "./Components/Livesession/Livesessn";
import CustomAppbar from "./Components/Appbar/CustomAppbar";
import VideoPlayer from "./Components/ClassLibrary/VideoPlayer";
import JoinChallenges from "./Components/Challenge/JoinChallenge";
import { Provider } from 'react-redux';
import Store from "./Components/Store";

function App() {
  const isLoggedIn = false;
  return (
    <Provider store={Store}>
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-auth" element={<UserAuth />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/Lab" element={<ClassLibraryPage/>}/>
          <Route path="/live" element={<LiveSessionPage/>}/>
          <Route path="/Instruction" element={<InstructionalVideosPage/>}/>
          <Route path="/Custom" element={<CustomizedProgramsPage/>}/>
          <Route path="/progress" element={<ProgressTrackingPage/>}/>
          <Route path="/goals" element={<ChallengesPage/>}/>
          <Route path="/community" element={<CommunityPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/dot1" element={<LiveClassJoiningForm/>}/>
          <Route path="/log" element={<UserAuth/>}/>
          <Route path="/log2" element={<UserAuth/>}/>
          <Route path="/login" element={<HomePage/>}/>
          <Route path="/vid" element={<VideoPlayer/>}/>
          <Route path="/ChallengeStart" element={<JoinChallenges/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      )}
    </Router>
    </Provider>
  );
}

export default App;
