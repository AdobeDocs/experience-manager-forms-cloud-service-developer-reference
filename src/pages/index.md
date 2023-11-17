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

# AEM Forms Cloud Service Communication APIs

## Introduction

### What are AEM Forms Communications APIs?

Increasingly content and application owners are looking for easy-to-use PDF functionality when building modern web experiences. They are looking to cloud-based platforms with simple and reliable plug-and-play services. Communications capability helps you to create brand-approved, personalized, and standardized documents such as business correspondences, statements, claim processing letters, benefit notices, monthly bills, or welcome kits.

AEM Forms Communications APIs has five main APIs: the Document Generation APIs, Document Manipulation APIs, and Document Assurance APIs. They help you deliver simpler, faster, and branded experiences so that you control user interaction with your documents, streamline communication workflows and promote usage and retention. 

These APIs offers a number of operations to programmatically manipulate documents and automate many different types of document workflows. You can easily combine XML data with PDF templates to produce personalized statements, set a password to prevent unauthorized opening of the document, combine multiple PDF documents to create one document, rearrange order of pages, and split a PDF into multiple documents to enable downstream solutions. There are also capabilities to convert XFA documents to PS, PCL, and ZPL formats, and encrypt, decrypt, sign, or certify PDF documents.

With tools and language support that caters to developers' existing skill sets, you can now create compelling and consistent communication experiences, based on PDF documents, including exporting, creating and working with PDFs.

### Document Generation API for automating document workflows

The Document Generation APIs allows you to produce high fidelity PDF documents with dynamic data inputs. Using Document Generation API, you can merge your data(e.g. XML data) with XFA templates to create dynamic documents for contracts and agreements, invoices, proposals, reports, forms, branded marketing documents and more.

These APIs are available in two flavors:

* **[Document Generation Synchronous APIs](references/output-sync.md)** are suitable for on-demand, low latency, and single record document generation use cases. These APIs are more suitable for user-action based use cases. For example, generating a document after a user fill a form.

* **[Document Generation Asynchronous APIs (Batch APIs)](references/output-batch.md)** are suitable for scheduled, high throughput, and multiple document generation use cases. These APIs generate documents in batches. For example, phone bills, credit card statements, and benefits statements generated every month.


### Document Manipulation to automate for your document workflows

The [Document Manipulation APIs](references/assembler-sync.md) help to combine, rearrange, and validate PDF documents. Typically, you create a DDX and submit it to document manipulation APIs to assemble or rearrange a document. The [DDX document](https://helpx.adobe.com/content/dam/help/en/experience-manager/forms-cloud-service/ddxRef.pdf) provides instructions on how to use the source documents to produce a set of required documents. The DDX reference documentation provides detailed information about all the supported operations. 

You can use the document manipulation APIs to convert a PDF document to a PDF/A-compliant document and to determine whether a PDF document is PDF/A-compliant. PDF/A is an archival format meant for long-term preservation of the document's content.

Some examples of document manipulation are: 

* Assemble a simple PDF document
* Create a PDF Portfolio
* Assemble encrypted documents
* Assemble documents using Bates numbering
* Flatten and assemble document
* Extract pages from a source document
* Divide a source document based on bookmarks
* Convert to and validate PDF/A-compliant documents

### Document Assurance to secure and protect your documents

The [Document Assurance APIs](references/docassurance.md) help encrypt, decrypt and digitally sign your documents. When a document is encrypted, its contents become unreadable. You can encrypt the entire PDF document (including its content, metadata, and attachments), everything other than its metadata, or only the attachments. You can also certify a document before it is sent to a user to open by using Acrobat or Adobe Reader, validate a signature that was added to a form by using Acrobat or Adobe Reader, signs a document on behalf of a public notary.

>[!NOTE] 
>
>
> The Document Assurance APIs is under early adopter program. You can write to `aem-forms-early-adopter-program@adobe.com` from your official email id to join the early adopter program and request access to the Document Assurance capability.


<!-- 

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

### Get Started

[Authenticate and access Experience Platform APIs](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html)
    
Follow this tutorial to gather the required authentication credentials for all Experience Platform APIs (except for the Privacy Service API and Reactor API).

<DiscoverBlock slots="link, text"/>

[Authenticate and access the Privacy Service API](https://experienceleague.adobe.com/docs/experience-platform/privacy/api/getting-started.html)
    
Follow this tutorial to gather the required authentication credentials the Privacy Service API.

<DiscoverBlock slots="link, text"/>

[Authenticate and access the Reactor API](https://experienceleague.adobe.com/docs/experience-platform/tags/api/getting-started.html)
    
Follow this tutorial to gather the required authentication credentials for the Reactor API.

<DiscoverBlock slots="heading, link, text"/> 

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

Use these APIs to encrypt, decrypt, sign, or certify PDF documents. You can write to `aem-forms-early-adopter-program@adobe.com` from your official email id to join the early adopter program and request access to the capability.
-->