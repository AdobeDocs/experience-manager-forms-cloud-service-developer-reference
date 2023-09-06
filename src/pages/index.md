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

# Adobe Experience Manager Forms Cloud Service - Communications

Experience Manager Forms Cloud Service Communications provide HTTP APIs that help you create brand-approved, personalized, and standardized documents such as business correspondences, statements, claim processing letters, benefit notices, monthly bills, or welcome kits.

<Resources slots="heading, links"/>

#### Resources

* [AEM Forms Communications overview](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/forms/using-communications/aem-forms-cloud-service-communications-introduction.html)

## Overview

AEM Forms Cloud Service Communications provides APIs to:

* Create, assemble, and deliver brand-oriented and personalized communications such as business correspondences, documents, statements, claim processing letters, benefit notices, monthly bills, and welcome kits. These  help you combine a template (XFA or PDF) with customer data to generate documents in PDF, PS, PCL, and ZPL formats. These are known as document generation APIs

* Combine, rearrange, and augment PDF and XDP documents and obtain information about PDF documents. These are known as Document manipulation APIs.

These APIs are available in two flavors:

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

[Document Generation Synchronous API](references/output-sync.md)

Use these APIs to generate a communication on demand for print and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Document Generation Asynchronous APIs](references/output-batch.md)

Use these APIs to generate multiple communications at scheduled intervals for print and digital deliveries.

<DiscoverBlock slots="link, text"/>

[Document Manipulation Synchronous APIs](references/assembler-sync.md)

Use these APIs to combine, rearrange, augment PDF and XDP documents and obtain information about PDF documents.

<DiscoverBlock slots="link, text"/>

[DocAssurance Synchronous APIs](references/docassurance.md)

<span> You can send an email from your official email address to `aem-forms-early-adopter-program@adobe.com`  to join the early adopter program and request access to the capability. </span>

Use these APIs to encrypt, decrypt, sign, or certify PDF documents.
