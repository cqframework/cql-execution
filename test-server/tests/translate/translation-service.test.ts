import { describe, it, expect, afterEach, vi, MockInstance } from 'vitest';
import { translateLibrary } from '@src/translate/translation-service';

describe('translation-service.translateLibrary', () => {
  const url = 'http://localhost:8080/cql/translator?result-types=true';
  const cql = "library Foo version '1.0.0'";

  let mockFetch: MockInstance;

  beforeEach(() => {
    mockFetch = vi.fn();
    vi.stubGlobal('fetch', mockFetch);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('returns parsed JSON when content-type is json', async () => {
    const jsonPayload = { elm: { library: { identifier: { id: 'Foo', version: '1.0.0' } } } };
    mockFetch.mockResolvedValue({
      headers: {
        get: (k: string) =>
          k.toLowerCase() === 'content-type' ? 'application/elm+json; charset=utf-8' : null
      },
      json: vi.fn().mockResolvedValue(jsonPayload),
      text: vi.fn()
    });

    const elm = await translateLibrary(cql);

    expect(elm).toEqual(jsonPayload);
    expect(mockFetch).toHaveBeenCalledTimes(1);

    const [calledUrl, init] = mockFetch.mock.calls[0] as [string, any];
    expect(calledUrl).toBe(url);
    expect(init.method).toBe('POST');
    expect(init.headers).toMatchObject({
      'Content-Type': 'application/cql',
      Accept: 'application/elm+json'
    });
    expect(init.body).toBe(cql);
  });

  it('throws with response text when content-type is not json', async () => {
    const errorText = 'Translator error details';

    mockFetch.mockResolvedValue({
      headers: {
        get: (k: string) => (k.toLowerCase() === 'content-type' ? 'text/plain' : null)
      },
      json: vi.fn(),
      text: vi.fn().mockResolvedValue(errorText)
    });

    await expect(translateLibrary(cql)).rejects.toThrow(
      `Failed to translate. Received translation response: ${errorText}`
    );
  });
});
