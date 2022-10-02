#!/bin/bash
PROTO_DIR=./proto

yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=$(yarn bin)/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DIR} \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto