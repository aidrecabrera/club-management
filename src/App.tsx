import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
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
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { supabaseClient } from "./utility";

import {
  MuiCreateInferencer,
  MuiEditInferencer,
  MuiListInferencer,
  MuiShowInferencer,
} from "@refinedev/inferencer/mui";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={notificationProvider}
                resources={[
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
                    create: "/members/create",
                    edit: "/members/edit/:id",
                    show: "/members/show/:id",
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
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2 Header={() => <Header sticky />}>
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="students" />}
                    />
                    <Route path="/students">
                      <Route index element={<MuiListInferencer />} />
                      <Route path="create" element={<MuiCreateInferencer />} />
                      <Route path="edit/:id" element={<MuiEditInferencer />} />
                      <Route path="show/:id" element={<MuiShowInferencer />} />
                    </Route>
                    <Route path="/instructors">
                      <Route index element={<MuiListInferencer />} />
                      <Route path="create" element={<MuiCreateInferencer />} />
                      <Route path="edit/:id" element={<MuiEditInferencer />} />
                      <Route path="show/:id" element={<MuiShowInferencer />} />
                    </Route>
                    <Route path="/clubs">
                      <Route index element={<MuiListInferencer />} />
                      <Route path="create" element={<MuiCreateInferencer />} />
                      <Route path="edit/:id" element={<MuiEditInferencer />} />
                      <Route path="show/:id" element={<MuiShowInferencer />} />
                    </Route>
                    <Route path="/members">
                      <Route index element={<MuiListInferencer />} />
                      <Route path="create" element={<MuiCreateInferencer />} />
                      <Route path="edit/:id" element={<MuiEditInferencer />} />
                      <Route path="show/:id" element={<MuiShowInferencer />} />
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
                          type="login"
                          formProps={{
                            defaultValues: {
                              email: "info@refine.dev",
                              password: "refine-supabase",
                            },
                          }}
                        />
                      }
                    />
                    <Route
                      path="/register"
                      element={<AuthPage type="register" />}
                    />
                    <Route
                      path="/forgot-password"
                      element={<AuthPage type="forgotPassword" />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
