import APIError from '../../errors/APIError';
import delay from '../../utils/delay';
class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay();

    const response = await fetch(`${this.baseUrl}${path}`);

    let body = null;
    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json'))
      body = await response.json();

    if (response.ok)
      return body;

    throw new APIError(response, body);
  }
}

export default HttpClient;
