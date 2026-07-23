"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import CategoryTable from "./CategoryTable";

export default function Main() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Tourism Categories
                    </h1>

                    <p className="text-muted-foreground">
                        Organize tourism destinations into categories.
                    </p>
                </div>

                <Link href="/admin/tourism/categories/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Category
                    </Button>
                </Link>
            </div>

            <CategoryTable />
        </div>
    );
}