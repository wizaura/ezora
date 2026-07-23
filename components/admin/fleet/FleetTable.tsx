"use client";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { FleetColumns } from "./FleetTableColumns";
import { VehicleTableItem } from "./types";

interface FleetTableProps {
    data: VehicleTableItem[];
}

export default function FleetTable({
    data,
}: FleetTableProps) {
    const table = useReactTable({
        data,
        columns: FleetColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <Table>
                <TableHeader>
                    {table
                        .getHeaderGroups()
                        .map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(
                                    (header) => (
                                        <TableHead
                                            key={header.id}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header
                                                          .column
                                                          .columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    )
                                )}
                            </TableRow>
                        ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows.length ? (
                        table
                            .getRowModel()
                            .rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                >
                                    {row
                                        .getVisibleCells()
                                        .map(
                                            (cell) => (
                                                <TableCell
                                                    key={
                                                        cell.id
                                                    }
                                                >
                                                    {flexRender(
                                                        cell
                                                            .column
                                                            .columnDef
                                                            .cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            )
                                        )}
                                </TableRow>
                            ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={
                                    FleetColumns.length
                                }
                                className="h-40 text-center"
                            >
                                <div className="space-y-2">
                                    <p className="font-semibold">
                                        No vehicles found
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        Add your first
                                        vehicle.
                                    </p>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}