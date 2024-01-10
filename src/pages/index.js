import React, { Suspense } from "react";
import { Redirect } from "@docusaurus/router";

import styles from "./styles.module.css";
import clsx from "clsx";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div class="container">
          <div id="spinner"></div>
        </div>
      }
    >
      <main className={clsx("hero hero--primary", styles.heroBanner)}>
        <Redirect to="/docs/guide/dashboad" />;
      </main>
    </Suspense>
  );
}
