import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/api-response";
import { BlogSchema } from "@/validators/blogs.validator";
import { BlogService } from "@/services/blogs.service";

export async function GET() {
    try {

        const blogs =
            await BlogService.getAll();

        return ApiResponse.success(blogs);

    } catch (error) {

        return ApiResponse.error(error);

    }
}

export async function POST(
    request: NextRequest
) {
    try {

        const body =
            await request.json();

        const dto =
            BlogSchema.parse(body);

        const blog =
            await BlogService.create(dto);

        return ApiResponse.success(blog);

    } catch (error) {

        return ApiResponse.error(error);

    }
}