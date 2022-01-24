---
title: Adobe Experience Manager Forms APIs
description: A collection of high-level references for all endpoints provided by Adobe Experience Manager Forms Communications.
keywords: 
  - Experience Manager Forms Communications
  - Communications
  - Experience Manager Forms Assembler
  - API Documentation
  - HTTP
  - REST
---

<Hero slots="heading, text"/> 

# Adobe Experience Manager Forms Communications

Experience Manager Forms Communications provide HTTP APIs that allow you to programmatically perform key operations in your applications.

<Resources slots="heading, links"/>

#### Resources

* [Experience Manager Forms Documentation](https://experienceleague.adobe.com/docs/experience-platform.html)

## Overview

AEM Forms Cloud Service provides APIs to:

* Create, assemble, and deliver brand-oriented and personalized communications such as business correspondences, documents, statements, claim processing letters, benefit notices, claim processing letters, monthly bills, and welcome kits. These are known as Communications APIs and help you combine a template (XFA or PDF) with customer data to generate documents in PDF, PS, PCL, and ZPL formats.

* Combine, rearrange, and augment PDF and XDP documents and obtain information about PDF documents. These are known as Assembler APIs.

These APIs are available in two flavours: 

* **Synchronous APIs** are suitable for on-demand, low latency, and single record document generation use cases. These APIs are more suitable for user-action based use cases. For example, generating a document after a user fill a form.

* **Asynchronous APIs(Batch APIs)** are suitable for scheduled high throughput, scheduled, and multiple document generation use cases. These APIs generate documents in batches. For example, phone bills, credit card statements, and benefits statements generated every month.

## Discover 

<DiscoverBlock slots="heading, link, text"/>

<!-- ### Get Started

[Authenticate and access Experience Platform APIs](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html)
    
Follow this tutorial to gather the required authentication credentials for all Experience Platform APIs (except for the Privacy Service API and Reactor API).

<DiscoverBlock slots="link, text"/>

[Authenticate and access the Privacy Service API](https://experienceleague.adobe.com/docs/experience-platform/privacy/api/getting-started.html)
    
Follow this tutorial to gather the required authentication credentials the Privacy Service API.

<DiscoverBlock slots="link, text"/>

[Authenticate and access the Reactor API](https://experienceleague.adobe.com/docs/experience-platform/tags/api/getting-started.html)
    
Follow this tutorial to gather the required authentication credentials for the Reactor API.

<DiscoverBlock slots="heading, link, text"/> -->

### API References

[Communications Syncronous API](references/sync.md) 

create and run communication APIs to merge XDP and PDF templates with XML data to generate branded communications for printing and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Communications Batch API](references/batch.md) 

Learn to create and run communication APIs in batch mode to generate multiple communications at scheduled intervals for printing and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Assembler Syncronous API](references/assembler-sync.md) 

Learn to create and run Assembler APIs to combine, rearrange, and augment PDF and XDP documents and obtain information about PDF documents. Each job submitted to the Assembler service includes a Document Description XML (DDX) document, source documents, and external resources (strings and graphics).

