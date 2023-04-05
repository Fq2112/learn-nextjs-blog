import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I'm <b>Fiqy</b>, a tech enthusiast from Surabaya, Indonesia.
          I'm a full stack developer since 2018, but now I'm a Software Engineer
          at <a href="https://trustmedis.com">Trustmedis</a> part of{" "}
          <a href="https://biznetnetworks.com">Biznet Networks</a> that focus on
          healthcare technology (HIS - Health Information System), such as
          Hospital, Clinic, Laboratory, etc. I've been struggling on this field
          for a year, doing some integration with radiology usg/xray, ecg, etc.
          using HL7 and MLLP to get the DICOM + WADO result from the device
          (RIS-PACS).
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
