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
import { Input } from "@/components/ui/input"

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor("name", {
        header: () => "Artist",
        cell: (info) => (
            <div className="flex items-center gap-3">
                <img
                    src={info.row.original.image}
                    alt={info.getValue()}
                    className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium">{info.getValue()}</span>
            </div>
        ),
    }),
    columnHelper.accessor("monthlyListeners", {
        header: ({ column }) => (
            <Button
                variant="outline"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Monthly Listeners
                <ArrowUpDown className="h-4 w-4" />
            </Button>
        ),
        cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
    }),
    columnHelper.accessor("totalStreams", {
        header: ({ column }) => (
            <Button
                variant="outline"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Total Streams
                <ArrowUpDown className="h-4 w-4" />
            </Button>
        ),
        cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
    }),
    columnHelper.accessor("genres", {
        header: "Genres",
        cell: (info) => (
            <div className="flex flex-wrap gap-1">
                {info.getValue().map((genre) => (
                    <span key={genre} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {genre}
                    </span>
                ))}
            </div>
        ),
    }),
    columnHelper.accessor("averageRating", {
        header: ({ column }) => (
            <Button
                variant="outline"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Rating
                <ArrowUpDown className="h-4 w-4" />
            </Button>
        ),
        cell: (info) => (
            <div className="flex items-center">
                <span className="font-medium">{info.getValue()}</span>
                <span className="text-yellow-500 ml-1">★</span>
            </div>
        ),
    }),
];

export default function ArtistTable({ data }) {
    const pageSize = 6;
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSize,
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel:getFilteredRowModel(),
        manualPagination: false,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
    });

    return (
        <div className="rounded-md border bg-background p-4 w-full overflow-hidden">
            <div className="pb-5 flex justify-end">
                <Input
                    placeholder="Filter Artist"
                    value={(table.getColumn("name")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <Table >
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
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} className="border-b hover:bg-gray-900/20">
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} className="px-6 py-4 text-sm">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
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
