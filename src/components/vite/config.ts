import { ObjectFile } from 'projen'

export interface ViteConfigOptions {
  readonly path?: string
}

export class ViteConfigFile extends ObjectFile {}
