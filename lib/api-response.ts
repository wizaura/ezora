import { NextResponse } from "next/server";
import { AppError } from "./errors";

export interface ApiSuccess<T> {
    success: true;
    message: string;
    data: T;
}

export interface PaginatedResponse<T> {
    success: true;
    message: string;
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface ApiFailure {
    success: false;
    message: string;
    code: string;
}

export class ApiResponse {
    static success<T>(
        data: T,
        message = "Success",
        status = 200
    ) {
        return NextResponse.json(
            {
                success: true,
                message,
                data,
            },
            {
                status,
            }
        );
    }

    static error(error: unknown) {
        console.error(error);

        if (error instanceof AppError) {
            return NextResponse.json(
                {
                    success: false,
                    message: error.message,
                    code: error.code,
                },
                {
                    status: error.statusCode,
                }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
                code: "INTERNAL_SERVER_ERROR",
            },
            {
                status: 500,
            }
        );
    }
}