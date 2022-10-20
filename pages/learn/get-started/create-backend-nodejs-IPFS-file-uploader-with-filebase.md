import { Code } from "components";
import { Bleed } from "nextra-theme-docs";
import { Callout } from "nextra-theme-docs";

# Create A Backend NodeJS IPFS File Uploader With Filebase

**By** [**Manny**](https://twitter.com/codingwithmanny)
________________

# IPFS & Filebase
If you’d like to understand IPFS a bit better, check out the last article written to easily understand & upload files to IPFS with filebase. This tutorial will focus on creating a Node Backend API that allows for uploading to IPFS with Filebase.

<img src="/docs/learn/ww1.png" alt="ipfs" class="responsive-pic" width="700" />

## Requirements
Before we start, we need to make sure that you have the following installed locally on your computer.

- [NVM](https://github.com/nvm-sh/nvm) or [Node v16.15.1](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Postman](https://www.postman.com/) (Optional - will also show with curl)

## Node Project Setup
The first step is to setup our project from scratch with Express & Typescript.

```bash
mkdir node-filebase-ipfs-uploader;
cd node-filebase-ipfs-uploader;
mkdir bucket; # Folder we'll be using for local testing
touch bucket/.gitkeep; # To make sure we keep the folder and not its file
mkdir src; # Where our code will live
echo "16.15.1" > .nvmrc;
nvm install; # ignore if you already have Node 16.15.1 installed
yarn init -y;
git init;
echo "node_modules\n.env\nbucket/*\n\!bucket/.gitkeep\nbuild\n*.log" > .gitignore;
yarn add aws-sdk cors express dotenv multer multer-s3 typescript @aws-sdk/client-s3 @types/cors @types/express @types/multer-s3 @types/node;
yarn add -D nodemon ts-node;
./node_modules/.bin/tsc --init; # generates our tsconfig.json file
```

Now that we have our project setup, let’s make a modification to our TypeScript config file to adjust for the output folder to be set to `./build`.

File: `./tsconfig.json`

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    "outDir": "./build" /* Specify an output folder for all emitted files. */,
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```
## Creating Initial Server Endpoints
Now that we have our initial project configuration and files setup, we’re going to create two new files that host both the endpoints and the server respectively.

The first file is the endpoints and our initial Express server configurations with a single get endpoint on the root to verify that the server is working.

File: `./src/app.ts`

```typescript
// Imports
// ========================================================
import { config } from "dotenv";
import express from "express";
import cors from "cors";

// ENV VARS
// ========================================================
config();

const NODE_ENV: string = process.env.NODE_ENV || "development";

// Init
// ========================================================
/**
 * Initial ExpressJS
 */
const app = express();

// Middlewares
// ========================================================
/**
 * Allows for requests from other servers
 */
app.use(cors());

// Endpoints / Routes
// ========================================================
/**
 * Main endpoint to verify that things are working and what environment mode it's running in
 */
app.get("/", (_req, res) => res.send({ environment: NODE_ENV }));

// Exports
// ========================================================
export default app;
```

Our second file imports the endpoints and runs them on a specific server. Typically you might have seen both of these in the same files, but for testing (covered in another article), it’s typically easier to run unit and integration tests without the server running to separate concerns.

File: `./src/server.ts`

```typescript
// Imports
// ========================================================
import app from "./app";
import { config } from "dotenv";

// ENV VARS
// ========================================================
config();
const NODE_ENV: string = process.env.NODE_ENV || "development";
const PORT: number =
  NODE_ENV === "production" ? 8080 : parseInt(process.env.PORT || "5001", 10);

// Server
// ========================================================
app.listen(PORT, () =>
  console.log(`Listening on PORT ${PORT}\nEnvironment: ${NODE_ENV}`)
);
```

Next, let’s make it easier for ourselves by adding a script command to our `package.json` file, so we can run `yarn dev`.

File: `./package.json`

```bash
{
  "name": "node-filebase-ipfs-uploader",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon src/server.ts"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.113.0",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/multer-s3": "^3.0.0",
    "@types/node": "^18.0.0",
    "aws-sdk": "^2.1157.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "multer": "^1.4.5-lts.1",
    "multer-s3": "^3.0.1",
    "typescript": "^4.7.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.16",
    "ts-node": "^10.8.1"
  }
}
```
Now if we run `yarn dev` and open up our browser to `http://localhost:5001` we should see our server running.

``` bash
# /node-filebase-ipfs-uploader
yarn dev;

# Expected Output
# $ nodemon src/server.ts
# [nodemon] 2.0.16
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching path(s): *.*
# [nodemon] watching extensions: ts,json
# [nodemon] starting `ts-node src/server.ts`
# Listening on PORT 5001
# Environment: development
```
<img src="/docs/learn/ww2.png" alt="ipfs" class="responsive-pic" width="700" />

Our server is now working, now we need to add upload functionality.

Adding Local File Upload
In order to get a file uploader code setup, we’re going to take advantage of an npm package called multer. [Multer](https://www.npmjs.com/package/multer) is a middleware that makes developer’s lives easier when handling files. It is originally done for just local development, but there are additional extensions that support AWS S3, which we’ll be using for Filebase.

We’re going to modify our original endpoints file to include a new POST upload endpoint that utilizes multer.

File: `./src/app.ts`

```typescript
// Imports
// ========================================================
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";

// ENV VARS
// ========================================================
config();
const NODE_ENV: string = process.env.NODE_ENV || "development";
const FILE_DEST: string = process.env.FILE_DEST || "bucket";
const FILE_SERVER_URL: string =
  process.env.FILE_SERVER_URL || "http://localhost:5002";

// Init
// ========================================================
/**
 * Initial ExpressJS
 */
const app = express();

// Middlewares
// ========================================================
/**
 * Allows for requests from other servers
 */
app.use(cors());

/**
 * Main uploader middleware that configures the final `destination` of the file and how the `filename` would be set once saved
 */
const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, file, callback) => {
      callback(null, FILE_DEST);
    },
    filename: (_req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
});

// Endpoints / Routes
// ========================================================
/**
 * Main endpoint to verify that things are working and what environment mode it's running in
 */
app.get("/", (_req, res) => res.send({ environment: NODE_ENV }));

/**
 * Upload endpoint that accepts an input file field of `file`
 */
app.post("/upload", upload.single("file"), (req, res) => {
  const responseData = {
    file: req.file?.originalname,
    url: `${FILE_SERVER_URL}/${req.file?.originalname}`,
  };

  return res.json({ data: responseData });
});

// Exports
// ========================================================
export default app;
```
While the server is running, let’s make an upload.

**Curl:**

```bash
# /node-filebase-ipfs-uploader

curl --location --request POST 'http://localhost:5001/upload' \
--form 'file=@"/full/path/to/node-filebase-ipfs-uploader/test/test-forever.jpg"';

# Expected Output
# {"data":{"file":"test-forever.jpg","url":"http://localhost:5002/test-forever.jpg"}}
```

**Postman:**

<img src="/docs/learn/ww3.png" alt="ipfs" class="responsive-pic" width="700" />

To confirm that the file has also been uploaded, we can check our `bucket` folder to see a new `test-forever.jpg` created. We can also create a server on port 5002 to see that our file is uploaded by running the following:

```bash
# /node-filebase-ipfs-uploader
npx http-server -p 5002 bucket;

# Expected Output
# npx: installed 39 in 3.094s
# Starting up http-server, serving bucket
# 
# http-server version: 14.1.1
# 
# http-server settings: 
# CORS: disabled
# Cache: 3600 seconds
# Connection Timeout: 120 seconds
# Directory Listings: visible
# AutoIndex: visible
# Serve GZIP Files: false
# Serve Brotli Files: false
# Default File Extension: none
# 
# Available on:
#   http://127.0.0.1:5002
#   http://10.0.0.6:5002
# Hit CTRL-C to stop the server

```
If we open up `http://localhost:5002/test-forever.jpg` we can see in our browser that image is there.

<img src="/docs/learn/ww4.png" alt="ipfs" class="responsive-pic" width="700" />

Now that we have the base setup for our local uploads, we’re going to leverage multer-s3 to utilize Filebase’s AWS S3 Client compatibility.

## Adding Filebase IPFS Support

Before we can add the code, we’ll need to create a new account at Filebase.com. Once an account has been created, we’ll need to create a new **bucket**, with the **Storage Network** set to **IPFS (All data is public)**.

<img src="/docs/learn/FmrYcQ1KI.png" alt="ipfs" class="responsive-pic" width="700" />

<img src="/docs/learn/ww5.png" alt="ipfs" class="responsive-pic" width="700" />

<img src="/docs/learn/ww6.png" alt="ipfs" class="responsive-pic" width="700" />

Once we have our newly created bucket, we’re going to take note of the name so that we can use it later, and then get our Access Keys.

<img src="/docs/learn/ww7.png" alt="ipfs" class="responsive-pic" width="700" />

Now that we have the values, we’re going to create a dot environment file `.env`, but we’ll create a template (.env.example) for it because we should never save our `.env` to our git repository.

```bash
# /node-filebase-ipfs-uploader

echo "PORT=5001\nNODE_ENV=development\nFILEBASE_ACCESS_KEY=key\nFILEBASE_SECRET_KEY=secret\nFILEBASE_BUCKET=bucket\nFILEBASE_REGION=us-east-1\nFILE_SERVER_URL=http://localhost:5002" > .env.example;
cp .env.example .env;
```

In our copied .env we’ll need to fill it out with the values we just got from Filebase.

File: `./.env`

```
PORT=5001
NODE_ENV=development
FILEBASE_ACCESS_KEY=<YOUR-FILEBASE-ACCESS-KEY>
FILEBASE_SECRET_KEY=<YOUR-FILEBASE-SECRET-KEY>
FILEBASE_BUCKET=<YOUR-FILEBASE-BUCKET-NAME>
FILEBASE_REGION=us-east-1
FILE_SERVER_URL=http://localhost:5002
```

What we want to do is create a way so that when we’re running in `development` mode that the files upload to our local `bucket` folder, but when we’re in production mode, the files upload to IPFS with Filebase. To do this, we’re going to take advantage of our `NODE_ENV` and modify our `upload` middleware to use a different multer configuration when the `NODE_ENV` is set to production. More specifically, we’ll be using an extension of `multer` called `multer-s3` that handles requests regularly to AWS S3 but because Filebase is an AWS S3 compatible service, we’ll just configure it to point to Filebase.

File: `./src/app.ts`

```typescript
// Imports
// ========================================================
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

// ENV VARS
// ========================================================
config();
const NODE_ENV: string = process.env.NODE_ENV || "development";
const FILE_DEST: string = process.env.FILE_DEST || "bucket";
const FILE_SERVER_URL: string =
  process.env.FILE_SERVER_URL || "http://localhost:5002";
const FILEBASE_BUCKET = process.env.FILEBASE_BUCKET || "";
// Configured AWS S3 Client For Filebase
const s3 = new S3Client({
  endpoint: "https://s3.filebase.com",
  region: process.env.FILEBASE_REGION || "",
  credentials: {
    accessKeyId: process.env.FILEBASE_ACCESS_KEY || "",
    secretAccessKey: process.env.FILEBASE_SECRET_KEY || "",
  },
});

// Init
// ========================================================
/**
 * Initial ExpressJS
 */
const app = express();

// Middlewares
// ========================================================
/**
 * Allows for requests from other servers
 */
app.use(cors());

/**
 * Main uploader middleware that configures the final `destination` of the file and how the `filename` would be set once saved
 */
const upload =
  // If production use the s3 client
  NODE_ENV === "production"
    ? multer({
        storage: multerS3({
          s3: s3,
          bucket: FILEBASE_BUCKET,
          metadata: (_req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
          },
          key: (_req, file, cb) => {
            cb(null, file.originalname);
          },
        }),
      })
    : multer({
        storage: multer.diskStorage({
          destination: (_req, file, callback) => {
            callback(null, FILE_DEST);
          },
          filename: (_req, file, callback) => {
            callback(null, file.originalname);
          },
        }),
      });

// Endpoints / Routes
// ========================================================
/**
 * Main endpoint to verify that things are working and what environment mode it's running in
 */
app.get("/", (_req, res) => res.send({ environment: NODE_ENV }));

/**
 * Upload endpoint that accepts an input file field of `file`
 */
app.post("/upload", upload.single("file"), async (req, res) => {
  const responseData = {
    file: req.file?.originalname,
    url: `${FILE_SERVER_URL}/${req.file?.originalname}`,
  };

  // If production retrieve file data to get the ipfs CID
  if (NODE_ENV === "production") {
    const commandGetObject = new GetObjectCommand({
      Bucket: FILEBASE_BUCKET,
      Key: req.file?.originalname,
    });
    const response = await s3.send(commandGetObject);
    responseData.url = `ipfs://${response.Metadata?.cid}`;
  }

  return res.json({ data: responseData });
});

// Exports
// ========================================================
export default app;
```

Now, in order to test it, we just need to create a different start script that passes a new `NODE_ENV`. To do this, we’ll need to modify our `package.json`

File: `./package.json`

```bash
{
  "name": "node-filebase-ipfs-uploader",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon src/server.ts",
    "start": "export NODE_ENV=production && tsc && node build/server.js"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.113.0",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/multer-s3": "^3.0.0",
    "@types/node": "^18.0.0",
    "aws-sdk": "^2.1157.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "multer": "^1.4.5-lts.1",
    "multer-s3": "^3.0.1",
    "typescript": "^4.7.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.16",
    "ts-node": "^10.8.1"
  }
}
```
Now when we run the following we should see our server running on port 8080.

```bash
# /node-filebase-ipfs-uploader

yarn start;

# Expected Output
# yarn run v1.22.18
# $ export NODE_ENV=production && tsc && node build/server.js
# Listening on PORT 8080
# Environment: production
```

If we try uploading our file again with curl or Postman with the new address, we should get a different result.

**Curl:**
```bash
# /node-filebase-ipfs-uploader

curl --location --request POST 'http://localhost:8080/upload' \
--form 'file=@"/full/path/to/node-filebase-ipfs-uploader/test/test-forever.jpg"';

# Expected Output
# {"data":{"file":"test-forever.jpg","url":"ipfs://QmY8UXb7Nka5VWkXXRAMC1DQtamc1s8xzcjoQY6GaEbTdn"}}
```

**Postman:**

<img src="/docs/learn/ww8.png" alt="ipfs" class="responsive-pic" width="700" />

Seeing that IPFS url, we can go to it directly and see that it’s actually persisted on the decentralized storage.

```
https://ipfs.filebase.io/ipfs/bafybeierozrtdlir5ywdguah573ga25a7tzzhqeh7kvlvfx2y2wqymdj7u
```

<img src="/docs/learn/ww9.png" alt="ipfs" class="responsive-pic" width="700" />

There you have it, we built a Backend IPFS File Uploader with Filebase.

### What’s Next?

Now that you have the backend, the next step is to build a frontend that communicates with the backend.

Another aspect that could be worked on is the deployment of the backend to either a service like Digital Ocean with Docker, or Netlify with Edge Functions.
