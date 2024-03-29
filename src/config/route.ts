import Index from "../pages/Index.vue";
import ConferenceAgenda from "../pages/ConferenceAgenda.vue";
import AboutConference from "../pages/AboutConference.vue";
import AttendanceGuide from "../pages/AttendanceGuide.vue";
import ExhibitorStyle from "../pages/ExhibitorStyle.vue";
import ExpertCommittee from "../pages/ExpertCommittee.vue";
import News from "../pages/News.vue";
import Pictures from "../pages/Pictures.vue";
import MediaVideo from "../pages/MediaVideo.vue";
import Results from "../pages/Results.vue";
import WonderfulActivity from "../pages/WonderfulActivity.vue";
import AgendaDetail from "../pages/AgendaDetail.vue"
import NewsDetail from "../pages/NewsDetail.vue"
import PostDetail from "../pages/PostDetail.vue"
import User from "../pages/User.vue"
import Integral from "../pages/Integral.vue"
import Login from "../pages/Login.vue";
import CommunityCenter from "../pages/CommunityCenter.vue";
import IntegralDetails from "../pages/integral/IntegralDetails.vue"
import IntegralGifts from "../pages/integral/IntegralGifts.vue"
import IntegralLottery from "../pages/integral/IntegralLottery.vue"
import IntegralRules from "../pages/integral/IntegralRules.vue"
import FunGames from "../pages/FunGames.vue"
// import WordGame from "../pages/WordGame.vue"
import ExhibitDetail from "../pages/ExhibitDetail.vue"
import ActivityDetail from '../pages/ActivityDetail.vue'
import ActivityParticipation from '../pages/ActivityParticipation.vue'
import Ctf from '../pages/ctf/Ctf.vue'
import Robert from '../pages/ctf/Robert.vue'
import FirstGame from '../pages/ctf/FirstGame.vue'
import SecondGame from '../pages/ctf/SecondGame.vue'
import ThirdGame from '../pages/ctf/ThirdGame.vue'


const routes = [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/conferenceAgenda", component: ConferenceAgenda },
    { path: "/aboutConference", component: AboutConference },
    { path: "/attendanceGuide", component: AttendanceGuide },
    { path: "/exhibitorStyle", component: ExhibitorStyle },
    { path: "/exhibitDetail", component: ExhibitDetail },
    { path: "/expertCommittee", component: ExpertCommittee },
    { path: "/news", component: News },
    { path: "/pictures", component: Pictures },
    { path: "/mediaVideo", component: MediaVideo },
    { path: "/results", component: Results },
    { path: "/wonderfulActivity", component: WonderfulActivity },
    { path: "/activityDetail/:itemId", component: ActivityDetail },
    { path: "/activityParticipation/:itemId", component: ActivityParticipation },

    { path: "/ctf", component: Ctf },
    { path: "/user", component: User },
    {
        path: "/integral", component: Integral,
        children: [
            {
                path: "integralDetails",
                component: IntegralDetails,
            }, {
                path: "integralGifts",
                component: IntegralGifts,
            }, {
                path: "integralLottery",
                component: IntegralLottery,
            }, {
                path: "integralRules",
                component: IntegralRules,
            },
        ]
    },
    { path: "/communityCenter", component: CommunityCenter },
    { path: "/agendaDetail/:agendaId", component: AgendaDetail },
    { path: "/newsDetail/:newsId", component: NewsDetail },
    { path: "/postDetail/:id", component: PostDetail },
    { path: "/funGames", component: FunGames },
    // { path: "/wordGame", component: WordGame },

    { path: "/robert", component: Robert },
    { path: "/firstgame", component: FirstGame },
    { path: "/secondgame", component: SecondGame },
    { path: "/thirdgame", component: ThirdGame },

];

export default routes;
