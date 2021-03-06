import React from "react";

const MarketDashboard = React.lazy(() =>
  import("views/Market/Dashboard/Dashboard")
);
const MarketTicket = React.lazy(() => import("views/Market/Ticket/Ticket"));
const MarketChat = React.lazy(() => import("views/Market/Chat/Chat"));
const MarketCustomers = React.lazy(() =>
  import("views/Market/Customers/Customers")
);

const DashboardUsers = React.lazy(() =>
  import("./views/Dashboard/DashboardUsers")
);
const DashboardMarkets = React.lazy(() =>
  import("./views/Dashboard/DashboardMarkets")
);

const Users = React.lazy(() => import("./views/Users/Users"));
const UsersReports = React.lazy(() => import("./views/Users/UsersReports"));
const User = React.lazy(() => import("./views/Users/User"));
const Blog = React.lazy(() => import("./views/Announcement/Blog/Blog"));
const EditBlog = React.lazy(() => import("./views/Announcement/Blog/EditBlog"));
const CreateBlog = React.lazy(() =>
  import("./views/Announcement/Blog/CreateBlog")
);
const Event = React.lazy(() => import("./views/Announcement/Event/Event"));
const CreateEvent = React.lazy(() =>
  import("./views/Announcement/Event/CreateEvent")
);
const EditEvent = React.lazy(() =>
  import("./views/Announcement/Event/EditEvent")
);
const Notifications = React.lazy(() =>
  import("./views/Announcement/Notifications/Notifications")
);
const CreateNotification = React.lazy(() =>
  import("./views/Announcement/Notifications/CreateNotification")
);
const EditNotification = React.lazy(() =>
  import("./views/Announcement/Notifications/EditNotification")
);
const ManageSms = React.lazy(() =>
  import("./views/Announcement/ManageSms/ManageSms")
);
const CreateSms = React.lazy(() =>
  import("./views/Announcement/ManageSms/CreateSms")
);
const NewsLetter = React.lazy(() =>
  import("./views/Announcement/NewsLetter/NewsLetter")
);
const CreateNewsLetter = React.lazy(() =>
  import("./views/Announcement/NewsLetter/CreateNewsLetter")
);
const EditNewsLetter = React.lazy(() =>
  import("./views/Announcement/NewsLetter/EditNewsLetter")
);

const ApplicationSettings = React.lazy(() =>
  import("./views/Settings/Application/ApplicationSettings")
);
const MarketsSettings = React.lazy(() =>
  import("./views/Settings/Markets/MarketsSettings")
);
const GeneralSettings = React.lazy(() =>
  import("./views/Settings/GeneralSettings/GeneralSettings")
);
const CreateRole = React.lazy(() =>
  import("./views/Settings/GeneralSettings/CreateRole")
);
const EditRole = React.lazy(() =>
  import("./views/Settings/GeneralSettings/EditRole")
);
const CreateManager = React.lazy(() =>
  import("./views/Settings/GeneralSettings/CreateManager")
);

const SiteComments = React.lazy(() =>
  import("./views/Support/SiteComments/SiteComments")
);
const Reply = React.lazy(() => import("./views/Support/Reply"));
const Edit = React.lazy(() => import("./views/Support/Edit"));
const AppComments = React.lazy(() =>
  import("./views/Support/AppComments/AppComments")
);
const Tickets = React.lazy(() => import("./views/Support/Tickets/Tickets"));
const Chat = React.lazy(() => import("./views/Support/Chat/Chat"));

const MarketInvoices = React.lazy(() =>
  import("./views/Market/MarketInvoices/MarketInvoices")
);
const MarketArchive = React.lazy(() =>
  import("./views/Market/MarketsArchive/MarketsArchive")
);
const MarketProfile = React.lazy(() =>
  import("./views/Market/MarketsArchive/MarketsProfile")
);
const MarketReports = React.lazy(() =>
  import("./views/Market/MarketsReports/MarketsReports")
);

const ChatShowcase = React.lazy(() =>
  import("./views/ChatShowcase/ChatShowcase")
);

const HeadManager = React.lazy(() => import("views/HeadManager/HeadManager"));

const Profile = React.lazy(() => import("views/Profile/Profile"));

const Postman = React.lazy(() => import("views/Postman/Postman"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// here we make segments
const routes = [
  //start of my routes
  { path: "/", exact: true, name: "????????" },
  { path: "/dev", exact: true, name: "develop", component:Postman },
  {
    path: "/dashboard/dashboard_users",
    name: "??????????????",
    exact: true,
    component: DashboardUsers
  },
  {
    path: "/dashboard/dashboard_markets",
    name: "?????????????? ????",
    exact: true,
    component: DashboardMarkets
  },

  {
    path: "/users/users_information",
    exact: true,
    name: "??????????????",
    component: Users
  },
  {
    path: "/users/users_reports",
    exact: true,
    name: "?????????? ??????????????",
    component: UsersReports
  },
  {
    path: "/users/users_information/:slug",
    exact: true,
    name: "????????????",
    component: User
  },
  { path: "/announcement/blog", exact: true, name: "????????", component: Blog },
  {
    path: "/announcement/blog/edit_blog/:slug",
    exact: true,
    name: "????????????",
    component: EditBlog
  },
  {
    path: "/announcement/blog/create_blog",
    exact: true,
    name: "??????????",
    component: CreateBlog
  },
  {
    path: "/announcement/events",
    exact: true,
    name: "????????????",
    component: Event
  },
  {
    path: "/announcement/events/create_event",
    exact: true,
    name: "??????????",
    component: CreateEvent
  },
  {
    path: "/announcement/events/edit_event/:slug",
    exact: true,
    name: "????????????",
    component: EditEvent
  },
  {
    path: "/announcement/notifications",
    exact: true,
    name: "??????????",
    component: Notifications
  },
  {
    path: "/announcement/notifications/create_notif",
    exact: true,
    name: "??????????",
    component: CreateNotification
  },
  {
    path: "/announcement/notifications/edit_notif/:slug",
    exact: true,
    name: "????????????",
    component: EditNotification
  },
  { path: "/announcement/sms", exact: true, name: "sms", component: ManageSms },
  {
    path: "/announcement/sms/create_sms",
    exact: true,
    name: "??????????",
    component: CreateSms
  },
  {
    path: "/announcement/newsletter",
    exact: true,
    name: "??????????????",
    component: NewsLetter
  },
  {
    path: "/announcement/newsletter/create_news",
    exact: true,
    name: "??????????",
    component: CreateNewsLetter
  },
  {
    path: "/announcement/newsletter/edit_news/:slug",
    exact: true,
    name: "????????????",
    component: EditNewsLetter
  },

  { path: "/settings", exact: true, name: "?????????????? " },
  {
    path: "/settings/application",
    exact: true,
    name: "??????????????",
    component: ApplicationSettings
  },
  {
    path: "/settings/markets",
    exact: true,
    name: "?????????????? ????",
    component: MarketsSettings
  },
  {
    path: "/settings/general",
    exact: true,
    name: "??????",
    component: GeneralSettings
  },
  {
    path: "/settings/general/create_role",
    exact: true,
    name: "??????????",
    component: CreateRole
  },
  {
    path: "/settings/general/edit_role/:slug",
    exact: true,
    name: "????????????",
    component: EditRole
  },
  {
    path: "/settings/general/create_manager",
    exact: true,
    name: "??????????",
    component: CreateManager
  },
  {
    path: "/settings/general/edit_manager/:slug",
    exact: true,
    name: "????????????",
    component: Profile
  },

  {
    path: "/support/site_comments",
    exact: true,
    name: "?????????? ?????? ????????",
    component: SiteComments
  },
  {
    path: "/support/site_comments/reply/:slug",
    exact: true,
    name: "????????",
    component: Reply
  },
  {
    path: "/support/site_comments/edit/:slug",
    exact: true,
    name: "????????????",
    component: Edit
  },
  {
    path: "/support/app_comments",
    exact: true,
    name: "?????????? ?????? ????",
    component: AppComments
  },
  {
    path: "/support/app_comments/reply/:slug",
    exact: true,
    name: "????????",
    component: Reply
  },
  {
    path: "/support/app_comments/edit/:slug",
    exact: true,
    name: "????????????",
    component: Edit
  },

  { path: "/support/tickets", exact: true, name: "????????", component: Tickets },
  { path: "/support/chat", exact: true, name: "????", component: Chat },

  {
    path: "/market/invoices",
    exact: true,
    name: "???????????? ????",
    component: MarketInvoices
  },
  {
    path: "/market/archive",
    exact: true,
    name: "??????????",
    component: MarketArchive
  },
  {
    path: "/market/reports",
    exact: true,
    name: "?????????? ????",
    component: MarketReports
  },
  {
    path: "/market/edit/:slug",
    exact: true,
    name: "????????????",
    component: MarketProfile
  },

  {
    path: "/chat",
    exact: true,
    name: "chat showcase",
    component: ChatShowcase
  },

  // for market dashboard
  {
    path: "/market/dashboard",
    exact: true,
    name: "??????????????",
    component: MarketDashboard
  },
  //  we have edit profile path from before

  {
    path: "/market/ticket",
    exact: true,
    name: "????????",
    component: MarketTicket
  },
  { path: "/market/chat", exact: true, name: "???????? ????", component: MarketChat },
  {
    path: "/market/customers",
    exact: true,
    name: "?????????? ????",
    component: MarketCustomers
  },

  // end of market dashboard

  { path: "/head", exact: true, name: "???????????? head", component: HeadManager }
];

export default routes;
