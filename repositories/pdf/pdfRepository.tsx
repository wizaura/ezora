import { renderToBuffer } from "@react-pdf/renderer";

import RentalQuotationPdf, {
    RentalQuotationPdfData,
} from "./RentalQuotationPdf";

export class PdfRepository {
    async generateQuotation(
        data: RentalQuotationPdfData
    ): Promise<Buffer> {
        const pdfBuffer = await renderToBuffer(
            <RentalQuotationPdf data={data} />
        );

        return Buffer.from(pdfBuffer);
    }
}