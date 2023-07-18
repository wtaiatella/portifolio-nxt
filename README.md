this is my personal portifolio project.
I build it from creat next app base:

use this stack to build:

-   styled componente
-   Typescript
-   React hooks as useEffec, useState and useContext
-   GitHub APi to fetch projects to my portifolio list
-   Send email using google authentication.
-   Whatsapp API to send messagens

# My Portifolio

Welcome to my portfolio! This repository is a showcase of the courses, diplomas, and projects I have completed to enhance my skills in HTML, CSS, web development, JavaScript, and other related technologies.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Api Reference](#api-reference)

## Features

This project is built on the foundation of HTML, CSS, and JavaScript. In addition to these core technologies, I utilized Next.js for efficient project organization and Styled Components for streamlined development of UI components.

### Acknoledges Section

In this section, I am accessing a JSON file to retrieve information about the completed course list, enabling easier updates without significant efforts.

### Portifolio Section

In this section, I establish a connection with the GitHub API and retrieve information about all my repositories. For the repositories that I consider more important, I have added a portfolio.rm file containing project details, which allows them to be included in the list of completed projects.

### Contact Section

Here, I have integrated the form with the E-goi API. With E-goi, I can store the contact information of visitors who send me a message. I have also configured a welcome email through E-goi to express my appreciation for their interest in getting to know more about my work.

## Installation

After clone this repository, install my-project with npm:

```bash
  npm install
```

For this project work properly, you need to have an account in Github as a repositorie for your projects and also an account in E-goi to use it as contact and emailing system.

Once you have this two accounts, access then to generate the token to enable connection with this project.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Github

REPO = https://api.github.com/users/your-repo/repos

GITHUB_TOKEN = xxxxx

### E-goi

EGOI_TOKEN = xxxxx

EGOI_LIST = 1

## API Reference

#### Create contact in E-goi

This endpoint add a new contact list in E-goi and send an welcome E-mail.

```http
  POST /api/email
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Update contact

```http
  POST /api/items/${id}
```

This endpoit update the contact E-goi list in case of already exist and send a new e-mail to the visitor.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `api_key` | `string` | **Required**. Your API key        |
