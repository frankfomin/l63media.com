// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
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
    projectName: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    vimeoPath: {
      type: "number"
    },
    videoPath: {
      type: "string"
    },
    path: {
      type: "string",
      required: true
    },
    mobile: {
      type: "boolean"
    },
    rainbow: {
      type: "boolean"
    },
    triColor: {
      type: "boolean"
    },
    purple: {
      type: "boolean"
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
//# sourceMappingURL=compiled-contentlayer-config-OOVIIP2D.mjs.map
