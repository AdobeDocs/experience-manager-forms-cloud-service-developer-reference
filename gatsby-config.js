/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: 'Components',
        selected: false
      }
    ],
    pages: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        menu: [{
          title: 'Batch API Reference',
          description: 'Communications Batch APIs',
          path: '/api/sync.md'
        }, {
          title: 'Sync API Reference',
          description: 'Communications Sync APIs',
          path: '/api/index.md'
        }]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Overview',
            path: '/guides/'
          },
          {
            title: 'Creating an OAuth Client',
            path: '/guides/creating_oauth_client/'
          },
          {
            title: 'OAuth using cURL',
            path: '/guides/oauth_using_curl/'
          },
          {
            title: 'OAuth using POSTMAN',
            path: '/guides/oauth_using_postman/'
          },
          {
            title: 'JWT Authentication',
            path: '/guides/jwt_authentication/'
          }
        ]
      },
      {
        title: 'Reporting API',
        path: '/guides/reporting_api/',
        pages: [
          {
            title: 'Overview',
            path: '/guides/reporting_api/'
          },
          {
            title: 'Reporting with breakdowns',
            path: '/guides/reporting_api/reporting_breakdowns/',
            pages: [
              {
                title: 'Reporting with single breakdowns',
                path: '/guides/reporting_api/reporting_breakdowns/',
              },
              {
                title: 'Reporting with multiple breakdowns',
                path: '/guides/reporting_api/reporting_breakdowns/reporting_multiple_breakdowns/',
              },
            ]
          },
          {
            title: 'Reporting tips and tricks',
            path: '/guides/reporting_api/reporting_tips_tricks/'
          }
        ]
      },
      {
        title: 'Discovery API',
        path: '/guides/discovery_api/'
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/experience-manager-forms-cloud-service-developer-reference/'

};
