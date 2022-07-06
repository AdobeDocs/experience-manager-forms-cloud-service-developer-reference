---
title: Adobe Experience Manager Forms Cloud Service APIs
description: A collection of high-level references for all endpoints provided by Adobe Experience Manager Forms Cloud Service.
keywords: 
  - Experience Manager Forms Communications
  - Communications
  - Experience Manager Forms Assembler
  - API Documentation
  - HTTP
  - REST
---

<Hero slots="heading, text"/> 

# Adobe Experience Manager Forms Cloud Service

Experience Manager Forms Cloud Service provide HTTP APIs that allow you to programmatically perform key operations in your applications.

<Resources slots="heading, links"/>

#### Resources

* [Experience Manager Forms Documentation](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/forms/using-communications/aem-forms-cloud-service-communications-introduction.html)


## Overview

AEM Forms Cloud Service provides APIs to:

* Create, assemble, and deliver brand-oriented and personalized communications such as business correspondences, documents, statements, claim processing letters, benefit notices, monthly bills, and welcome kits. These  help you combine a template (XFA or PDF) with customer data to generate documents in PDF, PS, PCL, and ZPL formats. These are known as document generation APIs

* Combine, rearrange, and augment PDF and XDP documents and obtain information about PDF documents. These are known as Document manipulation APIs.

These APIs are available in two flavours: 

* **Synchronous APIs** are suitable for on-demand, low latency, and single record document generation use cases. These APIs are more suitable for user-action based use cases. For example, generating a document after a user fill a form.

* **Asynchronous APIs (Batch APIs)** are suitable for scheduled, high throughput, and multiple document generation use cases. These APIs generate documents in batches. For example, phone bills, credit card statements, and benefits statements generated every month.

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

[Document generation syncronous API](references/sync.md) 

Use these APIs to generate a communication on demand for print and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Document generation asynchronous APIs](references/output-batch.md) 

Use these APIs to generate multiple communications at scheduled intervals for print and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Document manipulation synchronous APIs](references/assembler-sync.md) 

Use these APIs to combine, rearrange, augment PDF and XDP documents and obtain information about PDF documents.