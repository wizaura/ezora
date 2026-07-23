"use client";

import Image from "next/image";
import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";
import {
    BadgeCheck,
    BadgeX,
    Pencil,
    Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { VehicleTableItem } from "./types";

export const FleetColumns: ColumnDef<VehicleTableItem>[] = [
    {
        accessorKey: "featuredImage",
        header: "",
        cell: ({ row }) => (
            <div className="relative h-16 w-24 overflow-hidden rounded-lg border bg-muted">
                {row.original.featuredImage ? (
                    <Image
                        src={row.original.featuredImage}
                        alt={row.original.name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                        No Image
                    </div>
                )}
            </div>
        ),
    },

    {
        accessorKey: "name",
        header: "Vehicle",

        cell: ({ row }) => (
            <div>
                <p className="font-semibold">
                    {row.original.name}
                </p>

                <p className="text-sm text-muted-foreground">
                    {row.original.slug}
                </p>
            </div>
        ),
    },

    {
        accessorKey: "category.name",
        header: "Category",

        cell: ({ row }) => (
            <Badge variant="secondary">
                {row.original.category.name}
            </Badge>
        ),
    },

    {
        accessorKey: "seatingCapacity",
        header: "Seats",
    },

    {
        accessorKey: "luggageCapacity",
        header: "Luggage",
    },

    {
        accessorKey: "isFeatured",
        header: "Featured",

        cell: ({ row }) =>
            row.original.isFeatured ? (
                <Badge>Featured</Badge>
            ) : (
                <Badge variant="secondary">
                    No
                </Badge>
            ),
    },

    {
        accessorKey: "isActive",
        header: "Status",

        cell: ({ row }) =>
            row.original.isActive ? (
                <Badge className="gap-1">
                    <BadgeCheck size={14} />
                    Active
                </Badge>
            ) : (
                <Badge variant="destructive" className="gap-1">
                    <BadgeX size={14} />
                    Inactive
                </Badge>
            ),
    },

    {
        id: "actions",

        cell: ({ row }) => (
            <div className="flex justify-end gap-2">
                <Link href={`/admin/fleet/${row.original.id}`}>
                    <Button
                        size="icon"
                        variant="outline"
                    >
                        <Pencil size={16} />
                    </Button>
                </Link>

                <Button
                    size="icon"
                    variant="destructive"
                >
                    <Trash2 size={16} />
                </Button>
            </div>
        ),
    },
];