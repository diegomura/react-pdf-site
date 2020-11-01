import React from 'react'
import pdfjs from 'pdfjs-dist'
import styled from '@emotion/styled'
import Page from 'react-pdf/dist/Page'
import { pdf } from '@react-pdf/renderer'
import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.js'
import Document from 'react-pdf/dist/Document'

import PageNavigator from './PageNavigator'

pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker()

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`

const DocumentWrapper = styled.div`
  flex: 1;
  padding: 1em;
  display: flex;
  z-index: 500;
  align-items: center;
  justify-content: center;
`

const Message = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1000;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: all 1s;
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: ${props => (props.active ? 'all' : 'none')};
`

class PDFViewer extends React.Component {
  state = {
    loading: true,
    document: null,
    numPages: null,
    currentPage: 1
  }

  componentDidMount() {
    this.renderDocument(this.props.document)
  }

  componentWillReceiveProps(newProps) {
    // Don't update if document didn't change
    if (this.props.document === newProps.document) return

    this.renderDocument(newProps.document)
  }

  renderDocument = doc => {
    if (!doc) {
      this.setState({ document: null })
      return
    }

    this.setState({ loading: true })

    try {
      pdf(doc)
        .toBlob()
        .then(blob => {
          const url = URL.createObjectURL(blob)

          if (this.props.onUrlChange) {
            this.props.onUrlChange(url)
          }

          this.setState({ document: url, loading: false })
        })
    } catch (error) {
      this.props.onRenderError && this.props.onRenderError(error.message)
    }
  }

  onDocumentLoad = ({ numPages }) => {
    const { currentPage } = this.state

    this.setState({
      numPages,
      currentPage: Math.min(currentPage, numPages)
    })
  }

  onPreviousPage = () => {
    this.setState(state => ({
      currentPage: state.currentPage - 1
    }))
  }

  onNextPage = () => {
    this.setState(state => ({
      currentPage: state.currentPage + 1
    }))
  }

  render() {
    return (
      <Wrapper>
        <Message active={this.state.loading}>Rendering PDF...</Message>
        <Message active={!this.state.loading && !this.props.document}>You are not rendering a valid document</Message>
        <DocumentWrapper>
          <Document file={this.state.document} onLoadSuccess={this.onDocumentLoad} {...this.props}>
            <Page renderMode="svg" pageNumber={this.state.currentPage} />
          </Document>
        </DocumentWrapper>
        <PageNavigator
          currentPage={this.state.currentPage}
          numPages={this.state.numPages}
          onNextPage={this.onNextPage}
          onPreviousPage={this.onPreviousPage}
        />
      </Wrapper>
    )
  }
}

PDFViewer.defaultProps = {
  document: null
}

export default PDFViewer
