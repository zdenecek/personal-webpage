---
title: PBN - Portable Bridge Notation files Parser
project_tags: C++|Boost.ProgramOptions|Boost.Test|CMake|Bridge
summary: |
    A C++ application for parsing, manipulating and validating PBN files. A university project, there is still a lot of work to be done.
github: https://github.com/zdenecek/pbn
priority: 90
---
## PBN - Portable Bridge Notation Parser

PBN is a command line tool for working with Portable Bridge Notation files.

Credit project (zápočtový program) for Cpp Programming course at MFF Cuni.


### Supported functions

- parse a file and validate it
- printing overview information about a file
- stripping a file of unnecessary parts

### Features plan

- creating board analyses in a file
- exports to pdf, html
- stricter adherence to PBN standard (currently it is not fully compliant)
  - validate
  - support more obscure import variant
  - check used features against declared version
- pbn generation using external tools (e.g. Bigdeal)
