import {FC} from 'react';
import styles from "./HomePage.module.css";

export type HomeFeedPageTabs = "products";

export interface HomeFeedPageProps {}

export const HomeFeedPage: FC<HomeFeedPageProps> = () => {

  return (
    <>
      <main className={styles["home-feed"]}>
        <div className={styles["home-feed__header"]}>
            <h2 className={styles["home-feed__header-title"]}>
            </h2>
        </div>

        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quos possimus, esse minus corporis ad voluptatibus animi quaerat necessitatibus consequuntur quis quas! Nobis placeat corporis neque in excepturi incidunt dolor.
        </div>
      </main>
    </>
  );
};

