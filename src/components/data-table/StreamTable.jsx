"use client";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("name", {
        header: () => "Song",
        cell: (info) => (
            <span className="font-medium">{info.getValue()}</span>
        ),
    }),
    columnHelper.accessor("artist", {
        header: () => "Artist",
        cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("streams", {
        header: ({ column }) => (
            <Button
                variant="outline"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Streams
                <ArrowUpDown className="h-4 w-4" />
            </Button>
        ),
        cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
    }),
    columnHelper.accessor("avgDuration", {
        header: "Duration (sec)",
        cell: (info) => <span>{info.getValue()}s</span>,
    }),
    columnHelper.accessor("skippedRate", {
        header: "Skipped Rate",
        cell: (info) => <span>{(info.getValue() * 100).toFixed(1)}%</span>,
    }),
];

export default function StreamTable({ data }) {
    const pageSize = 6;
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSize,
    });



    const table = useReactTable({
        data:data?.topSongs,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
    });

    return (
        <div className="rounded-md border bg-background p-4 w-full overflow-hidden">
            {/* Search Filter */}
            <div className="pb-5 flex justify-end">
                <Input
                    placeholder="Search Song"
                    value={(table.getColumn("name")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>

            {/* Table */}
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-b">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="px-6 py-3 text-left text-sm font-semibold">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length > 0 ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} className="border-b hover:bg-gray-900/20">
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="px-6 py-4 text-sm">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="text-center py-6 text-gray-500">
                                No songs found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2 mt-4">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                    Page {pagination.pageIndex + 1} of {table.getPageCount()}
                </div>
            </div>
        </div>
    );
}
