import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  AuthPage,
  ErrorComponent,
  RefineSnackbarProvider,
  useNotificationProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import authProvider from "./authProvider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { supabaseClient } from "./utility";

import { ThemedHeaderV2 } from "./components/layout/header";
import { ThemedLayoutV2 } from "./components/layout/index";
import { ThemedSiderV2 } from "./components/layout/sider";
import { ThemedTitleV2 } from "./components/layout/title";
import { ClubCreate, ClubEdit, ClubList, ClubShow } from "./pages/clubs";
import {
  InstructorCreate,
  InstructorEdit,
  InstructorList,
  InstructorShow,
} from "./pages/instructors";
import {
  MemberCreate,
  MemberEdit,
  MemberList,
  MemberShow,
} from "./pages/members";
import {
  StudentCreate,
  StudentEdit,
  StudentList,
  StudentShow,
} from "./pages/students";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles
            styles={{
              html: { WebkitFontSmoothing: "auto" },
            }}
          />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider(supabaseClient)}
              liveProvider={liveProvider(supabaseClient)}
              authProvider={authProvider}
              routerProvider={routerBindings}
              notificationProvider={useNotificationProvider}
              resources={[
                {
                  name: "clubs",
                  list: "/clubs",
                  create: "/clubs/create",
                  edit: "/clubs/edit/:id",
                  show: "/clubs/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "members",
                  list: "/members",
                  create: "/members/create/:clubid",
                  edit: "/members/edit/:id",
                  show: "/members/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "students",
                  list: "/students",
                  create: "/students/create",
                  edit: "/students/edit/:id",
                  show: "/students/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "instructors",
                  list: "/instructors",
                  create: "/instructors/create",
                  edit: "/instructors/edit/:id",
                  show: "/instructors/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "S5sYuY-z9XTAF-2ZdNkS",
                liveMode: "auto",
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2
                        Header={ThemedHeaderV2}
                        Sider={ThemedSiderV2}
                        Title={ThemedTitleV2}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="students" />}
                  />
                  <Route path="/clubs">
                    <Route index element={<ClubList />} />
                    <Route path="create" element={<ClubCreate />} />
                    <Route path="edit/:id" element={<ClubEdit />} />
                    <Route path="show/:id" element={<ClubShow />} />
                  </Route>
                  <Route path="/members">
                    <Route index element={<MemberList />} />
                    <Route path="create/:clubid" element={<MemberCreate />} />
                    <Route path="edit/:id" element={<MemberEdit />} />
                    <Route path="show/:id" element={<MemberShow />} />
                  </Route>
                  <Route path="/students">
                    <Route index element={<StudentList />} />
                    <Route path="create" element={<StudentCreate />} />
                    <Route path="edit/:id" element={<StudentEdit />} />
                    <Route path="show/:id" element={<StudentShow />} />
                  </Route>
                  <Route path="/instructors">
                    <Route index element={<InstructorList />} />
                    <Route path="create" element={<InstructorCreate />} />
                    <Route path="edit/:id" element={<InstructorEdit />} />
                    <Route path="show/:id" element={<InstructorShow />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-outer"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route
                    path="/login"
                    element={
                      <AuthPage
                        title={
                          <div className="flex flex-col items-center justify-center gap-4 text-5xl">
                            <img
                              src="https://student.umindanao.edu.ph/images/um-seal.png"
                              alt="Clubsphere"
                              className="w-24 h-24"
                            />
                            <h1>Clubsphere</h1>
                          </div>
                        }
                        type="login"
                        formProps={{
                          defaultValues: {
                            email: "account@umindanao.edu.ph",
                            password: "thisisasecretpassword",
                          },
                        }}
                      />
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <AuthPage
                        title={
                          <div className="flex flex-col items-center justify-center gap-4 text-5xl">
                            <img
                              src="https://student.umindanao.edu.ph/images/um-seal.png"
                              alt="Clubsphere"
                              className="w-24 h-24"
                            />
                            <h1>Clubsphere</h1>
                          </div>
                        }
                        type="register"
                      />
                    }
                  />
                  <Route
                    path="/forgot-password"
                    element={
                      <AuthPage
                        type="forgotPassword"
                        title={
                          <div className="flex flex-col items-center justify-center gap-4 text-5xl">
                            <img
                              src="https://student.umindanao.edu.ph/images/um-seal.png"
                              alt="Clubsphere"
                              className="w-24 h-24"
                            />
                            <h1>Clubsphere</h1>
                          </div>
                        }
                      />
                    }
                  />
                  <Route
                    path="/update-password"
                    element={
                      <AuthPage
                        type="updatePassword"
                        title={
                          <div className="flex flex-col items-center justify-center gap-4 text-5xl">
                            <img
                              src="https://student.umindanao.edu.ph/images/um-seal.png"
                              alt="Clubsphere"
                              className="w-24 h-24"
                            />
                            <h1>Clubsphere</h1>
                          </div>
                        }
                      />
                    }
                  />
                </Route>
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
