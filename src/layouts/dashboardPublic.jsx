import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  PublicSidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routespublic from "@/routespublic";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function HomePublicMenu() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const renderRoutes = (routes) =>
    routes.map(({ layout, pages }) =>
      layout === "dashboardPublic"
        ? pages.map(({ path, element, children }) =>
            children
              ? children.map(({ path: childPath, element: childElement }) => (
                  <Route key={childPath} path={childPath} element={childElement} />
                ))
              : <Route key={path} path={path} element={element} />
          )
        : null
    );

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <PublicSidenav
        routes={routespublic}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {renderRoutes(routespublic)}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

HomePublicMenu.displayName = "/src/layout/dashboardPublic.jsx";

export default HomePublicMenu;
