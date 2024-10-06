// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { boolean } from "zod";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "project/**/*.mdx",
  contentType: "mdx",
  fields: {
    homePage: {
      type: "boolean",
      required: true
    },
    deprecated: {
      type: "boolean"
    },
    projectName: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    videoPath: {
      type: "string",
      required: true
    },
    path: {
      type: "string",
      required: true
    },
    mobile: {
      type: "boolean"
    },
    projectStyle: {
      type: "string",
      required: true
    },
    imagePath: {
      type: "string",
      required: true
    },
    bg1: {
      type: "string",
      required: true
    },
    bg2: {
      type: "string",
      required: true
    },
    rotation: {
      type: "string",
      required: true
    },
    bg3: {
      type: "string",
      required: true
    },
    order: {
      type: "number",
      required: true
    },
    lineSpacing: {
      type: "string",
      required: true
    },
    specAd: {
      type: "boolean",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc]
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5QTAWJFO.mjs.map
