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
        title: 'API Reference',
        menu: [{
          title: 'Document Generation Synchronous APIs',
          description: 'Document generation synchronous APIs reference',
          path: '/api/output-sync.md'
        }, {
          title: 'Document Generation Batch APIs',
          description: 'Document generation batch APIs reference',
          path: '/api/output-batch.md'
        }, {
          title: 'Document Manipulation Synchronous APIs',
          description: 'Document manipulation synchronous APIs',
          path: '/api/assembler-sync.md'
        }, {
          title: 'DocAssurance Synchronous APIs',
          description: 'DocAssurance synchronous APIs',
          path: '/api/docassurance.md'
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
