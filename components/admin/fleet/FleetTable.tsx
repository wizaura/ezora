"use client";

import { useMemo, useState } from "react";

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

import ConfirmDialog from "@/components/common/ConfirmDialog";
import { toast } from "sonner";

interface FleetTableProps {
    data: VehicleTableItem[];
    onDelete?: (id: string) => void;
}

export default function FleetTable({
    data,
    onDelete,
}: FleetTableProps) {

    const [deleteVehicle, setDeleteVehicle] =
        useState<VehicleTableItem | null>(null);

    const [deleting, setDeleting] =
        useState(false);


    const columns = useMemo(
        () =>
            FleetColumns({
                onDelete: (vehicle) => {
                    setDeleteVehicle(vehicle);
                },
            }),
        []
    );


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:
            getCoreRowModel(),
    });


    async function handleDelete() {

        if (!deleteVehicle) {
            return;
        }

        try {

            setDeleting(true);

            const res = await fetch(
                `/api/admin/fleet/${deleteVehicle.id}`,
                {
                    method: "DELETE",
                }
            );

            const result =
                await res.json().catch(
                    () => null
                );

            if (!res.ok) {
                throw new Error(
                    result?.message ??
                    "Unable to delete vehicle."
                );
            }

            toast.success(
                "Vehicle deleted successfully."
            );

            onDelete?.(
                deleteVehicle.id
            );

            setDeleteVehicle(null);

        } catch (error) {

            console.error(
                "Failed to delete vehicle:",
                error
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to delete vehicle."
            );

        } finally {

            setDeleting(false);

        }
    }


    return (
        <>
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

                <Table>

                    <TableHeader>

                        {table
                            .getHeaderGroups()
                            .map(
                                (
                                    headerGroup
                                ) => (
                                    <TableRow
                                        key={
                                            headerGroup.id
                                        }
                                    >

                                        {headerGroup.headers.map(
                                            (
                                                header
                                            ) => (
                                                <TableHead
                                                    key={
                                                        header.id
                                                    }
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
                                )
                            )}

                    </TableHeader>


                    <TableBody>

                        {table.getRowModel().rows.length ? (

                            table
                                .getRowModel()
                                .rows.map(
                                    (row) => (
                                        <TableRow
                                            key={
                                                row.id
                                            }
                                        >

                                            {row
                                                .getVisibleCells()
                                                .map(
                                                    (
                                                        cell
                                                    ) => (
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
                                    )
                                )

                        ) : (

                            <TableRow>

                                <TableCell
                                    colSpan={
                                        columns.length
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


            {/* Delete Confirmation */}

            <ConfirmDialog

                open={
                    !!deleteVehicle
                }

                onOpenChange={(
                    open
                ) => {

                    if (
                        !open &&
                        !deleting
                    ) {
                        setDeleteVehicle(
                            null
                        );
                    }

                }}

                title="Delete vehicle?"

                description={
                    deleteVehicle
                        ? `"${deleteVehicle.name}" will be permanently deleted. This action cannot be undone.`
                        : "This vehicle will be permanently deleted."
                }

                confirmText="Delete Vehicle"

                cancelText="Cancel"

                onConfirm={
                    handleDelete
                }

                loading={
                    deleting
                }

            />

        </>
    );
}