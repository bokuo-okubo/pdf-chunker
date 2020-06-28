const { PDFDocument } = require("pdf-lib");
const _ = require("lodash");
const calcDefaultPageSize = require("./calcDefaultPageSize");

const createChunkedPdf = async (sourcePdfBytes, chunkSize, zoom_scale) => {
  // for out
  const outPdf = await PDFDocument.create();

  // load target pdf and chunked two pages
  const sourcePdf = await PDFDocument.load(sourcePdfBytes);
  const sourcePages = sourcePdf.getPages();
  const chunkedSourcePages = _.chunk(sourcePages, chunkSize);

  const forOutPageSizes = calcDefaultPageSize(chunkedSourcePages);

  for (const spread of chunkedSourcePages) {
    // setup page for out
    const page = outPdf.addPage();
    page.setSize(...forOutPageSizes);

    // add content into page per chunked content
    let xCursor = 0;
    for await (const content of spread) {
      const embed = await outPdf.embedPage(content);
      const dims = embed.scale(zoom_scale);
      page.drawPage(embed, {
        ...dims,
        x: xCursor,
        y: 0,
      });
      xCursor = content.getSize().width;
    }
  }

  const pdfBytes = await outPdf.save();

  return pdfBytes;
};

module.exports = createChunkedPdf;
