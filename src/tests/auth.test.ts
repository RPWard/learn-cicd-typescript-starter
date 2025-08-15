import { describe, expect, test } from "vitest";
import { getAPIKey } from 'src/api/auth';
import { IncomingHttpHeaders } from "http";


describe("getAPIKey", () => {
  test("valid API Key", () => {
    const testHeader = { "authorization": "ApiKey 1234567890" };
    const key = getAPIKey(testHeader);
    expect(key).toEqual("1234567890");
  });

  test("malformed API key", () => {
    const testHeader = { "authorization": "ApiKey1234567890" };
    const key = getAPIKey(testHeader);
    expect(key).toBeNull
  });

  test("missing authorization field", () => {
    const testHeader = { "apikey": "ApiKey 1234567890" };
    const key = getAPIKey(testHeader);
    expect(key).toBeNull
  });
});

