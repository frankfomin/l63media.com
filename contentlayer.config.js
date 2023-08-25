import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import("contentlayer/source-files").ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "project/**/*.mdx",
  contentType: "mdx",
  fields: {
    projectName: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    videoPath: {
      type: "string",
    },
    rainbow: {
      type: "boolean",
    },
    triColor: {
      type: "boolean",
    },
    purple: {
      type: "boolean",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
});
