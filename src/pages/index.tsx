import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://kinemagicstudio.booth.pm/items/7434629">
            ダウンロード（Windows版）
          </Link>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://kinemagicstudio.booth.pm/items/7437133">
            ダウンロード（Mac版）
          </Link>
        </div>
      </div>
    </header>
  );
}

function YoutubeEmbed({embedId}: {embedId: string}) {
  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      // description="Description will go into a meta tag in <head />"
      >
      <HomepageHeader />
      <main>
        <section className={styles.videoSection}>
          <div className="container">
            <YoutubeEmbed embedId="sKyuwVir27k" />
          </div>
        </section>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
