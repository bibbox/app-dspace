/**
 * The contents of this file are subject to the license and copyright
 * detailed in the LICENSE and NOTICE files at the root of the source
 * tree and available online at
 *
 * http://www.dspace.org/license/
 */
// This file is based on environment.template.ts provided by Angular UI
export const environment = {
  // Default to using the local REST API (running in Docker)
  rest: {
    ssl: true,
    host: 'ds-rest.silicolabv4.bibbox.org',
    port: 443,
    // NOTE: Space is capitalized because 'namespace' is a reserved string in TypeScript
    nameSpace: '/server'
  }
};