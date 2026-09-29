import { embedWatermarkToPngBytes } from '@ikenxuan/watermark'

/**
 * 将隐水印嵌入到 PNG 图片中。
 * @param pngBytes PNG 图片的 Buffer 或 Uint8Array
 * @param watermarkText 要嵌入的水印文本
 * @returns 写入后的 PNG Buffer，失败返回 null
 */
export const embedWatermark = (pngBytes: Buffer | Uint8Array, watermarkText: string): Buffer | null => {
  try {
    const input = pngBytes instanceof Buffer ? pngBytes : Buffer.from(pngBytes)
    const result = embedWatermarkToPngBytes(input, watermarkText)
    return result instanceof Buffer ? result : Buffer.from(result.buffer)
  } catch {
    return null
  }
}
