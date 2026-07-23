"use client";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { FleetCategoryColumns } from "./FleetCategoryColumns";
import { FleetCategoryTableItem } from "./types";

interface FleetCategoryTableProps {
    data: FleetCategoryTableItem[];
}

export default function FleetCategoryTable({
    data,
}: FleetCategoryTableProps) {
    const table = useReactTable({
        data,
        columns: FleetCategoryColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    console.log(data,'data')

    return (
        <div className="overflow-hidden rounded-xl border bg-white">

            <table className="w-full">

                <thead className="border-b bg-muted/40">

                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-5 py-4 text-left text-sm font-semibold"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}

                </thead>

                <tbody>

                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="border-b hover:bg-muted/30"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className="px-5 py-4"
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}