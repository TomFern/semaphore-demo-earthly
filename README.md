# Semaphore Earthly Demo

[![Build Status](https://semaphore-demos.semaphoreci.com/badges/semaphore-demo-earthly/branches/final.svg)](https://semaphore-demos.semaphoreci.com/projects/semaphore-demo-earthly)

This repository shows how to configure [Earthly](https://earthly.dev/) in Semaphore CI/CD.

The `final` branch shows the complete config.

## Running Locally

Fork the repository and clone it. Switch to the `final` branch and install Earthly in your machine.

Build dependencies: `earthly +build`
Run unit tests: `earthly +tests`
Run integration tests: `earthly +integration-tests`
Build a docker image: `earthly +docker`

## License

MIT License

Copyright (c) 2021 Rendered Text

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




