export async function translateLibrary(cql: string): Promise<any> {
  const upstream = await fetch('http://localhost:8080/cql/translator?result-types=true', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/cql',
      Accept: 'application/elm+json'
    },
    body: cql
  });

  const contentType = upstream.headers.get('content-type') ?? '';
  if (contentType.includes('json')) {
    return upstream.json();
  } else {
    const text = await upstream.text();
    throw new Error(`Failed to translate. Received translation response: ${text}`);
  }
}
