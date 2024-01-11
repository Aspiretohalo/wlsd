import Index from "../pages/Index.vue";
import ConferenceAgenda from "../pages/ConferenceAgenda.vue";
import AboutConference from "../pages/AboutConference.vue";
import AttendanceGuide from "../pages/AttendanceGuide.vue";
import ExhibitorStyle from "../pages/ExhibitorStyle.vue";
import ExpertCommittee from "../pages/ExpertCommittee.vue";
import News from "../pages/News.vue";
import Results from "../pages/Results.vue";
import WonderfulActivity from "../pages/WonderfulActivity.vue";
import AgendaDetail from "../pages/AgendaDetail.vue"

const routes = [
    { path: "/", component: Index },
    { path: "/conferenceAgenda", component: ConferenceAgenda },
    { path: "/aboutConference", component: AboutConference },
    { path: "/attendanceGuide", component: AttendanceGuide },
    { path: "/exhibitorStyle", component: ExhibitorStyle },
    { path: "/expertCommittee", component: ExpertCommittee },
    { path: "/news", component: News },
    { path: "/results", component: Results },
    { path: "/wonderfulActivity", component: WonderfulActivity },
    { path: "/agendaDetail/:agendaId", component: AgendaDetail },
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
