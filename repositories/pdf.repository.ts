import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export interface RentalQuotationPdfData {
    customerName: string;
    email: string;
    phone: string;

    pickupLocation: string;
    dropLocation: string;

    vehicleType: string;

    pickupDate: string;
    pickupTime: string;

    distance: string;
    duration: string;

    estimatedFare: number;
}

export class PdfRepository {
    async generateQuotation(
        data: RentalQuotationPdfData
    ): Promise<Buffer> {
        const pdf = await PDFDocument.create();

        const page = pdf.addPage([595, 842]);

        const font = await pdf.embedFont(StandardFonts.Helvetica);

        let y = 790;

        page.drawText("EZORA TOURS & TRAVELS", {
            x: 50,
            y,
            size: 20,
            font,
            color: rgb(0.05, 0.28, 0.40),
        });

        y -= 35;

        page.drawText("Rental Quotation", {
            x: 50,
            y,
            size: 15,
            font,
        });

        y -= 45;

        const rows = [
            ["Customer", data.customerName],
            ["Email", data.email],
            ["Phone", data.phone],
            ["Pickup", data.pickupLocation],
            ["Destination", data.dropLocation],
            ["Vehicle", data.vehicleType],
            ["Pickup Date", data.pickupDate],
            ["Pickup Time", data.pickupTime],
            ["Distance", data.distance],
            ["Duration", data.duration],
            ["Estimated Fare", `₹ ${data.estimatedFare.toFixed(2)}`],
        ];

        rows.forEach(([label, value]) => {
            page.drawText(label, {
                x: 50,
                y,
                size: 11,
                font,
            });

            page.drawText(value, {
                x: 190,
                y,
                size: 11,
                font,
            });

            y -= 28;
        });

        const bytes = await pdf.save();

        return Buffer.from(bytes);
    }
}