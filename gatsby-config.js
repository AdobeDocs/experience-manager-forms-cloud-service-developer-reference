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
    pages: [
      {
        title: 'Communications',
        path: '/'
      },
      {
        title: 'API Reference',
        menu: [{
          title: 'Sync API Reference',
          description: 'Communications Sync APIs',
          path: '/api/sync.md'
        }, {
          title: 'Batch API Reference',
          description: 'Communications Batch APIs',
          path: '/api/batch.md'
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
  pathPrefix: process.env.PATH_PREFIX || '/experience-manager-forms-apis/'

};
