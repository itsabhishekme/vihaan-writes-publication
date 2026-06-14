/* -------------------------------------------------------------------------- */
/*                               SITE CONFIG                                  */
/* -------------------------------------------------------------------------- */

export const SITE_URL =
  "https://vihaanwrites.in";

export const SITE_NAME =
  "Vihaan Writes";

export const AUTHOR_NAME =
  "Vihaan";

export const DEFAULT_LOGO =
  `${SITE_URL}/logo.png`;

export const DEFAULT_OG_IMAGE =
  `${SITE_URL}/images/og/vihaan-writes-cover.jpg`;

/* -------------------------------------------------------------------------- */
/*                              BASE SCHEMA TYPE                              */
/* -------------------------------------------------------------------------- */

export interface SchemaObject {
  [key: string]: any;
}

/* -------------------------------------------------------------------------- */
/*                           ORGANIZATION SCHEMA                              */
/* -------------------------------------------------------------------------- */

export function organizationSchema(): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name: SITE_NAME,

    url: SITE_URL,

    logo: DEFAULT_LOGO,

    image: DEFAULT_LOGO,

    founder: {
      "@type": "Person",

      name: AUTHOR_NAME,
    },

    description:
      "Vihaan Writes is a digital home for books, stories, reflections, memoirs and literary experiences.",

    sameAs: [SITE_URL],
  };
}

/* -------------------------------------------------------------------------- */
/*                              WEBSITE SCHEMA                                */
/* -------------------------------------------------------------------------- */

export function websiteSchema(): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type": "WebSite",

    name: SITE_NAME,

    url: SITE_URL,

    description:
      "Stories, books, reflections and human experiences.",

    publisher: {
      "@type":
        "Organization",

      name: SITE_NAME,
    },

    potentialAction: {
      "@type":
        "SearchAction",

      target: `${SITE_URL}/search?q={search_term_string}`,

      "query-input":
        "required name=search_term_string",
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                              PERSON SCHEMA                                 */
/* -------------------------------------------------------------------------- */

export function authorSchema(): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Person",

    name: AUTHOR_NAME,

    url: SITE_URL,

    image: DEFAULT_LOGO,

    jobTitle:
      "Author & Writer",

    description:
      "Writer, storyteller, memoir author and creator of Vihaan Writes.",

    worksFor: {
      "@type":
        "Organization",

      name: SITE_NAME,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                               BOOK SCHEMA                                  */
/* -------------------------------------------------------------------------- */

interface BookSchemaProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  isbn?: string;
  publishedDate?: string;
}

export function bookSchema({
  title,
  description,
  image,
  slug,
  isbn,
  publishedDate,
}: BookSchemaProps): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Book",

    name: title,

    description,

    image,

    url: `${SITE_URL}/books/${slug}`,

    author: {
      "@type":
        "Person",

      name: AUTHOR_NAME,
    },

    publisher: {
      "@type":
        "Organization",

      name: SITE_NAME,
    },

    ...(isbn && {
      isbn,
    }),

    ...(publishedDate && {
      datePublished:
        publishedDate,
    }),
  };
}

/* -------------------------------------------------------------------------- */
/*                             ARTICLE SCHEMA                                 */
/* -------------------------------------------------------------------------- */

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function articleSchema({
  title,
  description,
  image,
  slug,
  publishedTime,
  modifiedTime,
}: ArticleSchemaProps): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline: title,

    description,

    image,

    url: `${SITE_URL}/stories/${slug}`,

    author: {
      "@type":
        "Person",

      name: AUTHOR_NAME,
    },

    publisher: {
      "@type":
        "Organization",

      name: SITE_NAME,

      logo: {
        "@type":
          "ImageObject",

        url: DEFAULT_LOGO,
      },
    },

    ...(publishedTime && {
      datePublished:
        publishedTime,
    }),

    ...(modifiedTime && {
      dateModified:
        modifiedTime,
    }),
  };
}

/* -------------------------------------------------------------------------- */
/*                             BREADCRUMB SCHEMA                              */
/* -------------------------------------------------------------------------- */

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[]
): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement:
      items.map(
        (
          item,
          index
        ) => ({
          "@type":
            "ListItem",

          position:
            index + 1,

          name:
            item.name,

          item:
            item.url,
        })
      ),
  };
}

/* -------------------------------------------------------------------------- */
/*                             COLLECTION SCHEMA                              */
/* -------------------------------------------------------------------------- */

interface CollectionSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function collectionSchema({
  title,
  description,
  url,
}: CollectionSchemaProps): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "CollectionPage",

    name: title,

    description,

    url,
  };
}

/* -------------------------------------------------------------------------- */
/*                              FAQ SCHEMA                                    */
/* -------------------------------------------------------------------------- */

interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(
  faqs: FAQItem[]
): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      faqs.map(
        (faq) => ({
          "@type":
            "Question",

          name:
            faq.question,

          acceptedAnswer:
            {
              "@type":
                "Answer",

              text:
                faq.answer,
            },
        })
      ),
  };
}

/* -------------------------------------------------------------------------- */
/*                              QUOTE SCHEMA                                  */
/* -------------------------------------------------------------------------- */

export function quoteSchema(
  quote: string
): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "CreativeWork",

    text: quote,

    author: {
      "@type":
        "Person",

      name:
        AUTHOR_NAME,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                           MOBILE APP SCHEMA                                */
/* -------------------------------------------------------------------------- */

export function mobileAppSchema(): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "MobileApplication",

    name:
      "Vihaan Writes Mobile",

    applicationCategory:
      "BooksApplication",

    operatingSystem:
      "Android, iOS",

    author: {
      "@type":
        "Person",

      name:
        AUTHOR_NAME,
    },

    publisher: {
      "@type":
        "Organization",

      name:
        SITE_NAME,
    },

    url:
      `${SITE_URL}/mobile`,
  };
}

/* -------------------------------------------------------------------------- */
/*                          READING LIST SCHEMA                               */
/* -------------------------------------------------------------------------- */

export function readingListSchema(
  books: {
    title: string;
    url: string;
  }[]
): SchemaObject {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "ItemList",

    itemListElement:
      books.map(
        (
          book,
          index
        ) => ({
          "@type":
            "ListItem",

          position:
            index + 1,

          name:
            book.title,

          url:
            book.url,
        })
      ),
  };
}

/* -------------------------------------------------------------------------- */
/*                          JSON-LD GENERATOR                                 */
/* -------------------------------------------------------------------------- */

export function createJsonLd(
  schema:
    | SchemaObject
    | SchemaObject[]
): string {
  return JSON.stringify(
    schema,
    null,
    2
  );
}

/* -------------------------------------------------------------------------- */
/*                           GLOBAL SCHEMAS                                   */
/* -------------------------------------------------------------------------- */

export const GLOBAL_SCHEMAS = [
  organizationSchema(),
  websiteSchema(),
  authorSchema(),
];

/* -------------------------------------------------------------------------- */
/*                         DEFAULT BOOK SCHEMA                                */
/* -------------------------------------------------------------------------- */

export const DEFAULT_BOOK_SCHEMA =
  bookSchema({
    title:
      "My Spouse Before I Met Her",

    description:
      "Karmic clues, dreams and the echoes of her soul.",

    image:
      DEFAULT_OG_IMAGE,

    slug:
      "my-spouse-before-i-met-her",
  });

/* -------------------------------------------------------------------------- */
/*                              EXPORT DEFAULT                                */
/* -------------------------------------------------------------------------- */

const SchemaLibrary = {
  organizationSchema,
  websiteSchema,
  authorSchema,
  bookSchema,
  articleSchema,
  breadcrumbSchema,
  collectionSchema,
  faqSchema,
  quoteSchema,
  mobileAppSchema,
  readingListSchema,
  createJsonLd,
  GLOBAL_SCHEMAS,
};

export default SchemaLibrary;