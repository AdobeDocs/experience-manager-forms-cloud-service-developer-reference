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
        title: 'Home',
        path: '/'
      },
      {
        title: 'API',
        menu: [{
          title: 'Document Generation - Synchronous APIs',
          path: '/api/output-sync.md'
        }, {
          title: 'Document Generation - Batch APIs',
          path: '/api/output-batch.md'
        }, {
          title: 'Document Manipulation - Synchronous APIs',
          path: '/api/assembler-sync.md'
        }, {
          title: 'DocAssurances - Synchronous APIs',
          path: '/api/docassurance.md'
        }, {
          title: 'Edge Deliver Services: Forms Submission Service',
          path: '/api/aem-forms-submission-service.md'
        }]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/experience-manager-forms-cloud-service-developer-reference/'

};
