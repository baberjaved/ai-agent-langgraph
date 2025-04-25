## Prerequisites
1. Add AWS API key and secret to your env variables, you can add the following to your ~/.zshrc or ~/.bashrc;
    ```
    export AWS_ACCESS_KEY_ID='YOUR_AWS_KEY_ID'
    export AWS_SECRET_ACCESS_KEY='YOUR_AWS_SECRET_ACCESS_KEY'
    ```

2. Make two .env for local and prod such as;
    ```
    .env.local
    .env.prod
    ```

3. Have your Anthropic API key in both of above .env files;
    ```ANTHROPIC_API_KEY=YOUR_ANTHROPIC_API_KEY```

## Setup

1. Clone the project.
2. cd into project and run;
    ```
    npm install
    ```
3. Run the following command to deploy the project onto AWS;
    ```
    npx sst deploy --stage production
    ```
4. Once done, test by making an API POST request like;
    ```
    curl -X POST https://d1cbw6k8mphi24.cloudfront.net/api/chat \
    -H "Content-Type: application/json" \
    -d '{"prompt": "Tell me something interesting about space?"}'
    ```
