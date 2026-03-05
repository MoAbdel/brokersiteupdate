export async function getResponseErrorMessage(
  response: Response,
  fallback: string
): Promise<string> {
  try {
    const payload = await response.json();
    if (typeof payload?.error === 'string' && payload.error.trim()) {
      return payload.error.trim();
    }
  } catch {
    // Ignore JSON parsing failures and fall back to the default message.
  }

  return fallback;
}
