import React from "react";
import { Redirect } from "@docusaurus/router";

import styles from "./styles.module.css";
import clsx from "clsx";

export default function Home() {
  return (
    <main className={clsx("hero hero--primary", styles.heroBanner)}>
      <Redirect to="/docs/guide/dashboad" />;
    </main>
  );
}
