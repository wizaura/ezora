import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File | null;

        const folder =
            (formData.get("folder") as string) ?? "ezora";

        if (!file) {
            return NextResponse.json(
                {
                    success: false,
                    message: "No file uploaded",
                },
                {
                    status: 400,
                }
            );
        }

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes);

        const upload = await new Promise<any>(
            (resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        {
                            folder,
                            resource_type: "image",
                        },
                        (error, result) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    )
                    .end(buffer);
            }
        );

        return NextResponse.json({
            success: true,
            data: {
                url: upload.secure_url,
                publicId: upload.public_id,
                width: upload.width,
                height: upload.height,
                format: upload.format,
            },
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Image upload failed",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(req: Request) {
    try {
        const { publicId } = await req.json();

        if (!publicId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Public ID is required.",
                },
                { status: 400 }
            );
        }

        await cloudinary.uploader.destroy(publicId);

        return NextResponse.json({
            success: true,
            message: "Image deleted successfully.",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to delete image.",
            },
            {
                status: 500,
            }
        );
    }
}