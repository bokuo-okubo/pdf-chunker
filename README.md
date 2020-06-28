# pdf chunker

```
$ ./pdf-chunker -h
Usage:
   pdf-chunker <targetFile> [options] | pdf-chunker -i <sourceDir> -o <outDir>

Options:
  --version    Show version number                                     [boolean]
  -o, --out    Out dir
  -i, --in     input dir
  -z, --zoom   Zoom scale (default is 1)
  -c, --chunk  Chunk size (default is 2)
  -h, --help   Show help                                               [boolean]

Examples:
  pdf-chunker foo.pdf                       chunk pdf file and stdout
  pdf-chunker -i ./{path_to_input_dir} -o   batch convert in input_dir
  ./{path_to_output_dir}
```


## test usage

- node

```console
yarn # install node_modules

./pdf-chunker ./test_files/example.pdf > ./test_files/example_out.pdf
```

- [docker](https://hub.docker.com/r/bko712/pdf-chunker)

  - single
  ```console
  docker pull bko712/pdf-chunker

  docker run --rm -v "$(pwd)/test_files:/works/test_files" bko712/pdf-chunker ./test_files/example.pdf > ./test_files/example_out_docker.pdf
  ```

  - multi
  ```
  docker run --rm -it -v "$(pwd)/test_files:/works/test_files" bko712/pdf-chunker -i './test_files/multi' -o './test_files/multi_out'
  ```