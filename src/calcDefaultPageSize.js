const _ = require("lodash");

const calcDefaultPageSize = (chunkedPages) => {
  const culcSpreadPageSize = (spread) => {
    return spread.reduce(
      (size, page) => {
        const { width, height } = page.getSize();
        return [size[0] + width, size[1] > height ? size[1] : height];
      },
      [0, 0]
    );
  };

  const sizes = chunkedPages.map(culcSpreadPageSize);
  const maxSizes = _.zip(...sizes).map((ary) => Math.max(...ary));

  return maxSizes;
};

module.exports = calcDefaultPageSize;
