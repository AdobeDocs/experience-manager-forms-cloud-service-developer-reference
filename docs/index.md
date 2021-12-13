---
title: Adobe Experience Manager Forms Communications APIs
description: A collection of high-level references for all endpoints provided by Adobe Experience Manager Forms Communications.
keywords: 
  - Experience Manager Forms Communications
  - Communications
  - API Documentation
  - HTTP
  - REST
---

<Hero slots="heading, text"/> 

# Adobe Experience Manager Forms Communications

Experience Manager Forms Communications provide HTTP APIs that allow you to programmatically perform key operations in your applications.

<Resources slots="heading, links"/>

#### Resources

* [Adobe Experience Manager Forms Communications](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/forms/using-communications/aem-forms-cloud-service-communications-introduction.html)

## Overview

Communications capability helps you to create brand-oriented, personalized, and standardized documents such as business correspondences, statements, claim processing letters, benefit notices, monthly bills, or welcome kits. You can generate a document on demand or create a batch job to generate multiple documents at defined intervals. Communication APIs provide:

Communications provide APIs for on-demand and scheduled document generation. You can use synchronous APIs for on-demand and batch APIs (asynchronous APIs) for scheduled document generation:

* Synchronous APIs are suitable for on-demand, low latency, and single record document generation use cases. These APIs are more suitable for user-action based use cases. For example, generating a document after a user fill a form.

* Batch APIs (Asynchronous APIs) are suitable for scheduled high throughput, scheduled, and multiple document generation use cases. These APIs generate documents in batches. For example, phone bills, credit card statements, and benefits statements generated every month.

## Discover 

<DiscoverBlock slots="heading, link, text"/>

### API References

[Syncronous API](../src/pages/api/sync.md)

Create and run communication APIs to merge XDP and PDF templates with XML data to generate branded communications for printing and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Batch API](../src/pages/api/index.md)

Learn to create and run communication APIs in batch mode to generate multiple communications at scheduled intervals for printing and digital deliveries.
