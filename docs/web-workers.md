### Rendering large documents in the browser

If you need to render documents with 30 pages or more in the browser, using react-pdf directly in React can occupy the browser's main thread for a long time.
This can lead to unresponsive UI and browsers offering the user to abort the script.
To avoid this, you should render large documents inside a web worker.
Web workers are executed in separate threads, and therefore do not block the main thread of the browser.
This way, the UI can stay responsive while the PDF is being rendered.
For an example on how to run react-pdf in a web worker, see this [blog post](https://dev.to/simonhessel/creating-pdf-files-without-slowing-down-your-app-a42).
