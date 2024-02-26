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
import User from "../pages/User.vue"
import Integral from "../pages/Integral.vue"
import Login from "../pages/Login.vue";
import CommunityCenter from "../pages/CommunityCenter.vue";
import IntegralDetails from "../pages/integral/IntegralDetails.vue"
import IntegralGifts from "../pages/integral/IntegralGifts.vue"
import IntegralLottery from "../pages/integral/IntegralLottery.vue"
import IntegralRules from "../pages/integral/IntegralRules.vue"
import logindemo from "../pages/logindemo.vue"


const routes = [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/conferenceAgenda", component: ConferenceAgenda },
    { path: "/aboutConference", component: AboutConference },
    { path: "/attendanceGuide", component: AttendanceGuide },
    { path: "/exhibitorStyle", component: ExhibitorStyle },
    { path: "/expertCommittee", component: ExpertCommittee },
    { path: "/news", component: News },
    { path: "/pictures", component: Pictures },
    { path: "/mediaVideo", component: MediaVideo },
    { path: "/results", component: Results },
    { path: "/wonderfulActivity", component: WonderfulActivity },
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
    { path: "/logindemo", component: logindemo },


    // {
    //     path: "/courseId/:courseId",
    //     component: CourseDetails,
    //     children: [
    //         {
    //             path: "notice",
    //             component: Notice,
    //         },
    //     ],
    // },

];

export default routes;
