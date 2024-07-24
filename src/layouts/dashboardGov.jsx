import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  GovSidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routesGov from "@/routesGov";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function DashboardGov() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const renderRoutes = (routes) =>
    routes.map(({ layout, pages }) =>
      layout === "dashboardGov"
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
      <GovSidenav
        routes={routesGov}
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
          {renderRoutes(routesGov)}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

DashboardGov.displayName = "/src/layout/dashboardGov.jsx";

export default DashboardGov;
