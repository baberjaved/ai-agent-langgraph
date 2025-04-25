/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "langgraph-agent",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const environmentVariables = {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY || '', // Default to empty string if not set
    };
    new sst.aws.Nextjs("NextJsLanggraph", {
      environment: environmentVariables
    });
  },
});
