# pdf chunker

```
$ ./pdf-chunker -h
Usage: pdf-chunker <targetFile> [options]

Options:
  --version    Show version number                                     [boolean]
  -o, --out    Out file path
  -z, --zoom   Zoom scale (default is 1)
  -c, --chunk  Chunk size (default is 2)
  -h, --help   Show help                                               [boolean]

Examples:
  pdf-chunker foo.pdf             chunk pdf file and stdout
  pdf-chunker foo.pdf -o out.pdf  chunk pdf file and write to 'out.pdf'
```


## test usage

./pdf-chunker ./test_files/example.pdf > ./test_files/example_out.pdf

- docker

docker run --rm -v"$(pwd)/test_files:/works/test_files" pdf-chunker ./test_files/example.pdf > ./test_files/example_out_docker.pdf