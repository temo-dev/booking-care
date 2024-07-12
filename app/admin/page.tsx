/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { useStore } from "../../store";
import { AppShell } from "@mantine/core";
import Dashboard from "../../components/Dashboard";
import Calendar from "../../components/Calendar";
import Account from "../../components/Account";

interface RenderScreenProps {
  screen: string;
}

function RenderScreen(props: RenderScreenProps) {
  switch (props.screen) {
    case "dashboard":
      return <Dashboard />;
    case "calendar":
      return <Calendar />;
    case "account":
      return <Account />;
    default:
      return <div>Welcome</div>;
  }
}

export default function AdminPage() {
  const { screen } = useStore();
  const [isScreen, SetIsScreen] = useState("a");
  useEffect(() => {
    if (screen !== isScreen) {
      SetIsScreen(screen);
    }
  }, [screen]);

  return (
    <>
      <AppShell padding="md">
        <AppShell.Navbar p="md">
          <NavBar />
        </AppShell.Navbar>
        <AppShell.Main>
          <div style={{ marginLeft: "120px" }}>
            <RenderScreen screen={isScreen} />
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
