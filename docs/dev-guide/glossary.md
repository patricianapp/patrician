## Amazon Aurora

[Official site](https://aws.amazon.com/rds/aurora/)

- **What is it?** A proprietary cloud database service that has compatibility with Postgres and MySQL clients.
- **What do we use it for?** The Patrician database that stores user and item info.
- **Alternatives:** Amazon DocumentDB (if we wanted to use a MongoDB client instead), or a typical managed Postgres service like Digital Ocean Databases. Aurora claims to be the fastest of any of these options.

## Amazon ECS

[Official site](https://aws.amazon.com/ecs/)

- **What is it?** An AWS service for hosting Docker containers.
- **What do we use it for?** It's likely that we'll use this to host our MusicBrainz instance.
- **Alternatives:** I don't know of any managed Docker services like ECS that exist (most of them tend to be Kubernetes services, which we don't need). The alternative would probably be managing Docker containers on our own VPS (EC2, Digital Ocean, Linode, etc).

## Apollo Client

[Official site](https://www.apollographql.com/client/)

- **What is it?** A JavaScript library for making GraphQL requests from the browser or in Node.js.
- **What do we use it for?** This is the framework we use for fetching data in the Patrician UI.
- **Alternatives:** Gqless is an option that touts itself as "query-less", meaning it auto generates the query you need to run based on the data being accessed inside a component. It's still a young project, but worth evaluating. Relay is a library created by Facebook, specifically designed for React and featuring strong conventions regarding pagination and other things. Since we are designing the API to be Relay-compatible, this is an option we can look at. Urql is another option that I've seen mentioned, but I haven't found any benefit over Apollo Client. Apollo Client is currently the most popular and well-supported option, and its newest update that makes use of Hooks offers a fantastic dev experience, as well as its integration with the Apollo ecosystem which is currently dominating the GraphQL landscape.

## Apollo Server

[Official site](https://www.apollographql.com/server/)

- **What is it?** A production-ready Node.js library for creating GraphQL servers.
- **What do we use it for?** Warthog, which the Patrician API is built on, uses Apollo Server under the hood. If we decide to not use Warthog at some point, it's likely that we would still want to use Apollo Server.
- **Alternatives:** Express-graphql is a smaller library that's focused more on simplicity than features. For production-level Node.js apps, there doesn't seem to be any competitor to Apollo Server. Similar libraries such as graphql-yoga use Apollo under the hood.

## AWS Lambda

[Official site](https://aws.amazon.com/lambda/)

- **What is it?** Cloud runtime for executing functions on-demand, either via an API endpoint or through other AWS services.
- **What do we use it for?** Nothing yet, but this is most likely where we will put the "importer" functions that import large libraries from Last.fm, Spotify, etc. because we don't want that work clogging up the main thread that our server runs on.
- **Alternatives:**
  - Google Firebase Cloud Functions: This would be a nice solution, but right now it's heavily tied to Node.js, and we might eventually want to write these functions in other languages. (Lambda, by comparison, supports Java, Go, PowerShell, Node. js, C#, Python, and Ruby.)

## Docker

[Official site](https://www.docker.com/)

- **What is it?** A virtualization tool that allows applications to run anywhere that has Docker installed.
- **What do we use it for?** I'm not 100% convinced that we need it, since Heroku can host Node.js applications without it, but this would enable our API to be very portable, and it would ease the dev experience for our team and for others who want to self-host Patrician instances.
- **Alternatives:** As of 2020, Docker is by and large an industry standard.

## ESLint

[Official site](https://eslint.org/)

- **What is it?** A tool for automated "linting", which finds errors in our code, and in some cases attempts to auto-fix them.
- **What do we use it for?** Code checking on every commit, thanks to Husky and Lint-Staged.
- **Alternatives:** No real alternatives.

## Ghost

[Official site](https://ghost.org/)

- **What is it?** A blogging platform/CMS, written in Node.js, that features an admin UI for creating accounts and writing posts.
- **What do we use it for?** Might use this for our public-facing blog where we demonstrate new app features. There's a [handy Heroku installer](https://github.com/SNathJr/ghost-on-heroku) that seems to work pretty well.
- **Alternatives:** Haven't done a huge amount of research on this yet. Wordpress would be an obvious alternative, but I'd like to use something more modern, and I really like the look and feel of Ghost in comparison.

## GitHub

[Official site](https://github.com/)

- **What is it?** A hosting service for code that uses Git version control to keep track of history and collaboration between users.
- **What do we use it for?** Hosting all of our code, and keeping track of our tasks in the form of Issues.
- **Alternatives:** GitLab would also be an awesome choice, but GitHub is what most developers are used to (which makes it easier to find contributors), and it's also what my company uses, so it makes the most sense for this project.

## GraphQL

[Official site](https://graphql.org/)

- **What is it?** A protocol for web server communication that allows clients to specify data fields.
- **What do we use it for?** The Patrician API uses GraphQL as its communication protocol.
- **Alternatives:** REST is the main alternative, and the main reason for going with GraphQL is that, because this will be a public API, we want to serve many use cases and offer the best tooling available. GraphQL is a standardized query language, which means that developers who are used to other GraphQL APIs such as GitHub and Shopify will feel right at home.

## Hasura

[Official site](https://hasura.io/)

- **What is it?** An open-source application that serves an autogenerated GraphQL endpoint for a Postgres database, complete with CRUD operations for all tables and integrations for server-side business logic.
- **What do we use it for?** Nothing at this point, however I was considering using this as our API instead of the Warthog application we're building. The main difference is that Hasura relies on the database layer for a lot of business logic, which would likely be faster due to Postgres's optimization. I decided against this, because it seemed like it would be a lot more work compared to our current option, and would likely allow for less customization of our business logic.
- **Alternatives:** The closest comparison to this would be Postgraphile, which I turned down for similar reasons. The alternative we've chosen for this project is our own TypeScript API that uses the Warthog framework (a wrapper for TypeORM/TypeGraphQL that reduces boilerplate and auto-generates some API functionality).

## Heroku

[Official site](https://www.heroku.com/platform)

- **What is it?** A cloud platform for easily hosting applications in a number of languages/runtimes.
- **What do we use it for?** Hosting the Patrician API, and possibly our blog as well.
- **Alternatives:** There are several. The most similar to Heroku would probably be AWS Elastic Beanstalk, which also has a simple setup process. We could also self-manage a VPS using a service like Digital Ocean, or self-manage a Kubernetes cluster using EKS or Google Cloud. These are all options we can revisit at some point, but right now Heroku is the go-to for its simplicity, plugin architecture, and auto-scaling ability. Reasons to switch to something else could be for pricing, better scalability, higher speeds, integration with other services, logging, better CI/CD, and more.

## Husky

[Official site](https://github.com/typicode/husky)

- **What is it?** An npm package for running npm commands on git hooks (pre-commit, pre-push, etc)
- **What do we use it for?** (Along with lint-staged) Linting, formatting, testing, and building documentation on pre-commit.
- **Alternatives:** [pre-commit](https://www.npmjs.com/package/pre-commit) (not as popular, not as many features)

## Jest

[Official site](https://jestjs.io/)

- **What is it?** A Node.js library for creating and running automated tests.
- **What do we use it for?** Unit, integration, and e2e tests that ensure our applications are always functioning correctly and that we don't break things when making changes.
- **Alternatives:** Jest is by far the most popular test framework, followed by Jasmine.

## Last.fm

[Official site](https://www.last.fm/)

- **What is it?** A music profile website that connects to various music players and logs listening history.
- **What do we use it for?** Plays (scrobbles) from Last.fm accounts can be imported into Patrician. Right now we just use the data to collect all of the albums, but eventually we will want to store the actual scrobbles in our database to allow for more powerful functionality.
- **Alternatives:** This is currently the primary website that people use for storing their listening history. Libre.fm is also a well-known one, and ListenBrainz is much newer but hopefully will become popular over time.

## Lint-Staged

[Official site](https://github.com/okonet/lint-staged)

- **What is it?** A Node.js library that allows you to run commands (e.g. eslint) on files that are staged for commit.
- **What do we use it for?** Linting/formatting/testing staged files, running mkdocs build when docs change.
- **Alternatives:** None that I know of.

## ListenBrainz

[Official site](https://listenbrainz.org/)

- **What is it?** A service that logs listening history, very similar to Last.fm. Created by MusicBrainz.
- **What do we use it for?** We will eventually allow users to import listens from this service, and may even use our own hosted ListenBrainz server as a way of storing listening history on our end.
- **Alternatives:** As for creating our own listening history logger, some other options worth looking into would be GNU FM and [Maljola](https://github.com/krateng/maloja).

## Lucene

[Official site](https://lucene.apache.org/)

- **What is it?** A Java library providing powerful indexing and search features, as well as spellchecking, hit highlighting and advanced analysis/tokenization capabilities.
- **What do we use it for?** We don't currently use Lucene itself for anything, however our query syntax is modelled after the [Lucene query syntax](https://lucene.apache.org/core/7_7_2/queryparser/org/apache/lucene/queryparser/classic/package-summary.html). MusicBrainz uses Lucene for its [advanced search](https://musicbrainz.org/doc/Indexed_Search_Syntax), so I wanted a syntax that would be familiar for MusicBrainz users. Many search engines, including [Gmail's](https://support.google.com/mail/answer/7190?hl=en), use a very similar language. It's unlikely that we'll need to use Lucene itself as a search engine, since we're mostly just querying user's collections (a much smaller amount of results than searching a general database of albums)

## Material Design

[Official site](https://material.io/)

- **What is it?** A design system created by Google that is known for its flat design. It's used in most Google products, including Android, and is especially popular on the web. Many CSS and web component libraries exist that facilitate the use of Material Design for developers and designers.
- **What do we use it for?** Since the Patrician site uses Material-UI as its primary component library, it follows Material Design by default. It's currently unknown how closely we'll stick to Material Design principles when the site launches, however there's definitely some ideas I want to keep, such as the animation styles.
- **Alternatives:** I'm sure there are many other UI design philosophies out there, but I haven't looked into them yet.

## Material-UI

[Official site](https://material-ui.com/)

- **What is it?** A React component library that follows Material Design principles by default (though is not locked to them), as well as accessibility features, responsiveness, grid layout, and extensive theming capabilities.
- **What do we use it for?** Our UI site is currently being built using Material-UI.
- **Alternatives:** There are several general-purpose React component libraries similar to this one, including Ant-Design and React Bootstrap. Material-UI is the most extensively documented, well-known, and customizable component library out there, and seems like a perfect fit for Patrician.

## MkDocs

[Official site](https://www.mkdocs.org/)

- **What is it?** MkDocs is a static-site documentation generator that uses Markdown files.
- **What do we use it for?** The documentation you're looking at right now (unless you're viewing it on GitHub) has been generated using MKDocs with the MKDocs Material Theme. The Markdown files are stored in the /docs folder of the Patrician UI repo, and we have a pre-commit hook runs `mkdocs build` whenever these files change, placing the output in /public where they are served as part of the main Patrician site.
- **Alternatives:** Sphinx, GitBook and MDBook are all options I looked at. I chose MkDocs because it's modern and I like its themes the best. Doesn't this site look pretty?

## MusicBrainz

[Official site](https://musicbrainz.org/)

- **What is it?** An open music encyclopedia that collects music metadata and makes it available to the public.
- **What do we use it for?** MusicBrainz is the service we use for collecting item metadata. We plan on signing up for their [non-profit tier](https://metabrainz.org/supporters/account-type), which would enable us to host our own MusicBrainz server which would be automatically kept up-to-date from their API.
- **Alternatives:** Wikipedia has a list of [online music databases](https://en.wikipedia.org/wiki/List_of_online_music_databases). Of all the open-source options that suit our specific metadata needs, none are as feature-rich and precise as MusicBrainz.

## Next.js

[Official site](https://nextjs.org/)

- **What is it?** A frontend framework built around React for creating hybrid production apps that can be server-rendered and statically optimized.
- **What do we use it for?** Next.js is the framework we're using for our UI.
- **Alternatives:** I like Next.js for its flexibility, first-class TypeScript support, and tight integration with Vercel's hosting service. There are some other React frameworks that are built around Next.js, such as Redwood and Blitz, but the additional features they add are unnecessary for our use case.

## Notion

[Official site](https://notion.so)

- **What is it?** A collaborative note-taking platform that integrates kanban boards, tasks, wikis, and databases.
- **What do we use it for?** Public expense reports. I like using Notion for this due to the flexible way it manages spreadsheets/tables. I've considered using it for numerous other things, all of which I found better replacements for, including project management (ZenHub), blogging (Ghost), and documentation (MkDocs).
- **Alternatives:** For expense reports, probably Google Sheets, which is less flexible and less flattering than Notion. For everything else mentioned, I'm currently using the alternatives mentioned above.

## Playwright

[Official site](https://playwright.dev/)

- **What is it?** A Node library to automate Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
- **What do we use it for?** This will most likely be our browser automation framework for end-to-end tests.
- **Alternatives:** Cypress, Puppeteer, and Selenium would be the main competitors. Playwright is the only one that automates all three major browser engines while running completely inside Node. It's created by Microsoft which gives me faith in its quality. It is, however, very new, having just gotten to its 1.0 release as of May 2020.

## PostgreSQL

[Official site](https://www.postgresql.org/)

- **What is it?** An advanced open-source relational database.
- **What do we use it for?** For local development we use Postgres inside a Docker container, and in production we use a Postgres-compatible Aurora instance. In both cases, this serves as the backend for our API, managing users, items, reviews, and everything else we need to store.
- **Alternatives:** The main alternatives would be MongoDB and MySQL, which I don't see offering any advantage over Postgres.

## Prettier

[Official site](https://prettier.io/)

- **What is it?** An opinionated code formatter
- **What do we use it for?** Enforcing code formatting standards across all repos, including [tabs over spaces](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).
- **Alternatives:** Prettier seems to be the current standard.

## React

[Official site](https://reactjs.org/)

- **What is it?** A web framework for building user interfaces using JavaScript and JSX.
- **What do we use it for?** The Patrician site is built using React with Next.js.
- **Alternatives:** Angular and Vue are the other major JavaScript frameworks, both of which I've also had some experience using. All three of them use a component architecture and have the same basic capabilities, and we could reasonably use any framework for Patrician. We're currently choosing React because it's popular in the dev community, has lots of open-source components available and widespread support, and has a fairly intuitive coding style with JSX.

## Redis

[Official site](https://redis.io/)

- **What is it?** An open source, in-memory data structure store, used as a database, cache and message broker. Uses a key-value storage method.
- **What do we use it for?** We may use this for caching album art to speed up collage generation. Current collage generators take a while because make tons of REST calls, and I think there's a great opportunity for speed improvement here.
- **Alternatives:** Memcached?

## Release-Drafter

[Official site](https://github.com/release-drafter/release-drafter)

- **What is it?** A GitHub Actions script that drafts release descriptions based on the PRs that have been merged since last release.
- **What do we use it for?** Creating releases for both our UI and API.
- **Alternatives:** Zeit/release was initally the option I wanted to use, but that generates release descriptions based on commits, not PRs, meaning we would have to do squash merges. This would be fine if not for the fact that after a squash merge, you can no longer commit to that feature branch, so this could make for a frustrating dev workflow. I'm not opposed to revisiting this idea in the future.

## Storybook

[Official site](https://storybook.js.org/)

- **What is it?** A tool for prototyping UI components in isolation. Compatible with React and other major web frameworks.
- **What do we use it for?** We will probably want to use this to test our UI components as we're working on them.
- **Alternatives:** ???

## TypeGraphQL

[Official site](https://typegraphql.com)

- **What is it?** A Node.js library for generating a GraphQL schema using TypeScript decorators, which can then be fed into a GraphQL server such as Apollo Server.
- **What do we use it for?** Creating the GraphqQL schema for Patrician API (part of Warthog).
- **Alternatives:** graphql-js, or just using Apollo server on its own and defining the schema using their own syntax or in .graphql files. Using TypeGraphQL, especially as part of Warthog, reduces our boilerplate by having our code, schema, and data models all in one place.

## TypeORM

[Official site](https://typeorm.io)

- **What is it?** An ORM (object-relational model) database client that uses TypeScript decorators to describe data models.
- **What do we use it for?** Creating the data models and migrations for Patrician API (part of Warthog).
- **Alternatives:** Sequelize used to be the go-to, but TypeORM has since grown in popularity. MikroORM is a similar project that is also gaining traction due to the slow development of TypeORM. Prisma2 looks very promising with its superb TypeScript support and autogenerated classes based on the data model, but it would require defining the data model in its own syntax as opposed to writing out the TypeScript classes. It's something worth revisiting once a stable version is released, but until TypeORM gives us any major issues we will probably stick with it.

## TypeScript

[Official site](https://www.typescriptlang.org/)

- **What is it?** A programming language that transpiles to JavaScript, offering type-checking and deep code editor integration, especially with VSCode.
- **What do we use it for?** TypeScript is what the majority (currently all) of our code is written in, including the UI and API.
- **Alternatives:** No real alternatives, although due to our microserviec architecture and desire for maximum performance, I could see some of our code moving away from JavaScript altogether, but it'll be a while before that happens.

## Vercel

[Official site](https://vercel.com/)

- **What is it?** A full-stack web hosting platform made by the creators of Next.js with built-in CI/CD (automatically deploys when code is merged in GitHub).
- **What do we use it for?** Serving the Patrician UI.
- **Alternatives:** Netlify would be an option if we abandoned SSR (making our site fully client-rendered/static). The other options would be AWS (many options to choose from) and Heroku. Vercel has been working great so far, is built by the creators of Next.js, and offers just about everything we need out of the box.

## Warthog

[Official site](https://warthog.dev)

- **What is it?** A GraphQL API framework for NodeJS that allows you to define your data model and API schema in one place and autogenerates CRUD operations with sorting, filtering, and pagination out of the box. Built on top of TypeORM and TypeGraphQL.
- **What do we use it for?** This is the framework we're currently using for the Patrician API.
- **Alternatives:** There are many options for a GraphQL framework that we could go with. I've written prototypes for the basic functionality in Nest.js, Hasura, and a TypeORM/TypeGraphQL app from scratch before I found this framework which offers a lot out of the box. Warthog is a small project and we're still evaluating if it will fit our needs in the long run, but we've had success with it so far. If at some point it fails to do so, we may look at Hasura again (or perhaps Postgraphile) or re-build our API from scratch using either TypeORM/TypeGraphQL or experiment with other frameworks (Prisma2, graphql-yoga, etc).

## ZenHub

[Official site](https://www.zenhub.com/)

- **What is it?** A project management tool with deep GitHub integration.
- **What do we use it for?** Organizing our GitHub issues into a project board with Epics and a roadmap.
- **Alternatives:** Codetree, Jira, GitKraken Glo, Notion, ClickUp, Trello, Taiga
