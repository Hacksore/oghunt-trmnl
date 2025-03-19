FROM node:20-slim AS base
ENV PNPM_HOME="/app/.pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# install lib atomic
RUN apt-get update && apt-get install -y libatomic1

WORKDIR /app
COPY . /app

RUN pnpm install

CMD pnpm dev
