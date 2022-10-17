import React, { FC } from 'react';
import Image from 'next/image'

import './styles/Experience.css';
import { RequiredChildren, Job } from 'types';

import editLogo from '../images/icons/edit-logo.svg';

export interface ExperienceCardProps extends RequiredChildren {
  job: Job
}

const ExperienceCard: FC<ExperienceCardProps> = ({job, children}) => {
  return (
    <article className="Experience__card">
      <i className="Experience__card-icon">
        <Image src={editLogo} alt="pencil" />
      </i>
      <div className="Experience__card-content">
        <h2 className="Experience__card-content-title">
          {job.title}{' '}
          <span className="Experience__card-content-title-date">{job.dateFormated}</span>
        </h2>
        <p className="Experience__card-content-description">
          <strong>
            <a
              href={job.company.url}
              className="black-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {job.company.name}
            </a>
          </strong>
          &nbsp;
          {children}
        </p>
      </div>
    </article>
  );
};

const Experience: FC = () => {

  const jobs = [
        {
          title: 'Front-End Developer',
          dateFormated: '2017-2019',
          company: {
            name: 'Influenster',
            url: 'https://Influenster.com',
          },
          contentHtml: () => (
            <>
              based on{' '}
              <span role="img" aria-label="us">
                🇺🇸
              </span>{' '}
              New York, is community of more than 4 million users and over 11 million reviews, based
              on product discovery and reviews.
              <span className="Experience__card-content-description-bold">
                {'{'} React, Angular, Sass and JQuery, Django, Postgress, Datadog, Celery, Jenkins
                {'}'}
              </span>
            </>
          ),
        },
        {
          title: 'Full Stack Developer',
          dateFormated: '2015-2017',
          company: {
            name: 'Sophilabs',
            url: 'https://Sophilabs.com',
          },
          contentHtml: () => (
            <>
              a software design and development agency that helps companies build products by
              delivering top quality software through agile and perfectionist teams.
              <span className="Experience__card-content-description-bold">
                {'{'} Angular, Ember js, jquery, sass, Django, postgress, mongodb
                {'}'}
              </span>
            </>
          ),
        },
        {
          title: 'Java Web Developer',
          dateFormated: '2014-2015',
          company: {
            name: 'Manentia software / Technisys',
            url: 'https://Technisys.com',
          },
          contentHtml: () => (
            <>
              a software design and development agency that helps companies build products by
              delivering top quality software through agile and perfectionist teams.
              <span className="Experience__card-content-description-bold">
                {'{'} Java, Sql, Oracle, HTML, CSS, Jquery
                {'}'}
              </span>
            </>
          ),
        },
        {
          title: 'PHP Developer',
          dateFormated: '2013-2015',
          company: {
            name: 'Trovit',
            url: 'https://Trovit.com',
          },
          contentHtml: () => (
            <>
              <span role="img" aria-label="esp">
                🇪🇸
              </span>{' '}
              is a vertical search engine for classifieds. On March 2012, it became the leading
              search engine for classified ads in Europe and Latin America. On 2016, Trovit reached
              51 countries worldwide, being available in 19 languages and receiving more than 90
              million unique visitors every month.
              <span className="Experience__card-content-description-bold">
                {'{'} PHP
                {'}'}
              </span>
            </>
          ),
        },
        {
          title: 'Systems Analyst',
          dateFormated: '2013-2014',
          company: {
            name: 'Cziber',
            url: 'https://cziber.com.uy',
          },
          contentHtml: () => (
            <>
              ERP NODUM Analysis and Consulting Systems migration, implementation of new
              technologies, own and third party solutions.
              <span className="Experience__card-content-description-bold">
                {'{'} JAVA, C#
                {'}'}
              </span>
            </>
          ),
        },
        {
          title: 'Team Leader Analyst',
          dateFormated: '2011-2013',
          company: {
            name: 'NUMINA',
            url: 'http://www.numina.net.uy/',
          },
          contentHtml: () => (
            <>
              Lead team of junior developers, analysis, consulting, implementation and develop
              modules for Kore ERP.
              <span className="Experience__card-content-description-bold">
                {'{'} CLARION, MySQL, SQL, HTML, CSS
                {'}'}
              </span>
            </>
          ),
        },
      ];

    return (
      <section className="Experience" id="Experience">
        <span className="section__name">Experience</span>
        <h2 className="section__title">WORK EXPERIENCE</h2>

        <div className="Experience__container">
          {jobs.map((job) => (
            <ExperienceCard job={job} key={job.title}>
              {job.contentHtml()}
            </ExperienceCard>
          ))}
        </div>
      </section>
    );
}

export {Experience};
