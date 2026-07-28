import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { BlogSchema } from "@/validators/blogs.validator";
import { BlogService } from "@/services/blogs.service";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    request: NextRequest,
    { params }: Props
) {
    try {

        const { id } =
            await params;

        const blog =
            await BlogService.getById(id);

        return ApiResponse.success(blog);

    } catch (error) {

        return ApiResponse.error(error);

    }
}

export async function PATCH(
    request: NextRequest,
    { params }: Props
) {
    try {

        const { id } =
            await params;

        const body =
            await request.json();

        const dto =
            BlogSchema.parse(body);

        const blog =
            await BlogService.update(
                id,
                dto
            );

        return ApiResponse.success(blog);

    } catch (error) {

        return ApiResponse.error(error);

    }
}

export async function DELETE(
    request: NextRequest,
    { params }: Props
) {
    try {

        const { id } =
            await params;

        await BlogService.delete(id);

        return ApiResponse.success(
            null,
            "Blog deleted successfully."
        );

    } catch (error) {

        return ApiResponse.error(error);

    }
}