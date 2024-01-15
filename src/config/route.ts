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
import User from "../pages/User.vue"
import IntegralDetail from "../pages/IntegralDetail.vue"
import Login from "../pages/Login.vue";

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
    { path: "/agendaDetail/:agendaId", component: AgendaDetail },
    { path: "/user", component: User },
    { path: "/integralDetail", component: IntegralDetail },

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
