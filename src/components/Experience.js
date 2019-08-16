import React, { Component } from 'react';

import './styles/Experience.css';
import editLogo from '../images/icons/edit-logo.svg';

class ExperienceCard extends React.Component {
  render() {
    return (
      <article className="Experience__card">
        <i className="Experience__card-icon">
            <img src={editLogo} alt="pencil" />
        </i>
        <div className="Experience__card-content">
          <h2 className="Experience__card-content-title">
            {this.props.data.title} <span className="Experience__card-content-title-date">{this.props.data.dates}</span>
          </h2>
          <p className="Experience__card-content-description">
            <strong>
              <a href={this.props.data.company.url} className="black-link" target="_blank" rel="noopener noreferrer">
                {this.props.data.company.name}
              </a>
            </strong>
            &nbsp;{this.props.children}
          </p>
        </div>
      </article>
    )
  }
};


class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        {
          title: 'Front-End Developer',
          dates: '2017-2019',
          company: {
            name: 'Influenster',
            url: 'https://www.Influenster.com'
          },
          contentHtml: () => {
            return (
              <React.Fragment>
                  based on <span role='img' aria-label='us'>🇺🇸</span> New York, is community of more than 4 million users and
                  over 11 million reviews, based on product discovery and reviews.
                  <span className="Experience__card-content-description-bold">
                      {'{'} React, Angular, Sass and JQuery, Django, Postgress, Datadog, Celery, Jenkins {'}'}
                  </span>
              </React.Fragment>
            )
          }
        },
        {
          title: 'Full Stack Developer',
          dates: '2015-2017',
          company: {
            name: 'Sophilabs',
            url: 'https://www.Sophilabs.com'
          },
          contentHtml: () => {
            return (
              <React.Fragment>
                a software design and development agency that helps companies build products by delivering
                top quality software through agile and perfectionist teams.
                <span className="Experience__card-content-description-bold">
                    {'{'} Angular, Ember js, jquery, sass, Django, postgress, mongodb {'}'}
                </span>
              </React.Fragment>
            )
          }
        },
        {
          title: 'Java Web Developer',
          dates: '2014-2015',
          company: {
            name: 'Manentia software / Technisys',
            url: 'https://www.Technisys.com'
          },
          contentHtml: () => {
            return (
              <React.Fragment>
                  a software design and development agency that helps companies build products by delivering top quality software through agile and perfectionist teams.
                  <span className="Experience__card-content-description-bold">
                      {'{'} Java, Sql, Oracle, HTML, CSS, Jquery {'}'}
                  </span>
              </React.Fragment>
            )
          }
        },
        {
          title: 'PHP Developer',
          dates: '2013-2015',
          company: {
            name: 'Trovit',
            url: 'https://www.Trovit.com'
          },
          contentHtml: () => {
            return (
              <React.Fragment>
                <span role='img' aria-label='esp'>🇪🇸</span> is a vertical search engine for classifieds. On March 2012,
                it became the leading search engine for classified ads in Europe and Latin America.
                On 2016, Trovit reached 51 countries worldwide, being available in 19 languages and
                receiving more than 90 million unique visitors every month. Wikipedia
                <span className="Experience__card-content-description-bold">
                    {'{'} PHP {'}'}
                </span>
              </React.Fragment>
            )
          }
        },
        {
          title: 'Systems Analyst',
          dates: '2013-2014',
          company: {
            name: 'Cziber',
            url: 'https://www.cziber.com.uy'
          },
          contentHtml: () => {
            return (
              <React.Fragment>
                ERP NODUM Analysis and Consulting Systems migration, implementation of new technologies, own and third party solutions.
                <span className="Experience__card-content-description-bold">
                    {'{'} JAVA, C# {'}'}
                </span>
              </React.Fragment>
            )
          }
        },
        {
          title: 'Team Leader Analyst',
          dates: '2011-2013',
          company: {
            name: 'NUMINA',
            url: 'http://www.numina.net.uy/'
          },
          contentHtml: () => {
            return (
              <React.Fragment>
                Lead team of junior developers, analysis, consulting, implementation and develop modules for Kore ERP.
                <span className="Experience__card-content-description-bold">
                    {'{'} CLARION, MySQL, SQL, HTML, CSS {'}'}
                </span>
              </React.Fragment>
            )
          }
        },
      ]
    }
  }

  render() {
    return (
      <div className="Experience" id="Experience">
          <span className="section__name">Experience</span>
          <h2 className="section__title">WORK EXPERIENCE</h2>

          <div className="Experience__container">
          {
            this.state.jobs.map(job => {
              return (
                <ExperienceCard data={job} key={job.dates}>
                  {job.contentHtml()}
                </ExperienceCard>
              )
            })
          }
          </div>
      </div>
    );
  }

}

export default Experience;
