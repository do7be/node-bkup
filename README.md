# node-bkup
A simple CLI for file bkup command.

## Installation

```
$ npm install -g node-bkup
```

## Usage

```
  Usage: bkup [options] <fileName>
         then create fileName.YYYYMMDD

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -o, --org      create fileName.org
    -b, --bak      create fileName.bak
    -d, --detail   create fileName.YYYYMMDDHHmmss
```

## Example

```
$ date
Mon Oct 12 10:10:10 JST 2015

$ ls
tmp.txt

$ bkup tmp.txt
created: tmp.txt.20151012

$ ls
tmp.txt tmp.txt.20151012
```

## MIT LICENSE

Copyright © 2015 do7be licensed under [MIT](http://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.