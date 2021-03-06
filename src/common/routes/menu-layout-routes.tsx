import React, { FC } from "react";
import { RouteProps, Route } from "react-router";
import { MenuLayout } from "common/layout";

type MenuLayoutRouteProps = {} & RouteProps;

export const MenuLayoutRoute: FC<MenuLayoutRouteProps> = ({
  children,
  ...props
}) => {
  return (
    <Route {...props}>
      <MenuLayout>{children}</MenuLayout>
    </Route>
  );
};
